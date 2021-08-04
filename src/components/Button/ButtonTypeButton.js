import PropTypes from "prop-types";
import s from "./ButtonTypeButton.module.scss";

const Button = ({ children, onClick }) => (
  <button type="button" className={s.button} onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
