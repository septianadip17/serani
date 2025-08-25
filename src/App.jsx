import Landing from "./components/Landing";
import StorySection from "./components/StorySection";
import LoveLetter from "./components/LoveLetter";
import Proposal from "./components/Proposal";
import GallerySection from "./components/GallerySection";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className=" mx-auto font-sans">
      <Navbar />
      <Landing />
      <StorySection />
      <GallerySection />
      <LoveLetter />
      <Proposal />
    </div>
  );
}

export default App;
