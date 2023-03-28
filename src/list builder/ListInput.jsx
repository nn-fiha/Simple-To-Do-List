function ListInput({ handleOnChange, handleOnClick ,Item}) {
  return (
    <div className="inputList">
      <input
        className="input"
        type="text"
        value={Item.name}
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
