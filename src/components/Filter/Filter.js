import PropTypes from "prop-types";
import s from "./Filter.module.scss";

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    <span className={s.labelText}>Find contacts by name</span>
    <input
      className={s.input}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
