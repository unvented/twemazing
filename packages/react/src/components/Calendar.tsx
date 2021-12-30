import React from 'react'

const Calendar = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E0E7EC" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v23z"/><path d="M23.657 19.12H17.87c-1.22 0-1.673-.791-1.673-1.56 0-.791.429-1.56 1.673-1.56h8.184c1.154 0 1.628 1.04 1.628 1.628 0 .452-.249.927-.52 1.492l-5.607 11.395c-.633 1.266-.882 1.717-1.899 1.717-1.244 0-1.877-.949-1.877-1.605 0-.271.068-.474.226-.791l5.652-10.716zM10.889 19h-.5c-1.085 0-1.538-.731-1.538-1.5 0-.792.565-1.5 1.538-1.5h2.015c.972 0 1.515.701 1.515 1.605V30.47c0 1.13-.558 1.763-1.53 1.763s-1.5-.633-1.5-1.763V19z" fill="#66757F"/><path fill="#DD2F45" d="M34 0h-3.277c.172.295.277.634.277 1 0 1.104-.896 2-2 2s-2-.896-2-2c0-.366.105-.705.277-1H8.723C8.895.295 9 .634 9 1c0 1.104-.896 2-2 2s-2-.896-2-2c0-.366.105-.705.277-1H2C.896 0 0 .896 0 2v11h36V2c0-1.104-.896-2-2-2z"/><path d="M13.182 4.604c0-.5.32-.78.75-.78.429 0 .749.28.749.78v5.017h1.779c.51 0 .73.38.72.72-.02.33-.28.659-.72.659h-2.498c-.49 0-.78-.319-.78-.819V4.604zm-6.91 0c0-.5.32-.78.75-.78s.75.28.75.78v3.488c0 .92.589 1.649 1.539 1.649.909 0 1.529-.769 1.529-1.649V4.604c0-.5.319-.78.749-.78s.75.28.75.78v3.568c0 1.679-1.38 2.949-3.028 2.949-1.669 0-3.039-1.25-3.039-2.949V4.604zM5.49 9.001c0 1.679-1.069 2.119-1.979 2.119-.689 0-1.839-.27-1.839-1.14 0-.269.23-.609.56-.609.4 0 .75.37 1.199.37.56 0 .56-.52.56-.84V4.604c0-.5.32-.78.749-.78.431 0 .75.28.75.78v4.397z" fill="#F5F8FA"/><path d="M32 10c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1m0-3c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1m-3 3c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1m0-3c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1m-3 3c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1m0-3c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1m-3 0c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1m0 3c0 .552.447 1 1 1s1-.448 1-1-.447-1-1-1-1 .448-1 1" fill="#F4ABBA"/></svg>
  )
}

export default Calendar
