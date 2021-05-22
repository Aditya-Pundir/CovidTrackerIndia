import React, { useEffect, useState } from "react";

export const DataFetcher = () => {
  //   fetchingAsync().then((res) => {
  //     return res.statewise.map((state) => {
  //       console.log(state);
  //     });
  //   });

  const [info, setInfo] = useState([]);
  const fetchingAsync = async () => {
    const url = "https://api.covid19india.org/data.json";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data.statewise);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchingAsync();
  }, []);
  return info.map((element) => {
    return (
      <div key={element.active}>
        <h3>{element.state}</h3>
        <p>Active: {element.active}</p>
        <p>Confirmed: {element.confirmed}</p>
        <br />
      </div>
    );
  });
  //   return <div></div>;
};
