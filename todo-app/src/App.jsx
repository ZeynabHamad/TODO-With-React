import FormInput from "./components/FormInput";
import Filter from "./components/Filter";
import Header from "./components/UI/Header/Header";
import FormList from "./components/FormList";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getToLocalStore();
  }, []);

  useEffect(() => {
    saveToLocalStore();
    filterHandler();
  }, [data, state, dateFilter]);

  const onData = (dataa) => {
    setData((prev) => [
      ...prev,
      { name: dataa, id: Math.random(), compleate: false, date: new Date() },
    ]);
  };

  const saveToLocalStore = () => {
    if (data.length > 0) {
      localStorage.setItem("todos", JSON.stringify(data));
    }
  };

  const getToLocalStore = () => {
    let toLocalStorage = JSON.parse(localStorage.getItem("todos"));
    setData(toLocalStorage);
  };

  const filterHandler = () => {
    let filtered = [...data];

    switch (state) {
      case "compleated":
        filtered = filtered.filter((item) => item.compleate === true);
        break;

      case "uncompleated":
        filtered = filtered.filter((item) => item.compleate === false);
        break;
      default:
        break;
    }

    switch (dateFilter) {
      case "today":
        filtered = filtered.filter((item) => {
          const itemDate = new Date(item.date);
          const today = new Date();
          return (
            itemDate.getDate() === today.getDate() &&
            itemDate.getMonth() === today.getMonth() &&
            itemDate.getFullYear() === today.getFullYear()
          );
        });
        break;

      case "yesterday":
        filtered = filtered.filter((item) => {
          const itemDate = new Date(item.date);
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          return (
            itemDate.getDate() === yesterday.getDate() &&
            itemDate.getMonth() === yesterday.getMonth() &&
            itemDate.getFullYear() === yesterday.getFullYear()
          );
        });
        break;

      case "this-week":
        filtered = filtered.filter((item) => {
          const itemDate = new Date(item.date);
          const today = new Date();
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(today.getDate() - 7);
          return itemDate >= oneWeekAgo && itemDate <= today;
        });
        break;

      default:
        break;
    }

    setFilteredData(filtered);
  };

  return (
    <div>
      <Header />
      <div className="form">
        <FormInput onGetdata={onData} />
        <Filter setState={setState} setDate={setDateFilter} />
      </div>

      {filteredData.length > 0 && (
        <FormList
          data={filteredData}
          setData={setData}
          filterTodo={filteredData}
        />
      )}
    </div>
  );
}

export default App;
