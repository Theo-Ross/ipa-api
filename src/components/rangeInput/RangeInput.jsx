import "./RangeInput.scss";

const RangeInput = ({ min = 1, max = 80, handleInputChange, value }) => {
  return (
    <div className="range-input">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default RangeInput;
