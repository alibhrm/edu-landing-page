import { cta } from "../../assets";
const CTA = () => {
  return (
    <div className="w-full bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1480px] m-auto  max-w-[600px] px-4  md:px-0">
        <div className="md:grid grid-cols-2">
          <img src={cta} alt="" />
          <div className="py-24">
            <h2 className=" font-bold text-4xl capitalize">
                join <span className="text-[#3cbd95]">world's largest</span> learning platform today
            </h2>
            <p className=" py-9 capitalize">start learning by registening for free</p>
            <button className=" md:flex bg-[#3CBD95] rounded-md px-3 py-3 text-white capitalize">
            sign up for free
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
