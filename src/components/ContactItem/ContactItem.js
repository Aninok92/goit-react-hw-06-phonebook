import PropTypes from "prop-types";
import { BsFillPersonFill } from "react-icons/bs";
import s from "./ContactItem.module.scss";

const ContactItem = ({ name, number }) => (
  <div className={s.wrapper}>
    <BsFillPersonFill size="28" fill="#87CEEB" />
    <p className={s.contact}>{name}</p>
    <p className={s.contact}>{number}</p>
  </div>
);

ContactItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactItem;
