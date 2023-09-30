const Filter = ({ setState }) => {
  const changeState = (e) => {
    setState(e.target.value);
  };
  return (
    <select className="filter" onChange={changeState}>
      <option value="all">All</option>
      <option value="compleated">Compleated</option>
      <option value="uncompleated"> Uncompleated</option>
    </select>
  );
};
export default Filter;
