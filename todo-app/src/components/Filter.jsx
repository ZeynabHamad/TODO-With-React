import { Fragment } from "react";

const Filter = ({ setState, setDate }) => {
  const changeState = (e) => {
    setState(e.target.value);
  };

  const changeDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <Fragment>
      <select className="filter" onChange={changeState}>
        <option value="all">All</option>
        <option value="compleated">Completed</option>
        <option value="uncompleated">Uncompleted</option>
      </select>

      <select className="filterDate" onChange={changeDate}>
        <option value="all">All Dates</option>
        <option value="today">Today</option>
        <option value="yesterday">yesterday</option>
        <option value="this-week">This Week</option>
      </select>
    </Fragment>
  );
};

export default Filter;
