

const ArrowImg = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="-5.5 0 26 26"
      >
        <title>{"chevron-right"}</title>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M14.404 11.36 3.637 1.6a2.11 2.11 0 0 0-3.008 0 2.117 2.117 0 0 0 0 3L9.885 13 .629 21.4a2.117 2.117 0 0 0 0 3c.83.84 2.177.84 3.008 0l10.767-9.76c.45-.45.648-1.05.611-1.64a2.115 2.115 0 0 0-.611-1.64"
        />
      </svg>
    </>
  )
}
const SearchIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 32 32"
      >
        <title>{"search"}</title>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M13.46 24.45c-6.29 0-11.389-5.01-11.389-11.2 0-6.19 5.099-11.21 11.389-11.21 6.29 0 11.39 5.02 11.39 11.21 0 6.19-5.1 11.2-11.39 11.2Zm18.228 5.8-8.259-8.13c2.162-2.35 3.491-5.45 3.491-8.87C26.92 5.93 20.894 0 13.46 0 6.026 0 0 5.93 0 13.25c0 7.31 6.026 13.24 13.46 13.24a13.52 13.52 0 0 0 8.472-2.96l8.292 8.16c.405.4 1.06.4 1.464 0 .405-.39.405-1.04 0-1.44Z"
        />
      </svg>
    </>
  )
}

const HeartIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 -1 32 32">
    <title>{"heart-like"}</title>
  
    {/* Defina o gradiente linear de baixo para cima */}
    <defs>
      <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="100%" style={{ stopColor: "#FD3030" }} />
        <stop offset="0%" style={{ stopColor: "#E21717" }} />
      </linearGradient>
    </defs>
  
    {/* Aplique o gradiente linear ao preenchimento */}
    <path
      fill="url(#gradient)"
      fillRule="evenodd"
      d="M24 0c-3.333 0-6.018 1.842-8.031 4.235C14.013 1.76 11.333 0 8 0 3.306 0 0 4.036 0 8.438c0 2.361.967 4.061 2.026 5.659l12.433 14.906c1.395 1.309 1.659 1.309 3.054 0l12.461-14.906C31.22 12.499 32 10.799 32 8.438 32 4.036 28.694 0 24 0"
    />
  </svg>
  )
}

export {
  ArrowImg,
  SearchIcon,
  HeartIcon
}