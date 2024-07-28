import "./Logo.css";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#010146", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#012132", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <g>
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fontSize="30"
          fill="url(#blueGradient)" /* Use the gradient */
          fontFamily="'Pacifico', cursive"
          className="animated-text"
        >
          HK
        </text>
        <path
          className="animated-border"
          stroke="#000"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
        <path
          className="animated-border"
          stroke="#000"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
        />
      </g>
    </svg>
  );
}

export default Logo;
