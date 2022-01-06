import React from "react";

const Wether = ({ items, isLoading }) => {
  const current = new Date();
  const time = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return isLoading ? null : (
    <div className="p-20 m-10 text-white bg-black bg-opacity-50 w-max rounded-3xl">
      <div className="">
        <p className="my-5 text-4xl font-bold text-center">
          Today Wether {time}
        </p>
        <table className="text-center table-auto">
          <thead>
            <tr>
              <td className="w-1/4 p-4">Today Temp is:</td>
              <td className="w-1/4 p-4">Wind is:</td>
              <td className="w-1/4 p-4">Description:</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-1/4 p-4 text-2xl font-bold">
                {items.temperature}
              </td>
              <td className="w-1/4 p-4 text-2xl font-bold">{items.wind}</td>
              <td className="w-1/4 p-4 text-2xl font-bold">
                {items.description}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="">
        <p className="my-5 text-4xl font-bold text-center">
          Forecast in the next 3 days
        </p>
        {items.forecast.map((items) => {
          return (
            <div className="flex justify-center">
              <table className="text-center table-auto">
                <thead>
                  <tr>
                    <th className="w-1/4 p-4 text-2xl">Day</th>
                    <th className="w-1/4 p-4 text-2xl">Temperature</th>
                    <th className="w-1/4 p-4 text-2xl">Wind</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-1/4 p-4">{items.day}</td>
                    <td className="w-1/4 p-4">{items.temperature}</td>
                    <td className="w-1/4 p-4">{items.wind}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wether;
