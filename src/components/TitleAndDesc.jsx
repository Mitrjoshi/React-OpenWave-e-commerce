import React from "react";

const TitleAndDesc = ({ title, desc }) => {
  return (
    <div className=" ml-3">
      <h1 className={`${styles.h1Basic} font-extrabold text-[30px] mt-5`}>
        {title}
      </h1>
      <h1 className={`${styles.h1Basic}`}>{desc}</h1>
    </div>
  );
};

export default TitleAndDesc;
