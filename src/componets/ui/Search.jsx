import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div className="search">
      <form>
        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2 input">
          <DebounceInput
            minLength={2}
            debounceTimeout={800}
            type="text"
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md chatinput sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search for location"
            value={text}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
