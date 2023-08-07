export default function Spinner() {
  return (
    <div role="status">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
      >
        <path
          d="M 30 50
		a 1 1 1 0 1 40 0
		h-12.5
		a 1 1 1 0 0 -15 0
		z"
          fill="#f00"
          stroke="#222"
        ></path>
        <circle cx="50" cy="50" r="5" fill="#fff" stroke="#fff"></circle>
        <path
          d="M 30 50
		a 1 1 1 0 0 40 0
		h-12.5
		a 1 1 1 0 1 -15 0
		z"
          fill="#fff"
          stroke="#222"
        ></path>
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
