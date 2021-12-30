import React from 'react'

const Helicopter = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#66757F" d="M16.26 26h2v5h-2zm-8 0h2v5h-2z"/><ellipse fill="#99AAB5" cx="6.259" cy="3" rx="6" ry="1"/><ellipse fill="#99AAB5" cx="20.259" cy="3" rx="6" ry="1"/><path fill="#99AAB5" d="M12.26 3h2v6h-2z"/><ellipse fill="#66757F" cx="13.259" cy="3" rx="2" ry="1"/><path fill="#FFCC4D" d="M34.259 10c0-3 0-7-1-7s-3 4-4 6 5 1 5 1z"/><path fill="#FFCC4D" d="M34.259 10c0-2.209-8-3-19-3h-2C6.632 7 .509 12.451.509 18.25S4.259 28 13.259 28s12-4.701 12-10.5c0-.881-.138-1.731-.371-2.549C29.259 14 34.259 12.006 34.259 10z"/><path fill="#3B88C3" d="M4.259 13c-2.091 2.918-3.068 7.589 1.213 7.784 4.787.216 6.787.216 7.85-2.372 1.364-3.32.937-7.413-.276-8.195-2.32-1.497-6.695-.135-8.787 2.783zm16.841-.465C23.259 16 23.17 18.696 19.259 20c-3 1-4-2-3.841-5.535.112-2.483.206-4.195 1.841-4.465 1.447-.24 2.526.426 3.841 2.535z"/><path fill="#99AAB5" d="M31.441 7.114c.903 1.273 1.271 2.564.82 2.884-.45.32-1.548-.454-2.451-1.726-.903-1.273-1.271-2.564-.82-2.884.45-.321 1.547.453 2.451 1.726z"/><path fill="#99AAB5" d="M34.72 11.735c.909 1.279 1.28 2.575.83 2.894-.45.32-1.553-.458-2.46-1.737-.909-1.279-1.279-2.576-.829-2.896.45-.318 1.551.46 2.459 1.739z"/><path fill="#66757F" d="M33.076 9.419c.319.45.214 1.074-.236 1.394-.45.32-1.074.214-1.395-.236-.319-.45-.214-1.074.237-1.394.451-.321 1.075-.214 1.394.236z"/><path fill="#99AAB5" d="M25.26 32c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2s.896-2 2-2h20c1.104 0 2 .896 2 2z"/></svg>
  )
}

export default Helicopter
