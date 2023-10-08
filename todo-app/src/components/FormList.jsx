import Todo from "./Todo";
import Card from "./UI/Card";
const FormList = ({ data, setData, filterTodo }) => {
  const clearHandler = () => {
    setData([]);
    localStorage.clear("todos");
  };

  return (
    <>
      <Card className="users">
        <ul className="users">
          {filterTodo.map((dataa, index) => (
            <Todo data={data} setData={setData} todo={dataa} key={index} />
          ))}
          <button className="clear" type="button" onClick={clearHandler}>
            Clear Your TODO
          </button>
        </ul>
      </Card>
    </>
  );
};
export default FormList;
