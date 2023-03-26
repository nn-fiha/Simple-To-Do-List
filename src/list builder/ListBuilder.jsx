import { useState } from "react";
import "./ListBuilder.css";

function ListInput({ handleOnChange, handleOnClick }) {
  return (
    <div className="inputList">
      <input
        type="text"
        placeholder="Things to do.."
        onChange={handleOnChange}
      />
      <button type="button" className="button" onClick={handleOnClick}>
        Add
      </button>
    </div>
  );
}

function List({ list, handleDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {item} &nbsp;&nbsp;{" "}
              <i
                class="uil uil-times-square"
                onClick={() => handleDeleteItem(index)}
              ></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ListBuilder() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  function handleOnChange(event) {
    setNewItem(event.target.value);
  }
  function handleOnClick() {
    if (!newItem) {
      return;
    }
    setList([...list, newItem]);
  }

  function handleDeleteItem(index) {
    const newItem = [...list];
    newItem.splice(index, 1);
    setList(newItem);
  }

  return (
    <div className="listBuilder">
      <div>
        <h2>To-Do List</h2>
      </div>
      <ListInput
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
      />
      <List list={list} handleDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default ListBuilder;
