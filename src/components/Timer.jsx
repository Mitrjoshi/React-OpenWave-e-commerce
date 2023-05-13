import { useState, useEffect } from "react";
import Wave from "../assets/Wave.svg";

const Timer = () => {
  const [timer, setTimer] = useState(() => {
    const storedTimer = localStorage.getItem("timer");
    return storedTimer ? JSON.parse(storedTimer) : 14 * 60 * 60 + 35 * 60 + 56; // use stored timer value if available, otherwise use initial value
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("timer", JSON.stringify(timer));
  }, [timer]);

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  return (
    <div className="bg-[#151515] max-w-[1520px] py-4 m-auto md:mt-5 md:rounded-[15px] px-3">
      <div className="flex flex-col  justify-center xs:justify-around items-center text-white text-[20px] sm:text-[25px] lg:text-[40px]">
        <div className="flex justify-center items-center">
          <img className="h-[32px] mr-2" src={Wave} alt="Wave" />
          <h1>
            The Summer <span className="font-extrabold ">Sale 69%</span> off is
            here
          </h1>
        </div>
        <div className="flex gap-3 xs:gap-5 font-extrabold">
          <div>Ends in:</div>
          <div className="flex text-[#2081e2] gap-2 xs:gap-4">
            <div>{hours}H</div>
            <span>:</span>
            <div>{minutes}M</div>
            <span>:</span>
            <div>{seconds}S</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
