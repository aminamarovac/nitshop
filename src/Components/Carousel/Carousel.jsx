import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carousel=({data})=>{
    return (
        <SliderCarousel>
           {data.map((d)=>(
            <div><img src={d.imgSrc}/>
            <p className="legend">{d.imgText}</p></div>
           ))}
        </SliderCarousel>
    );
}