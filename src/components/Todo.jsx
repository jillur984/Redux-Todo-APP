import { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodos, updateSearchTerm } from "../redux/action";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
const Todo = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  console.log(newTodoText);
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodos(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h1 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Personal Todo App
      </h1>

      {/* input text and btn */}
      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          className="ml-4 bg-blue-500 text-white rounded hover:bg-blue-800"
          onClick={handleAddTodoClick}
        >
          <FaPlus />
        </button>
      </div>

      {/* filter and search */}
      <div className="">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            type="text"
            name="search"
            id="search"
            placeholder="search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="ml-4 bg-blue-500 text-white rounded hover:bg-blue-800">
            <FaSearch />
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;
