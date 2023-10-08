"use client";
import Input from "./components/Input";
import React, { useState } from "react";
import Current from "./components/Current";
import WeatherDetails from "./components/WeatherDetails";
import WeekForeCast from "./components/WeekForeCast";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const url = `http://api.weatherapi.com/v1/forecast.json?key=56ac53d38ab94fcfb0a211824230410&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found...");
        setData({});
      }
    }
  };
  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div>
        <h2>Welcome to the weather App</h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div>
        <h2>City Not found</h2>
        <h2>Enter a valid City</h2>
      </div>
    );
  } else {
    content = (
      <>
      <div>
        <Current data={data} />
        <WeekForeCast />
        </div>
        <div>
          <WeatherDetails />
        </div>
        </>
    )
  }
  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen">
      <div className="bg-white/25 w-full  flex flex-col h-fit">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} 
          setLocation={setLocation} />
          <h1 className="text-white py-4  px-4 rounded-xl md:mb-0 order-1 italic font-bold">
            weather app.
          </h1>
        </div>
      </div>
      {content}
    </div>
  );
};

export default Home;
