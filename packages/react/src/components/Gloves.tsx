import React from 'react'

const Gloves = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M33.334 27.096c-.588-1.143-1.532-4.627-1.246-5.976.286-1.349 1.015-3.975.402-6.053L30.216 7.36s-.108-1.503-1.519-1.122c-1.949.526-1.501 2.043-1.501 2.043l.715 3.092 1.157 2.42s-.701.206-1.551-2.674l-2.872-9.731S24.578-.1 23.16.255c-1.85.463-1.521 2.102-1.521 2.102l2.662 9.02c-.402.05-.456.203-.46.191l-2.905-9.846S21.015.261 19.582.543c-1.92.377-1.695 2.08-1.695 2.08l2.939 9.851c.003.012-.479.156-.473.176l-2.506-8.494s.059-1.547-1.355-1.179c-2.018.525-1.659 2.142-1.659 2.142l2.676 9.05c.024.083-.45.226-.419.33l-1.92-6.507s.079-1.461-1.355-1.178c-1.837.363-1.448 2.006-1.448 2.006l3.101 10.51.037-.011c-.02.005.074.474.17.711.604 1.49 1.395 2.726 2.324 3.706.029.094.078.186.163.277.969 1.036 3.396 4.267 4.325 7.59.581 2.078 4.215.914 5.026.556 1.078-.477-.641-3.61-.753-4.311-.112-.701.618-1.482 1.096-.51.479.972.646 4.026 1.657 3.835 1.012-.191 2.888-1.17 3.558-1.855.44-.452.851-1.079.263-2.222z"/><path fill="#66757F" d="M33.794 26.905c-.588-1.143-1.532-4.627-1.246-5.976.286-1.349 1.015-3.975.402-6.053L30.676 7.17s-.413-1.401-1.816-.988c-1.4.414-.987 1.815-.987 1.815L28.759 11l.768 2.602s-.701.206-1.551-2.675l-2.872-9.731S24.69-.205 23.289.208c-1.401.414-.988 1.815-.988 1.815l2.715 9.203c-.006-.02-.713.162-.717.15L21.394 1.53S20.981.128 19.579.542c-1.401.414-.988 1.815-.988 1.815l2.905 9.847c.003.012-.692.235-.686.255l-2.506-8.494s-.414-1.401-1.815-.988c-1.401.414-.988 1.815-.988 1.815l2.665 9.03c.024.083-.649.383-.618.486l-1.92-6.507s-.414-1.401-1.815-.987c-1.401.414-.988 1.815-.988 1.815l3.102 10.51.037-.011c-.02.005.074.474.17.711.604 1.49 1.395 2.726 2.324 3.705.029.094.078.187.163.277.969 1.036 3.396 4.267 4.325 7.59.581 2.078 4.215.914 5.026.556 1.078-.477-.641-3.61-.753-4.311-.112-.7.618-1.482 1.096-.51.479.972.646 4.026 1.657 3.835 1.012-.191 2.888-1.17 3.558-1.855.441-.451.853-1.078.264-2.221z"/><path fill="#66757F" d="M29.743 26.025c-1.09-.681-3.683-3.193-4.127-4.498-.444-1.305-1.16-3.935-2.75-5.407l-5.895-5.461s-.861-1.236-1.879-.188c-1.406 1.448-.245 2.523-.245 2.523l2.196 2.291 2.231 1.488s-.497.536-2.701-1.505L9.129 8.373s-.819-1.244-1.855-.214c-1.353 1.344-.233 2.584-.233 2.584l6.899 6.391c-.32.248-.288.408-.298.399l-7.531-6.976s-.679-1.296-1.767-.321c-1.457 1.306-.393 2.654-.393 2.654l7.563 6.964c.009.008-.332.379-.317.393l-6.496-6.018s-.74-1.359-1.767-.32c-1.466 1.483-.33 2.689-.33 2.689l6.928 6.409c.063.058-.271.424-.192.498l-4.977-4.611s-.679-1.296-1.767-.32c-1.393 1.252-.219 2.464-.219 2.464s7.866 7.274 8.039 7.447c.173.172.536.496.536.496 1.319 1.112 2.401 1.536 3.798 2.031.156.056.257.086.376.12 1.363.395 5.1 1.931 7.597 4.311 1.562 1.488 4.09-1.37 4.603-2.092.683-.961-2.397-2.775-2.851-3.32-.454-.545-.227-1.589.681-.999s2.613 3.13 3.385 2.448c.772-.681 1.884-2.482 2.11-3.413.148-.612.181-1.361-.908-2.042z"/><path fill="#99AAB5" d="M30.041 25.625c-1.09-.681-3.682-3.193-4.127-4.498-.444-1.305-1.16-3.935-2.75-5.407l-5.895-5.461s-1.072-.993-2.065.079c-.992 1.072.08 2.064.08 2.064l2.297 2.128 1.991 1.844s-.497.536-2.701-1.505L9.427 7.974s-1.072-.993-2.065.079c-.992 1.072.079 2.065.079 2.065l7.039 6.52c-.015-.014-.53.504-.54.495l-7.531-6.976s-1.072-.993-2.065.079c-.993 1.072.079 2.064.079 2.064l7.532 6.977c.009.008-.475.556-.46.57L4.999 13.83s-1.072-.993-2.065.079c-.993 1.072.079 2.065.079 2.065l6.907 6.398c.063.059-.362.661-.283.734l-4.977-4.61s-1.072-.993-2.065.08c-.993 1.072.079 2.065.079 2.065l8.039 7.447s.332.341.536.496c1.28.972 2.444 1.603 3.741 2.01.127.042.314.107.433.141 1.363.395 5.1 1.931 7.597 4.311 1.562 1.489 4.09-1.37 4.603-2.092.683-.961-2.397-2.775-2.851-3.32-.454-.545-.227-1.589.681-.999s2.613 3.13 3.385 2.448c.772-.681 1.884-2.482 2.11-3.413.149-.614.182-1.364-.907-2.045z"/><path fill="#66757F" d="M19.097 27.624c-.067 0-.136-.014-.202-.043l-6.529-2.883c-.252-.111-.367-.406-.255-.659.112-.252.406-.366.66-.255l6.529 2.883c.252.111.367.406.255.659-.083.187-.267.298-.458.298zm2.497-2.997c-.127 0-.253-.048-.351-.144l-5.253-5.167c-.197-.193-.2-.51-.006-.707.193-.197.51-.2.707-.006l5.252 5.167c.197.193.199.51.006.707-.096.1-.226.15-.355.15zm-1.226 1.453c-.098 0-.195-.028-.281-.087l-6.235-4.241c-.229-.155-.288-.466-.132-.694.155-.229.467-.286.695-.132l6.235 4.241c.228.155.287.466.132.694-.097.143-.255.219-.414.219z"/></svg>
  )
}

export default Gloves
