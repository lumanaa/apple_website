import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils/index";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <nav className='navbar screen-max-width'>
          <img src={appleImg} alt='Apple' width={14} height={18} />
          <div className='nav-1'>
            {navLists.map((nav) => (
              <div key={nav} className="nav">{nav}</div>
            ))}
          </div>
          <div className="search-bag-container">
            <img src={searchImg} alt='search' width={18} height={18} />
            <img src={bagImg} alt='bag' width={18} height={18} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
