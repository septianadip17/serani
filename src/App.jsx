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
      <div className="pt-20">
        {" "}
        {/* biar konten ga ketutup navbar */}
        <section id="home">
          <Landing />
        </section>
        <section id="story">
          <StorySection />
        </section>
        <section id="gallery">
          <GallerySection />
        </section>
        <section
          id="jadigini"
        >
          <LoveLetter />
        </section>
      </div>
      <Proposal />
    </div>
  );
}

export default App;
