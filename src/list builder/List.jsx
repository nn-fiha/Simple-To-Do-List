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

  export default List;