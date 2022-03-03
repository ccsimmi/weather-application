export default function Footer() {
  return (
    <footer className="flex justify-center items-start mt-2">
      <p className="inline">Made with </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mx-1 "
        viewBox="0 0 20 20"
        fill="red"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
      <p className="inline">
        by
        <span> </span>
        <a
          href="https://github.com/ccsimmi/weather-application"
          className="text-blue-500 hover:underline font-semibold tracking-wide"
        >
          ccsimmi
        </a>
      </p>
    </footer>
  );
}
