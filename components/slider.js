import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const slides = [
  {
    title: "Slide 1",
    image: "cloth.jpg",
  },
  {
    title: "Slide 2",
    image: "electronics.png",
  },
  {
    title: "Slide 3",
    image: "perfume.jpg",
  },
];

const Slide = ({ title, image }) => {
  return (
    <div className="h-64 w-full">
      <img src={image} alt={title} className="object-cover h-full w-full" />
    </div>
  );
};

const SliderComponent = () => {
  return (
    <div className="mx-auto max-w-screen-lg mt-10 mb-10">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <Slide {...slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
