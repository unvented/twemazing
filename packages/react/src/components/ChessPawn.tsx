import React from 'react'

const ChessPawn = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#31373D" d="M27.819 33.653C28.46 32.997 29 32.072 29 30.801c0-3.149-3.645-6.753-5-9.801-1.333-3-2.104-5.875-.083-6.688l.17-.073c.578-.218.913-.47.913-.739 0-.46-.97-.872-2.494-1.147C24.03 11.069 25 9.149 25 7c0-3.866-3.134-7-7-7s-7 3.134-7 7c0 2.149.97 4.069 2.494 5.353C11.97 12.628 11 13.04 11 13.5c0 .269.335.521.914.739.056.024.106.048.169.073C14.104 15.125 13.333 18 12 21c-1.355 3.048-5 6.652-5 9.801 0 1.271.54 2.196 1.181 2.852C7.432 34.058 7 34.515 7 35c0 .351.233.687.639 1H28.36c.407-.313.64-.649.64-1 0-.485-.432-.942-1.181-1.347z"/><path fill="#66757F" d="M22.001 4.75c-.275 0-.54-.152-.672-.415-.03-.058-.866-1.585-3.329-1.585s-3.298 1.527-3.333 1.593c-.192.364-.644.509-1.008.32-.366-.188-.514-.631-.33-.999.049-.098 1.247-2.414 4.671-2.414 3.424 0 4.621 2.316 4.671 2.415.186.371.035.821-.336 1.006-.107.054-.222.079-.334.079zM22 14c-.075 0-.151-.017-.224-.053-.004-.001-.988-.447-3.776-.447-2.789 0-3.772.446-3.782.45-.247.117-.546.013-.665-.234-.119-.246-.021-.541.224-.664.113-.056 1.192-.552 4.223-.552 3.03 0 4.11.496 4.224.553.247.124.347.424.224.671-.089.175-.265.276-.448.276zM10 34.5c-.254 0-.471-.192-.497-.45-.027-.274.173-.52.448-.547C10 33.497 15.01 33 18 33s7.999.497 8.05.503c.274.027.476.272.447.547-.027.274-.275.479-.547.447C25.9 34.492 20.94 34 18 34c-2.941 0-7.9.492-7.95.497L10 34.5z"/></svg>
  )
}

export default ChessPawn
