import React from "react";

class Question extends React.Component {
  render() {
    const qnaData = this.props.qnaData;

    return (
      <div className="question">
        <span className="Q">Q.</span>
        <span className="qnaCategory">{qnaData[0].category}</span>
        <span>{qnaData[0].question}</span>
        <style JSX>
          {`
        .Q {
            font-weight:bold;
            color:orange;
            margin-right:15px;
            float:left;
        }
        .qnaCategory {
            font-weight:bold;
            width:84px;
            float:left;
        }
        .question {
            border-bottom:1px dotted grey;
            padding:15px 10px 15px 10px;
        }
        `}
        </style>
      </div>
    );
  }
}

export default Question;
