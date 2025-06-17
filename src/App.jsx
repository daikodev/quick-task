import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
// import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {
        /* <Route path="/about" element={<AboutPage />} />
      <Route path="/features" element={<FeaturesPage />} /> */
        <Route path="/pricing" element={<PricingPage />} />
        /* <Route path="/signup" element={<SignupPage />} /> */
      }
    </Routes>
  );
}

export default App;
