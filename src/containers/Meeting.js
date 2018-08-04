import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";

class Meeting extends React.Component {
  state = {
    data: [
      {
        clubName: "프로파일러",
        subject: "범죄심리학&프로파일링",
        title: "위험한 사람들",
        place: "압구정 아지트",
        time: "2018년 7월 8일 일요일 오후 2:20",
        imgSrc:
          "https://image.trevari.co.kr/6ab96d5c-5110-40d4-b596-c790c194c03d.jpeg"
      },
      {
        clubName: "국경",
        subject: "국가와 경제",
        title: "노예의 길",
        place: "안국 아지트",
        time: "2018년 8월 10일 월요일 오후 5:20",
        imgSrc:
          "https://image.trevari.co.kr/8a2cd7b0-0d30-40ad-8df8-d0d989e76e58.jpeg"
      },
      {
        clubName: "프로파일러",
        subject: "범죄심리학&프로파일링",
        title: "위험한 사람들",
        place: "압구정 아지트",
        time: "2018년 7월 8일 일요일 오후 2:20",
        imgSrc:
          "https://image.trevari.co.kr/69bbd433-7bed-4221-a385-ca133d9384ad.jpeg"
      },
      {
        clubName: "국경",
        subject: "국가와 경제",
        title: "노예의 길",
        place: "안국 아지트",
        time: "2018년 8월 10일 월요일 오후 5:20",
        imgSrc:
          "https://image.trevari.co.kr/d25e15b3-fc7d-48ad-a305-0a966ea7a85d.jpeg"
      },
      {
        clubName: "프로파일러",
        subject: "범죄심리학&프로파일링",
        title: "위험한 사람들",
        place: "압구정 아지트",
        time: "2018년 7월 8일 일요일 오후 2:20",
        imgSrc:
          "https://image.trevari.co.kr/324356e8-b8ce-49a2-954d-9cce7a4bf5cf.jpeg"
      },
      {
        clubName: "국경",
        subject: "국가와 경제",
        title: "노예의 길",
        place: "안국 아지트",
        time: "2018년 8월 10일 월요일 오후 5:20",
        imgSrc:
          "https://image.trevari.co.kr/422d858e-5940-4cd7-84e5-dc034a38785d.jpg"
      }
    ]
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <Search />
        <div className="test">
          <Card data={data} />
          <Card data={data} />
          <Card data={data} />
          <Card data={data} />
          <Card data={data} />
        </div>
        <style JSX>
          {`
        .test {
            padding:16px 6px;
            margin:auto;
            width:75%;
        }
        
        `}
        </style>
      </div>
    );
  }
}

export default Meeting;
