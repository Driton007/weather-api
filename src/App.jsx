import axios from "axios";
import React, { useState, useEffect } from "react";
import Search from "./componets/ui/Search";
import Weather from "./componets/weather/Weather";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://goweather.herokuapp.com/weather/${query}`
      );
      const data = result.data;
      setItems(data);
      setIsLoading(false);

      console.log(data);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container mx-auto">
        <div className="flex justify-center py-20">
          <div className="col-6">
            <Search getQuery={(q) => setQuery(q)} />
          </div>
        </div>
        <h1 className="my-5 text-2xl font-bold text-center md:text-5xl">
          Weather in: {query}
        </h1>
        <div className="flex justify-center">
          <Weather isLoading={isLoading} items={items} />
        </div>
      </div>
    </div>
  );
};

export default App;

