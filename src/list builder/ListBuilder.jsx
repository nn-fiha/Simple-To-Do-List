import { useState } from "react";
import List from "./List";
import ListInput from "./ListInput";

import "./ListBuilder.css";

function ListBuilder() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  function handleOnChange(event) {
    setNewItem(event.target.value);
  }

  function doesExist(newItem) {
    return list.includes(newItem);
  }

  function handleOnClick() {
    if (!newItem) {
      alert("Empty String!");
      return;
    }
    if (doesExist(newItem)) {
      alert("it is already in the list");
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
