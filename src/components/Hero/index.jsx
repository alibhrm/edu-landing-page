import { heroImg } from "../../assets";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2  max-w-[600px] px-4  md:px-0">
        <div className="flex flex-col justify-start">
          <p className=" text-[#3CBD95] uppercase py-2 text-2xl">
            start to success
          </p>
          <h1 className=" capitalize text-5xl font-semibold md:leading-[72px] md:text-6xl py-2">
            access to <span className="text-[#3CBD95]">5000+</span> courses from{" "}
            <span className="text-[#3CBD95]">300</span> instructors &
            institutions
          </h1>
          <p className=" text-sm py-5 text-gray-600">
            Various versions have evolved over the years, sometimes by accident.
          </p>
          <form className="bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between">
            <input
              className="bg-white"
              type="text"
              placeholder="What do want to learn?"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#000" }}
              />
            </button>
          </form>
        </div>
        <img src={heroImg} className="md:order-last order-first" alt="" />
      </div>
    </div>
  );
};

export default Hero;
