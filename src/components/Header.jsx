import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sedditlogo from '../images/seddit-logo.png';

const Header = ({ search, handleSearch }) => (
  <header className="header">
    <Link to="/">
      <img className="header__logo" src={sedditlogo} alt="megaphone" />
      <h1 className="header__title">Seddit</h1>
    </Link>
    <form className="header__form">
      <input
        type="search"
        name="search"
        value={search}
        placeholder="Search Seddit"
        onChange={handleSearch}
        className="header__search"
      />
    </form>
  </header>
);

Header.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
};

export default Header;
