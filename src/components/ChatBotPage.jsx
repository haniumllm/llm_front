import React, { useState, useRef, useEffect } from "react";
import "./ChatBotPage.css";

export default function ChatBotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    let botResponse = "특허 분석 정보를 찾을 수 없습니다.";
    if (input.includes("AI")) {
      botResponse = "🤖 AI 기반 대화형 특허 분석 시스템을 찾았습니다.";
    } else if (input.includes("자율 주행 드론")) {
      botResponse = "🚗 자율 주행 드론 관련 특허 목록을 불러왔습니다.";
    }

    const botMessage = { sender: "bot", text: botResponse };
    setTimeout(() => setMessages((prev) => [...prev, botMessage]), 500);

    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
      <div className="chatbot-wrapper">
        <div className="results-section">
          <div className="results-header">상세 내용</div>
          <div className="results-timestamp">자율 주행 드론 — 분석완료 00:01:00s</div>
          <ul className="results-list">
            <li>
              <div className="result-title">1. 자율주행장치 레이싱게임 제공방법과 시스템</div>
              <div className="result-sub">출원번호: 1020190088451 | 유사율 58.15%</div>
              <div className="result-actions">
                <button>요약 보기</button>
                <button>우회전략</button>
                <button>PDF 보기</button>
              </div>
            </li>
            <li>
              <div className="result-title">2. 자율 주행 기기를 이용한 사용자 맞춤 정보 제공 시스템</div>
              <div className="result-sub">출원번호: 1020210141677 | 유사율 80%</div>
              <div className="result-actions">
                <button>요약 보기</button>
                <button>우회전략</button>
                <button>PDF 보기</button>
              </div>
            </li>
            <li>
              <div className="result-title">3. 인공지능 기반 자연어 처리 챗봇 시스템</div>
              <div className="result-sub">출원번호: 1020220099888 | 유사율 76.42%</div>
              <div className="result-actions">
                <button>요약 보기</button>
                <button>우회전략</button>
                <button>PDF 보기</button>
              </div>
            </li>
            <li>
              <div className="result-title">4. 드론 영상 분석을 위한 AI 모델 자동 학습 시스템</div>
              <div className="result-sub">출원번호: 1020230001123 | 유사율 66.77%</div>
              <div className="result-actions">
                <button>요약 보기</button>
                <button>우회전략</button>
                <button>PDF 보기</button>
              </div>
            </li>
            <li>
              <div className="result-title">5. 딥러닝 기반 실시간 객체 추적용 드론 제어 장치</div>
              <div className="result-sub">출원번호: 1020230054321 | 유사율 82.94%</div>
              <div className="result-actions">
                <button>요약 보기</button>
                <button>우회전략</button>
                <button>PDF 보기</button>
              </div>
            </li>
          </ul>
        </div>

        <div className="chat-section">
          <div className="chat-header">특허정보</div>
          <div className="chat-box">
            {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.sender}`}>{msg.text}</div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input-area">
            <input
                className="chat-input"
                placeholder="질문을 입력하세요"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="chat-send-button" onClick={handleSend}>
              SEND
            </button>
          </div>
        </div>
      </div>
  );
}
