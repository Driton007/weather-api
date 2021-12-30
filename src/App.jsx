import axios from "axios";
import React, { useState, useEffect } from "react";
// import Search from "./componets/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const current = new Date();
  const time = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://goweather.herokuapp.com/weather/${query}`
      );
      const data = result.data;
      setItems(data);
      console.log(data);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container mx-auto">
        <div className="flex justify-center py-20">
          <div className="col-6">
            <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
              <input
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for location"
              />
              {/* <Search getQuery={(q) => setQuery(q)} /> */}
            </div>
          </div>
        </div>

        <div className="md:col-5">
          <div className="flex items-center justify-center space-x-10">
            <h1 className="my-5 text-2xl font-bold text-center md:text-5xl">
              Gostivar
            </h1>
            <p>{time}</p>
          </div>
          <p className="text-4xl font-bold">
            Today Temp is {items.temperature}
          </p>
          <p className="text-4xl font-bold">{items.wind}</p>
          <p className="text-4xl font-bold">{items.description}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
