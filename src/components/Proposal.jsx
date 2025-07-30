function Proposal() {
  return (
    <div className="text-center py-10">
      <h2 className="text-4xl font-script text-rose-600 mb-4">Would you be my girlfriend?</h2>
      <div className="flex justify-center gap-4">
        <button className="bg-rose-400 text-white px-6 py-2 rounded-full hover:bg-rose-500 transition">
          💗 Yes
        </button>
        <button className="bg-white border border-rose-300 px-6 py-2 rounded-full hover:bg-rose-100 transition">
          🤭 Blush
        </button>
      </div>
    </div>
  );
}

export default Proposal;