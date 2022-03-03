export default function Header({
  handleLocationSearch,
  citySearch,
  setCitySearch,
}) {
  return (
    <header className="p-2 relative">
      <form>
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="City"></label>
          <input
            className="bg-slate-200 w-full p-2 rounded-sm"
            id="City"
            type="text"
            name="City"
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
            placeholder="Search for a city..."
          />
        </div>
        <button onClick={handleLocationSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-4 right-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </header>
  );
}
