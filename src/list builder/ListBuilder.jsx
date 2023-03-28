import { useState } from "react";
import List from "./List";
import ListInput from "./ListInput";

import "./ListBuilder.css";

function ListBuilder() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState([]);

  function handleOnChange(event) {
    setNewItem({
      name: event.target.value,
      selected: false,
    });
  }

  function doesExist(newItemName) {
    const arr = [...list];
    return arr.find((item) => item.name === newItemName);
  }

  function handleOnClick() {
    if (!newItem.name) {
      alert("Empty String!");
      return;
    }
    if (doesExist(newItem.name)) {
      alert("It is already in the list");
      return;
    }
    if (newItem.name.length > 20) {
      alert("Name is too long!");
      return;
    }

    setList([...list, newItem]);
    setNewItem({name: "",
      selected: false,});
  }

  function handleDeleteItem(index) {
    const item = [...list];
    item.splice(index, 1);
    setList(item);
  }

  function handleStrikeItem(index) {
    const items = [...list];
    if (items[index].selected === true) {
      items[index].selected = false;
    } else {
      items[index].selected = true;
    }
    setList([...items]);
  }

  return (
    <div className="listBuilder">
      <div>
        <h2>To-Do List</h2>
      </div>
      <ListInput
        handleOnChange={handleOnChange}
        handleOnClick={handleOnClick}
         Item={newItem}/>
      <List
        list={list}
        handleDeleteItem={handleDeleteItem}
        handleStrikeItem={handleStrikeItem}
      />
    </div>
  );
}

export default ListBuilder;
