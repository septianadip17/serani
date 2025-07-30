import StorySection from "./components/StorySection";
import LoveLetter from "./components/LoveLetter";
import Proposal from "./components/Proposal";

function App() {
  const stories = [
    {
      title: "The First Time We Talked",
      text: "I was nervous, you were sweet. That moment stuck with me forever.",
    },
    {
      title: "Our First Call",
      text: "Your laugh made me smile like an idiot. I didn’t want to hang up.",
    },
    {
      title: "Inside Jokes",
      text: "‘Gendut Lucu’ still makes me giggle every time I remember.",
    },
    {
      title: "When I Missed You",
      text: "Some nights I wished I could teleport just to see you smile.",
    },
    {
      title: "The Day I Realized I Like You",
      text: "I didn’t plan it, it just happened. You made my world feel lighter.",
    },
  ];

  return (
    <main className="bg-blush min-h-screen p-4">
      <section className="text-center mt-10">
        <h1 className="text-5xl font-script text-rose-600 mb-6">
          Our Story, Raney
        </h1>
        <p className="text-gray-700 font-body max-w-xl mx-auto">
          A little memory lane of us — every scroll tells a piece of my heart.
        </p>
      </section>

      <section>
        {stories.map((story, i) => (
          <StorySection key={i} title={story.title} text={story.text} />
        ))}
      </section>

      <LoveLetter />
      <Proposal />
    </main>
  );
}

export default App;
