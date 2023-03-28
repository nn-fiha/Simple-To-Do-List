function List({ list, handleDeleteItem, handleStrikeItem }) {
  return (
    <div className="list">
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              style={{ textDecoration: item.selected ? "line-through" : "" }}
            >
              <input
                type="checkbox"
                className="checkbox"
                onClick={() => handleStrikeItem(index)}
                checked={item.selected}
              />

              {item.name}

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

export default List;
