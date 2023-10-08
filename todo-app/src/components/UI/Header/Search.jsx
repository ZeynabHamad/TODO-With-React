const Search = ({ setSearch }) => {
  return (
    <div className="search">
      <input
        placeholder="Search for Todo"
        className="searchInput"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
export default Search;
