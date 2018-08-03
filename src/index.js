import React from "react";
import ReactDOM from "react-dom";
import Qnabutton from "./components/Qnabutton.js";

class Base extends React.Component {
  state = {
    status: "북클럽",
    qnacategory: [
      "북클럽",
      "신청/환불",
      "독후감",
      "놀러가기",
      "이벤트",
      "아지트"
    ]
  };

  render() {
    const { status, qnacategory } = this.state;

    return (
      <div className="indexbackground">
        <div className="indexpage">
          <p>더 궁금하신 사항은 contact@trevari.co.kr로 문의주세요 :)</p>
          <p>-회신가능요일: 수~일</p>
          {qnacategory.map(step => {
            return <Qnabutton qnacategory={step} status={this.state.status}/>;
          })}
        </div>
        <style JSX>
          {`
        .indexbackground {
            background-color:rgba(0,0,0,0.05);
            padding:100px;
            
        }
        .indexpage {
            text-align:center;
            background-color:white;
            opacity:1;
        }
        `}
        </style>
      </div>
    );
  }
}

ReactDOM.render(<Base />, document.getElementById("root"));
