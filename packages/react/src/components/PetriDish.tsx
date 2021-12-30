import React from 'react'

const PetriDish = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#99AAB5" d="M1 15h34v6H1z"/><path fill="#99AAB5" d="M18 12c-9.389 0-17 4.029-17 9 0 1.06.364 2.073 1 3.017.858 1.275 2.226 2.421 4 3.357C9.075 28.996 13.316 30 18 30c5.81 0 10.934-1.545 14-3.9.832-.639 1.499-1.34 2-2.083.636-.945 1-1.957 1-3.017 0-4.971-7.611-9-17-9z"/><path fill="#E1E8ED" d="M2 18.017v6c.858 1.275 2.226 2.421 4 3.357v-6c-1.774-.936-3.142-2.082-4-3.357zm32 6v-6c-.501.744-1.168 1.444-2 2.083v6c.832-.638 1.499-1.339 2-2.083z"/><ellipse fill="#CCD6DD" cx="18" cy="15" rx="17" ry="9"/><ellipse fill="#EA596E" cx="18" cy="14.5" rx="15.111" ry="7.5"/><path fill="#99AAB5" d="M18 9c7.661 0 13.974 2.832 14.961 6.5.088-.328.15-.66.15-1C33.111 10.358 26.346 7 18 7S2.889 10.358 2.889 14.5c0 .34.061.672.15 1C4.026 11.832 10.339 9 18 9z"/><ellipse fill="#F5F8FA" cx="11.5" cy="13" rx="1.5" ry="1"/><ellipse fill="#F5F8FA" cx="8.5" cy="15" rx="1.5" ry="1"/><ellipse fill="#F5F8FA" cx="15.5" cy="14" rx="1.5" ry="1"/><ellipse fill="#F5F8FA" cx="11.5" cy="17" rx="1.5" ry="1"/><ellipse fill="#F5F8FA" cx="21.5" cy="18" rx="1.5" ry="1"/></svg>
  )
}

export default PetriDish
