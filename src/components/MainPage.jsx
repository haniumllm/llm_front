import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";

export default function MainPage() {
    const navigate = useNavigate();

    const handleChatBotRedirect = () => {
        navigate("/chatbot");
    };

    return (
        <div className="container">
            <div className="card">
                <div className="header">특허 분석 챗봇</div>
                <button className="button" onClick={handleChatBotRedirect}>
                    챗봇 시작
                </button>
            </div>
        </div>
    );
}
