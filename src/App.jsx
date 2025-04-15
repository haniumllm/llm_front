import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Switch -> Routes로 변경
import MainPage from "./components/MainPage.jsx";
import ChatBotPage from "./components/ChatBotPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Switch -> Routes */}
        {/* 메인 페이지 */}
        <Route path="/" element={<MainPage />} />{" "}
        {/* component -> element로 변경 */}
        {/* 챗봇 페이지 */}
        <Route path="/chatbot" element={<ChatBotPage />} />{" "}
        {/* component -> element로 변경 */}
      </Routes>
    </Router>
  );
}

export default App;
