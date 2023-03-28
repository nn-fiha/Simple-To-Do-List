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

export default ListInput;