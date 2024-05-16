"use client";

import { getData } from "../../DataFetching/DataFetching";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


export interface BackgroundPictureProps {
            id: number;
            author: string;
            url: string;
            download_url: string
}

const BackgroundPicture = ({setSelectedImage}:{setSelectedImage: React.Dispatch<React.SetStateAction<string>>}) => {

    const [image, setImage] = useState<BackgroundPictureProps[]>([])

    useEffect(() => {
        //to do: get next set of pictures
        getData("https://picsum.photos/v2/list?page=5&limit=10")
        .then((response) => setImage(response))
        }, [])

    function handleImage(image: string) {
        setSelectedImage(image)
    }

    return (
        <section className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {Object.entries(image).map(([key, value]) => (
                    <SwiperSlide key={key}>
                        <button onClick={() => handleImage(value.download_url)}>
                            <img src={value.download_url} alt={`alt-${value.id}`} />
                        </button>
                    </SwiperSlide>
                ))
                }    
            </Swiper>
            {/* <div>
                <img src={selectedImage} alt="test" />
                <h3><handleSelectedAdvice /></h3>
            </div> */}
        </section>

    );

}

export default BackgroundPicture;