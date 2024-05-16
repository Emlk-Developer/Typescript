"use client";

import { getData } from "../../DataFetching/DataFetching";
import { useEffect, useState } from "react";


export interface AdviceProps {
    id: number
    advice: string
}

const Advice = ({setSelectedAdvice}:{setSelectedAdvice: React.Dispatch<React.SetStateAction<string>>}) => {

    const [adviceId, setAdviceId] = useState(1)
    const [data, setData] = useState<AdviceProps[]>([])

    useEffect(() => {
        getData(`https://api.adviceslip.com/advice/${adviceId}`)
        .then((response) => setData(response))
        }, [adviceId])

    const handleClick = (direction: string) => {
        setAdviceId(direction === "next" ? adviceId + 1 : adviceId - 1)
    };

    const handleSelectedAdvice = (selectedAdvice: string) => {
        setSelectedAdvice(selectedAdvice) 
    }


        return (
            <section className="container">
                <div className="w-3/4 border rounded-md border-solid border-gray-200 p-10 mx-auto bg-gray-100">
                    <h1>Life Advice</h1>
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key}>
                            <button onClick={() => handleSelectedAdvice(value.advice)}>
                                <h2 className="font-bold">
                                {value.advice}
                                </h2>
                            </button>
                        </div>
                        ))
                    }
                    <button 
                        className="btnPrimary"
                        onClick={() => handleClick("previous")}
                    >
                        Get Previous Advice
                    </button>
                    <button 
                        className="btnPrimary"
                        onClick={() => handleClick("next")}
                    >
                        Get Next Advice
                    </button>
                </div>
            </section>
        
        );


}

export default Advice;