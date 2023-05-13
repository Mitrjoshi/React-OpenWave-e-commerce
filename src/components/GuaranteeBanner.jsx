import React from "react";

const GuaranteeBanner = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      className="flex max-w-[1520px] rounded-[15px] bg-[#151515] pb-2 mt-5 m-auto justify-around items-center px-2"
    >
      <div className="flex flex-col items-center justify-center text-white">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334305_small.svg?v=1682336123"
            alt=""
            className="md:h-[100px] h-[60px]"
          />
        </div>
        <div className="font-extrabold sm:text-[18px] ">1 year</div>
        <div className="text-[12px] font-extralight">Warranty</div>
      </div>
      <div className="flex flex-col items-center justify-center text-white">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334304_small.svg?v=1682336123"
            alt=""
            className="md:h-[100px] h-[60px]"
          />
        </div>
        <div className="font-extrabold sm:text-[18px] ">7 day</div>
        <div className="text-[12px] font-extralight">Replacement</div>
      </div>
      <div className="flex flex-col items-center justify-center text-white">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334303_small.svg?v=1682336123"
            alt=""
            className="md:h-[100px] h-[60px]"
          />
        </div>
        <div className="font-extrabold sm:text-[18px] ">Free</div>
        <div className="text-[12px] font-extralight">Shipping</div>
      </div>
      <div className="flex flex-col items-center justify-center text-white">
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334302_small.svg?v=1682336123"
            alt=""
            className="md:h-[100px] h-[60px]"
          />
        </div>
        <div className="font-extrabold sm:text-[18px] ">GST</div>
        <div className="text-[12px] font-extralight">Billing</div>
      </div>
    </div>
  );
};

export default GuaranteeBanner;
