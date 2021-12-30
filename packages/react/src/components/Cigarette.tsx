import React from 'react'

const Cigarette = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D99E82" d="M13 30H2s-2 0-2-2v-5c0-2 2-2 2-2h11v9z"/><path fill="#E1E8ED" d="M12 21h14v9H12z"/><path fill="#66757F" d="M31 21h-6v9h6s2 0 2-2v-5c0-2-2-2-2-2z"/><path fill="#CCD6DD" d="M27.79 20c-.488 0-.916-.358-.988-.855-.029-.2-.654-4.924 4.475-8.002 2.498-1.499 3.063-4.246 2.532-6.164C33.561 4.083 32.673 2 29.791 2c-3.142 0-3.963 1.77-4.15 2.562-.282 1.197 0 2.141.625 2.594.649.47 1.423.332 1.932.017.389-.24.594-.646.594-1.173 0-.552.447-1 1-1 .553 0 1 .448 1 1 0 1.221-.562 2.269-1.542 2.874-1.106.683-2.819.538-3.919-.077-1.351-.756-2.061-2.623-1.589-4.619C24.358 1.562 26.62 0 29.791 0c2.908 0 5.186 1.703 5.945 4.445.889 3.208-.522 6.667-3.431 8.412-4 2.4-3.53 5.962-3.525 5.998.08.547-.299 1.055-.845 1.134-.048.008-.097.011-.145.011z"/></svg>
  )
}

export default Cigarette
