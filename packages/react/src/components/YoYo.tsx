import React from 'react'

const YoYo = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><ellipse fill="#BE1931" cx="17.722" cy="21.507" rx="12.917" ry="13.993"/><ellipse fill="#A0041E" cx="15.569" cy="21.507" rx="12.917" ry="13.993"/><path fill="#99AAB5" d="M28.298 13.741c-1.643 0-3.457-.825-5.227-1.629-2.124-.966-4.322-1.966-5.46-1.113l-1.167-1.555c2.06-1.544 4.79-.303 7.431.898 2.023.92 4.117 1.868 5.327 1.263.664-.331 1.155-1.195 1.459-2.566l1.899.422c-.444 2-1.259 3.27-2.49 3.885-.558.278-1.153.395-1.772.395z"/><ellipse fill="#DD2E44" cx="13.417" cy="21.507" rx="12.917" ry="13.993"/><ellipse fill="#EA596E" cx="12.878" cy="21.507" rx="9.149" ry="10.433"/><path fill="#99AAB5" d="M31.611 10.222c-2.41 0-3.889-3.398-3.889-5.833S29.176.5 31.611.5 35.5 1.954 35.5 4.389c0 2.436-1.479 5.833-3.889 5.833zm0-7.778c-1.344 0-1.944.6-1.944 1.944 0 1.878 1.141 3.889 1.944 3.889s1.944-2.011 1.944-3.889c.001-1.344-.599-1.944-1.944-1.944z"/></svg>
  )
}

export default YoYo
