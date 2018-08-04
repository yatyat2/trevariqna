import React from "react";

class Search extends React.Component {
  render() {
    return (
      <form>
        <br />
        <input
          className="Search-Window"
          type="text"
          placeholder="클럽명 검색"
        />
        <button className="Search-Button" type="submit">
          검색
        </button>
        <style JSX>
          {`
        .Search-Window{
            padding:6px 12px;
        }

        .Search-Button {
            color:white;
            background-color:orange;
            border:1.5px solid orange;
            padding:6px 12px;
        }
        `}
        </style>
      </form>
    );
  }
}

export default Search;
