import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위해 React Router 사용
import "./MainPage.css"; // MainPage에 대한 CSS 파일 불러오기

export default function MainPage() {
  const navigate = useNavigate(); // useNavigate로 페이지 이동 함수 호출

  const handleChatBotRedirect = () => {
    navigate("/chatbot"); // 챗봇 페이지로 이동
  };

  return (
    <div className="container">
      {/* 헤더 */}
      <div className="header">특허 분석 챗봇</div>

      {/* 챗봇 페이지로 이동하는 버튼 */}
      <div className="button-container">
        <button className="button" onClick={handleChatBotRedirect}>
          챗봇 시작
        </button>
      </div>
    </div>
  );
}
