import React from "react";
import Slider from "react-slick";

const Corousal = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    lazyLoad: "progressive",
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="outline-none xs:flex hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/DDnew-dimension_desktop_65851fdc-8162-46b6-b808-472ea00401b9_1440x.jpg?v=1682600881"
            className="object-contain w-full h-full "
          />
        </div>
        <div className="outline-none xs:hidden flex">
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/DDnew-dimesion_1ae44ba3-9aee-4c36-8834-2cda9847c9c8_500x.jpg?v=1682600882"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div>
        <div className="outline-none xs:flex hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/new-dimension_desktop-3_1440x.jpg?v=1683280885"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="outline-none xs:hidden flex">
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/new-dimesion-3_500x.jpg?v=1683280886"
            className="object-contain w-full h-full "
          />
        </div>
      </div>
      <div>
        <div className="outline-none xs:flex hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1550-desktop_9e577988-bcbd-491d-b353-b5d65ee9456b_1440x.jpg?v=1682661291"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="outline-none xs:hidden flex">
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/1150-MOBILE_1_500x.jpg?v=1682661291"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div>
        <div className="outline-none xs:flex hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_desktop-new_1440x.jpg?v=1682347857"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="outline-none  xs:hidden flex">
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_new_500x.jpg?v=1682347857"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </Slider>
  );
};

export default Corousal;
