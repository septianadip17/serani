const AnimatedHearts = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 100}px`,
            animationDelay: `${Math.random() * 10}s`,
            fontSize: `${Math.random() * 2 + 1.5}rem`,
          }}
        >
          ❤️💗
        </span>
      ))}
    </div>
  );
};
export default AnimatedHearts;