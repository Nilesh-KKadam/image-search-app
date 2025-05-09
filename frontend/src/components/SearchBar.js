import React from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = React.useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images"
        style={{ padding: "10px", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px", marginLeft: "10px" }}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
