import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react-corso-api.netlify.app/.netlify/functions/holiday";

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.success) {
    return (
      <>
        {data.data.length > 0 ? (
          <SingleHoliday {...data.data[selected]} />
        ) : (
          <h3>No Vacanze</h3>
        )}
      </>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

export default Holiday;
