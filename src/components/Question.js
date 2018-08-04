import React from "react";

class Question extends React.Component {
  render() {
    return (
      <div className="question">
        <span className="Q">Q.</span>
        <span className="qnaCategory">[북클럽]</span>
        <span>트레바리 전체 일정을 더 편하게 보고 싶어요!</span>
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
