import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import SearchResult from "./pages/SearchResult";
import Header from "./components/Header";
import NotFound from "./components/notFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResult />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
