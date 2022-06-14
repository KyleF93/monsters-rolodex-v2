import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type={className}
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
