import Landing from "../components/Landing.jsx";
import StorySection from "../components/StorySection.jsx";
import LoveLetter from "../components/LoveLetter.jsx";
import Proposal from "../components/Proposal.jsx";
import GallerySection from "../components/GallerySection.jsx";
import Navbar from "../components/Navbar.jsx";

function Home() {
  return (
    <div className=" mx-auto font-sans">
      <Navbar />
      <div className="pt-20">
        {" "}
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

export default Home;
