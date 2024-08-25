import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../redux/filtersSlice";
const SearchBox = () => {
  const searchInputId = useId();
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.name);
  const handleFilter = (value) => {
    dispatch(setFilterValue(value));
  };

  return (
    <div className={css.searchWrap}>
      <label className={css.searchLabel} htmlFor={searchInputId}>
        Find contacts by name
      </label>
      <input
        className={css.searchInput}
        type="text"
        name="search"
        id={searchInputId}
        value={filterValue}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
