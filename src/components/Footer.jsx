function Footer() {
  return (
    <footer className=" py-6 bg-pink-100 text-center text-xs text-pink-500 flex flex-col items-center gap-3">
      <hr className="w-1/2"/>
      <div className="space-y-1">
        <p>Made with ❤️, giggles, and a little magic ✨</p>
        <p>by Septian for Rani 😋</p>
      </div>

      <div className="w-full max-w-xs">
        <audio controls autoPlay loop className="w-full rounded-md shadow-sm">
          <source src="/music/bg-music.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </footer>
  );
}

export default Footer;
