import React from "react";

class Question extends React.Component {
  state = {
    isopen: false
  };

  renderanswer(isopen, answer) {
    if (isopen) {
      return <div>{answer}</div>;
    }
  }

  openanswer() {
    this.setState({
      isopen: !this.state.isopen
    });
  }

  render() {
    const { qnaData } = this.props;
    const isopen = this.state.isopen;
    return (
      <div>
        <div className="questionButton" onClick={() => this.openanswer()}>
          <span className="Q">Q.</span>
          <span className="qnaCategory">{qnaData.category}</span>
          <span className={isopen ? "openQestion" : null}>
            {qnaData.question}
          </span>
        </div>
        <div className={isopen ? "answer" : null}>
          {this.renderanswer(isopen, qnaData.answer)}
        </div>
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
        .questionButton {
            border-bottom:1px dotted grey;
            padding:15px 10px 15px 10px;
        }
        .openQestion {
            color:orange;
            font-weight:bold;
        }
        .answer {
            padding:20px 20px 40px 125px;
            border-bottom:1px dotted grey;
        }
        `}
        </style>
      </div>
    );
  }
}

export default Question;
