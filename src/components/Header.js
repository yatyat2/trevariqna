import React from "react";
import { Link } from "react-router-3";

class Header extends React.Component {
  render() {
    return (
      <div>
        <span className="Menu-Bar">
          <Link to={"/"}>qna</Link>
        </span>
        <Link to={"meeting"}>미팅</Link>
        <style JSX>
          {`
        .Menu-Bar {
            margin-right:20px;
        }
        `}
        </style>
      </div>
    );
  }
}

export default Header;
