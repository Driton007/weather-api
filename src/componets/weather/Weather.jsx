import React from "react";
// import TodayWether from "./TodayWether";
// import Spinner from "../ui/Spinner";

const Wether = ({ items, isLoading }) => {
  return isLoading ? null : (
    <div className="p-20 m-10 text-white w-max bg-gradient-to-r from-indigo-500 to-violet-900 rounded-3xl">
      <div className="">
        <p className="my-5 text-4xl font-bold text-center">Today Wether is </p>
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

//  <div className="cards">
//       <div className="md:col-5">
//         <div className="flex items-center justify-center space-x-10">
//           <h1 className="my-5 text-2xl font-bold text-center md:text-5xl">
//             Weather in: {query}
//           </h1>
//           <p className="text-4xl font-bold">{time}</p>
//         </div>
//         <p className="text-4xl font-bold">Today Temp is:{items.temperature}</p>
//         <p className="text-4xl font-bold">Wind is:{items.wind}</p>
//         <p className="text-4xl font-bold">Description:{items.description}</p>
//         {/* {console.log(items)} */}
//          <div className="">
//           {items.forecast.map((items) => {
//             return <p>{items.wind}</p>;
//           })}
//         </div>
//       </div>
//     </div>

// <div className="grid grid-cols-4 gap-4">
//   <div className="">{items.day}</div>
//   <div className="">{items.temperature}</div>
//   <div className="">{items.wind}</div>
// </div>
