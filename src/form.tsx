export default function Form({ searchHandler, setInput, isLoading }) {
  return (
    <form
      onSubmit={searchHandler}
      className="bg-[#177BE0] p-8 flex-1/3 gap-2 rounded-2xl h-52 w-full flex justify-between items-center"
    >
      <input
        type="text"
        placeholder="Search for any country"
        className="bg-white placeholder:text-slate-400 w-full text-slate-700 px-3 py-2 rounded-2xl h-[50%] shadow-md focus:shadow"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-white text-normal rounded-2xl px-[1rem] py-[0.2rem] h-[50%] cursor-pointer"
        disabled={isLoading}
      >
        Search {isLoading && <span className="animate-ping">...</span>}
      </button>
    </form>
  );
}
