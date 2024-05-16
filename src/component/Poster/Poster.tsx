

const Poster = ({selectedAdvice, selectedImage}: {selectedAdvice:string, selectedImage:string}) => {


    return (
        <div className="pt-14 relative w-2/3 my-10 mx-auto ">
            <img src={selectedImage } alt="this alt" className="border-4 solid border-blue-700 opacity-60"/>
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{selectedAdvice}</h2>
        </div>
    )
}

export default Poster