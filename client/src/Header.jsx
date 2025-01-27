import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="box">
        <Link className="button" to="/">
          Home
        </Link>
        <Link className="button" to="/books">
          图书列表
        </Link>
        <Link className="button" to="/createbook">
          添加新书
        </Link>
      </div>
    </>
  );
};

export default Header;
