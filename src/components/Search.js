import React from "react";

class Search extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form
        className="Search-Form"
        onSubmit={event => {
          event.preventDefault();
          handleSubmit(this.refs.search.value);
        }}
      >
        <input
          ref="search"
          className="Search-Window"
          type="text"
          placeholder="클럽명 검색"
        />
        <button className="Search-Button" type="submit">
          검색
        </button>
        <style JSX>
          {`
        .Search-Form{
            display:flex;
            justify-content:flex-end;
            margin:1px;
            width:70%;
            margin:0px auto;
        }

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
