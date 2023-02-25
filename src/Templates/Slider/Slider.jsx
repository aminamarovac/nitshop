import { Carousel } from "react-responsive-carousel";

const Slider=()=>{

    const sliders=[
        {
            imgSrc:"../../assets/images/home/girl1.jpg",
            imgText:"Image text 1",
        },
        {
            imgSrc:"../../assets/images/home/girl2.jpg",
            imgText:"Image text 2",
        },
        {
            imgSrc:"../../assets/images/home/girl3.jpg",
            imgText:"Image text 3",
        },
    ]
   
    return (<Carousel data={sliders}/>)
    
}

export default Slider;