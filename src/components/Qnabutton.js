import React from "react";

class Qnabutton extends React.Component {
  // const {qnacategory} = this.props.qnacategory  왜 안되는 걸까여

  render() {
    return (
      <button className={this.props.status == this.props.qnacategory ? "buttonactive":"button"}>
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
        }

        .button:hover{
            background-color:orange;
            color:white;
        }

        .buttonactive {
            background-color:orange;
            color:white;
            border:1px solid orange;
            border-radius:2px;
            padding:6px 12px 6px 12px;
            margin:0px 10px 10px 0px;
        }
        `}
        </style>
      </button>
    );
  }
}

export default Qnabutton;
