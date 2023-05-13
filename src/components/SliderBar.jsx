import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState, useEffect, useContext } from "react";
import styles from "../styles.js";
import { ShopContext } from "../context/ShopContextProvider";

const SliderBar = () => {
  function valuetext(value) {
    return `${value}₹`;
  }

  const { slider } = useContext(ShopContext);
  const [sliderValue, setSliderValue] = useState(4000);

  function valuetext(value) {
    return `${value}₹`;
  }

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    slider(sliderValue);
  };

  return (
    <div className="flex md:flex-col flex-row items-center md:items-start md:gap-0 gap-4">
      <div>
        <Box sx={{ width: 160 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={1500}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            min={1500}
            max={4000}
            onChange={handleSliderChange}
            sx={{ color: "#2081e2" }}
            size="small"
          />
        </Box>
      </div>
      <div>
        <p className={`${styles.h1Basic} text-[14px]`}>₹{sliderValue}</p>
      </div>
    </div>
  );
};

export default SliderBar;
