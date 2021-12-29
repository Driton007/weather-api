import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://goweather.herokuapp.com/weather/gostivar`
      );
      const data = result.data;
      setItems(data);
      console.log(data);
    };
    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto bg-black">
        <div className="flex justify-center py-20">
          <div className="col-6">
            <div className="flex space-x-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search for Location"
              />
              <input type="submit" value="Submit" class="submit bg-white" />
            </div>
          </div>
        </div>
        <div className="bg-white col-5">
          <h1 className="text-center">Gostivar</h1>
          <p>{items.wind}</p>
          <p>{items.temperature}</p>
          <p>{items.description}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
