import React from "react";

class Qnabutton extends React.Component {
  render() {
    const { qnacategory, status, onClick } = this.props;

    return (
      <button
        onClick={() => onClick(qnacategory)}
        className={status === qnacategory ? "buttonactive" : "button"}
      >
        {this.props.qnacategory}
        <style JSX>
          {`
        .button {
            background-color:white;
            color:orange;
            border:1px solid orange;
            border-radius:2px;
            padding:6px 12px 6px 12px;
            margin:0px 10px 10px 0px;
            outline:0;
        }

        .button:hover{
            background-color:orange;
            color:white;
            outline:0;
        }

        .buttonactive {
            background-color:orange;
            color:white;
            border:1px solid orange;
            border-radius:2px;
            padding:6px 12px 6px 12px;
            margin:0px 10px 10px 0px;
            outline:0;
        }
        `}
        </style>
      </button>
    );
  }
}

export default Qnabutton;
