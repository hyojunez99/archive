import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/common/header/Header";

import HomePage from "./pages/HomePage";
import IssueDetailPage from "./pages/IssueDetailPage";
import IssuePage from "./pages/IssuePage";
import Footer from "./components/common/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/issuepage" element={<IssuePage />} />

        <Route path="/issue/:id" element={<IssueDetailPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
