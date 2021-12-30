import React from 'react'

const MrsClausMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D1D3D4" d="M10 25c0-2.209-.896-4-2-4s-2-2-2 3c0 2.209 1 5 3 5 1.104 0 1 0 1-4zm16.003 0c0-2.209.896-4 2-4 1.105 0 2-2 2 3 0 2.209-1 5-3 5-1.105 0-1 0-1-4z"/><path fill="#F3D2A2" d="M6 18.562c0-8.526 5.373-15.438 12-15.438s12 6.912 12 15.438C30 28 23 34 18 34S6 28 6 18.562z"/><ellipse fill="#D1D3D4" cx="7" cy="14" rx="2" ry="4"/><path fill="#F3D2A2" d="M8 21c0 2.209-1.119 4-2.5 4S3 23.209 3 21s1.119-4 2.5-4S8 18.791 8 21z"/><ellipse fill="#D1D3D4" cx="29" cy="14" rx="2" ry="4"/><path fill="#F3D2A2" d="M33 21c0 2.209-1.119 4-2.5 4S28 23.209 28 21s1.119-4 2.5-4 2.5 1.791 2.5 4z"/><path fill="#DD2E44" d="M30.961 10c.016-.185.039-.368.039-.556C31 4.229 25.175 0 17.989 0 10.803 0 4.978 4.229 4.978 9.444c0 .188.024.371.039.556h25.944zM18 30.651c-2.42 0-4.274-.687-4.352-.715-.517-.194-.779-.771-.584-1.288.194-.517.769-.779 1.286-.585.016.006 1.61.588 3.65.588 2.041 0 3.635-.582 3.65-.588.516-.194 1.094.071 1.285.587.193.517-.067 1.092-.584 1.286-.077.029-1.93.715-4.351.715z"/><path fill="#C1694F" d="M19 26h-2c-.553 0-1-.447-1-1s.447-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z"/><path fill="#662113" d="M12 23c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2c0 .553-.448 1-1 1zm12 0c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1s1 .447 1 1v2c0 .553-.447 1-1 1z"/><circle fill="#F1F2F2" cx="18" cy="11" r="4"/><circle fill="#F1F2F2" cx="11.5" cy="11.5" r="3.5"/><circle fill="#F1F2F2" cx="6" cy="12" r="3"/><circle fill="#F1F2F2" cx="24.5" cy="11.5" r="3.5"/><circle fill="#F1F2F2" cx="30" cy="12" r="3"/><ellipse fill="#D1D3D4" cx="23.5" cy="24" rx="3.5" ry="2"/><ellipse fill="#D1D3D4" cx="12.5" cy="24" rx="3.5" ry="2"/><path fill="#F1F2F2" d="M33 12c0-1.657-30-1.657-30 0s1.343 3 3 3h24c1.657 0 3-1.343 3-3z"/></svg>
  )
}

export default MrsClausMediumLightSkinTone
