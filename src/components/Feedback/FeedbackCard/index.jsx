import { avatar, quotationMark } from "../../../assets";
const FeedbackCard = () => {
  return (
    <div className=" bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <img src={avatar} alt="" />
          <div>
            <h1 className=" font-semibold">Jenny Wilson</h1>
            <p>UI-UX Designer</p>
          </div>
        </div>
        <img src={quotationMark} className="h-8" alt="" />
      </div>
      <div className=" py-3">
        <p>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
          Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent
          nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.Ut
          pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam
          sed imperdiet turpis. In hac habitasse platea dictumst.
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
