
"use client";

import { useState } from "react";

const KeywordField = ({ handleKeywords }) => {
  const [inputValue, setInputValue] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const keyword = inputValue.trim();
      if (keyword !== "") {
        const updatedKeywords = [...keywords, keyword];
        setKeywords(updatedKeywords);
        handleKeywords(updatedKeywords);
        setInputValue("");
      }
    }
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="keyword" className="form-label">
          Subscription Topics
        </label>
        <input
          type="text"
          value={inputValue}
          className="form-control"
          placeholder="Type keyword(s) and press Enter"
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div>
          Keywords:
          {keywords.map((keyword, index) => (
            <span key={index}>{` [${keyword}] `}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default KeywordField;
