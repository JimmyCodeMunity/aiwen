import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import NewsPage from "./pages/NewsPage";
import ResourcesPage from "./pages/ResourcesPage";
import JoinUsPage from "./pages/JoinUsPage";
import ReadBlog from "./pages/ReadBlog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/getinvolved" element={<GetInvolvedPage />} />
        <Route path="/newsandevents" element={<NewsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/joinus" element={<JoinUsPage />} />
        <Route path="/readblog/:id" element={<ReadBlog />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
