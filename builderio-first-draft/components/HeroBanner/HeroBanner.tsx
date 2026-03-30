
import Image from 'next/image'

type HeroBannerProps = {
    heading: string;
    subHeading: string;
    image:string
    altText: string
}

const HeroBanner = ({heading,subHeading,image, altText}: HeroBannerProps) => {
  return (
    <div className='flex gap-5'>
        <div>
            <h1>{heading}</h1>
            <p>{subHeading}</p>
        </div>
        <Image src={image} alt={altText} />
    </div>
  )
}

export default HeroBanner