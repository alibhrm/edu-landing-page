import Card from "../Card";
import Slider from "react-slick";
import { courses } from "../../Data/Courses";
const Courses = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="w-full  bg-[#E9F8F3B2] py-24">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]">
        <div className="py-4">
          <h1 className="py-3 text-3xl font-bold">
            Most Popular <span className="text-[#20B486]">Courses</span>
          </h1>
          <p className="text-[#6D737A]">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>
        <Slider {...settings}>
          {courses.map((course) => (
            <Card course={course} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
