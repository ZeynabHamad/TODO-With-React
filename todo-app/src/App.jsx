import FormInput from "./components/FormInput";
import Filter from "./components/Filter";
import Header from "./components/UI/Header/Header";
import FormList from "./components/FormList";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState("all");
  const [returnByFilter, setReturnByFilter] = useState([]);

  useEffect(() => {
    getToLocalStore();
  }, []);

  useEffect(() => {
    saveToLocalStore();
    filterHandler();
  }, [data, state]);

  const onData = (dataa) => {
    setData((prev) => [
      ...prev,
      { name: dataa, id: Math.random(), compleate: false },
    ]);
  };

  const saveToLocalStore = () => {
    if (data.length > 0) {
      localStorage.setItem("todos", JSON.stringify(data));
    }
  };

  const getToLocalStore = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let toLocalStorage = JSON.parse(localStorage.getItem("todos"));
      setData(toLocalStorage);
      console.log(toLocalStorage);
    }
  };

  const filterHandler = () => {
    switch (state) {
      case "compleated":
        setReturnByFilter(data.filter((item) => item.compleate == true));
        break;

      case "uncompleated":
        setReturnByFilter(data.filter((item) => item.compleate == false));
        break;
      default:
        setReturnByFilter(data);
    }
  };

  return (
    <div>
      <Header />
      <div className="form">
        <FormInput onGetdata={onData} />
        <Filter setState={setState} />
      </div>

      {data.length && data.length > 0 && (
        <FormList data={data} setData={setData} filterTodo={returnByFilter} />
      )}
    </div>
  );
}

export default App;
