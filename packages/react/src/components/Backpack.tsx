import React from 'react'

const Backpack = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path d="M11.946 27C-1.036 7.876 7.524 2.752 9.114 2c.149-.07.242-.105.245-.107.418-.209.638-.675.529-1.125C9.779.318 9.372 0 8.903 0H4.847C1.054 0-4.282 11 5.859 28c.151.253 5.073 0 5.073 0 .559 0 1.324-.541 1.014-1zM31.229 0h-4c-.462 0-.863.318-.971.768-.107.45.109.916.521 1.125.004.002.095.037.242.107 1.568.752 10.01 5.876-2.792 25-.307.459.448 1 1 1 0 0 4.854.253 5.002 0 10-17 4.739-28 .998-28z" fill="#C1694F"/><path d="M6.889 28.836l.004.01c-.064-.293 5.363-1.387 5.053-1.846C-1.036 7.876 7.524 2.752 9.114 2H4.845C1.053 2-3.268 13 6.889 28.836zM31.231 2h-4.21c1.568.752 10.01 5.876-2.792 25-.307.459 4.984 1.839 4.986 1.836C39.231 13 34.971 2 31.231 2z" fill="#662113"/><path fill="#C1694F" d="M9.916 8c-.561 0-1.015-.448-1.015-1 0-3.316-2.028-5-4.056-5-.47 0-.08-.782.029-1.232.11-.45.516-.768.985-.768h5.071c3.791 0 4.938 6.136 5.057 6.835.049.29-.034.586-.226.811-.195.225-.478.354-.775.354h-5.07zm16.315 0c.553 0 1-.448 1-1 0-3.316 2-5 4-5 .463 0 .078-.782-.029-1.232-.107-.45-.508-.768-.971-.768h-5c-3.738 0-4.869 6.136-4.986 6.835-.049.29.033.586.223.811.191.225.47.354.763.354h5z"/><path fill="#BE1931" d="M6 32s0 4 4 4h16s4 0 4-4V10s0-4-4-4H10c-4 0-4 4-4 4v22z"/><path fill="#A0041E" d="M24 28H12c-2.201 0-3-1.794-3-3V11c0-.552.448-1 1-1s1 .448 1 1v14c.012.45.195 1 1 1h12c.45-.012 1-.194 1-1V11c0-.552.447-1 1-1s1 .448 1 1v14c0 2.201-1.794 3-3 3z"/><path fill="#FFF" d="M16 25s0-1 1-1h2s1 0 1 1v5s0 1-1 1h-2s-1 0-1-1v-5z"/></svg>
  )
}

export default Backpack
