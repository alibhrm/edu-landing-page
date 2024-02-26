import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from "../../assets";
const Companies = () => {
  return (
    <div className="w-full bg-white py-22">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <h1 className=" text-center font-bold text-2xl text-[#536E96]">
          Trusted by over 25,000 teams around the world.
        </h1>
        <p className=" text-center text-[#536E96] py-2">
          Leading companies use the same courses th help employees keep their
          skill fresh
        </p>
        <div className="flex justify-center py-8 md:gap-8 ">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
            <img src={companyLogo1} />
            <img src={companyLogo2} />
            <img src={companyLogo3} />
            <img src={companyLogo4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
