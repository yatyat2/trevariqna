import React from "react";

class Card extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="Club-Card">
        <div className="Club-Image">
          <img
            width="100%"
            height="200px"
            src={data[0].imgSrc}
            alt="클럽사진"
          />
        </div>
        <div className="Title">{data[0].title}</div>
        <div className="Place">{data[0].place}</div>
        <div className="Time">{data[0].time}</div>
        <div className="Overray-Text">
          <div className="Club-Name">{data[0].clubName}</div>
          <div>{data[0].subject}</div>
        </div>
        <style JSX>
          {`
        .Club-Card {
            display:inline-block;
            width:340px;
            height:300px;
            margin:16px;
        }

        .Overray-Text {
            padding:12px 16px;
            position:relative;
            bottom:159px;
            color:white;
            background-color:rgba(0,0,0,0.5);
        }

        .Club-Name {
            font-weight:bold;
        }
        .Title {
            color:blue;
            font-weight:bold;
            margin-top:8px;
        }
        .Place {
            margin-top:8px;
            color:grey;
        }

        .Time {
            color:grey;
            margin-bottom:8px;
        }
        `}
        </style>
      </div>
    );
  }
}

export default Card;
