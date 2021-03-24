import * as React from "react";
import { Link } from "react-router-dom";

export const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return (
    <div className="d-flex flex-column flex-lg-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        SQL, Node and React Lab
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link to={`/home`} className="text-dark">
          All Blogs
        </Link>
      </nav>
      <Link to={`/post/`} className="text-dark">
        Add Blogs
      </Link>
    </div>
  );
};

interface MenuProps {}

export default Menu;
