import React from 'react'

const FlagMorocco = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#C1272D" d="M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#006233" d="M15.047 22.165l1.128-3.471-2.953-2.145h3.649L18 13.074l1.129 3.474h3.649l-2.953 2.145 1.128 3.471L18 20.019l-2.953 2.146zm3.583-2.603l.916.665-.35-1.077-.566.412zm-1.826-.412l-.35 1.077.916-.665-.566-.412zm.241-.74l.955.694.955-.694-.365-1.122h-1.182l-.363 1.122zM15.5 17.288l.915.665.216-.665H15.5zm3.869 0l.216.665.915-.665h-1.131zm-1.019-.74L18 15.47l-.35 1.079h.7z"/></svg>
  )
}

export default FlagMorocco
