import { useState } from "react";

export default function Input({ onClick }) {
  const [city, setCity] = useState("");

  return (
    <div className="formular">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for a city... "
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => onClick(city)} type="button" className="btn">
        submit
      </button>
    </div>
  );
}
