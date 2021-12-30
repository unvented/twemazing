import React from 'react'

const Sunrise = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M32 0H4C1.791 0 0 1.791 0 4v19h36V4c0-2.209-1.791-4-4-4z"/><path fill="#F4900C" d="M32.114 18.736c1.587-.451 1.587-1.147.001-1.599l-.559-.154L31 16.82v.005l-2.94-.891L30.383 14h-.014l.493-.322.497-.359c1.291-1.023 1.008-1.686-.629-1.498l-.636.089-.632.09h-.002l-2.979.339 1.77-3.18.309-.558c.802-1.44.281-1.963-1.158-1.163l-.558.282-.556.28h-.002L23.66 9.489 24 6.543V6.54l.08-.632.077-.638c.188-1.634-.492-1.915-1.516-.623l-.394.499-2.257 2.85-.819-2.881-.002-.005-.348-1.225c-.451-1.587-1.19-1.587-1.642 0l-.174.612-.174.613-.821 2.886-1.861-2.35-.001-.001-.395-.499-.397-.501c-1.023-1.29-1.704-1.007-1.515.629l.074.634.073.632v.001l.346 2.979-3.177-1.77-.557-.31c-1.441-.803-1.963-.281-1.161 1.16l.31.556 1.77 3.177-2.979-.346h-.001l-.632-.073-.635-.074c-1.636-.189-1.918.492-.629 1.515l.501.397.499.395.001.001 2.35 1.861-2.884.822-.612.174-.612.174c-1.587.452-1.587 1.19 0 1.642l1.225.348.004.002 2.881.819-2.851 2.258-.499.396c-1.292 1.023-1.011 1.705.623 1.517l.638-.08.632-.081h.002l2.948-.34L8 26.286v.002l-.28.556-.296.558c-.8 1.44-.271 1.96 1.169 1.158l.56-.309 3.185-1.77L12 29.46v.002l-.08.632-.077.635c-.189 1.637.491 1.918 1.514.627l.396-.5.395-.5 1.862-2.352.82 2.885v.001l.174.612.175.613c.452 1.586 1.105 1.586 1.557-.001L19 30.89v-.004l.905-2.882 1.905 2.352.416.5.407.5c1.022 1.29 1.71 1.01 1.521-.625l-.078-.637-.076-.633v-.003l-.34-2.947L26.284 28h.002l.557.28.558.295c1.44.803 1.963.272 1.16-1.167l-.28-.561L28 26.29v-.002l-1.489-2.628 2.947.34h.003l.633.08.637.077c1.635.189 1.915-.492.625-1.515l-.5-.396-.5-.395-2.352-1.947L30.886 19h.004l1.224-.264z"/><circle fill="#FFE8B6" cx="18" cy="18" r="9.63"/><path fill="#269" d="M0 22v10c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V22H0z"/><path d="M22 28c-1.979 0-3.25-.749-4-1.437-.75.688-2.021 1.437-4 1.437-3.577 0-4.842-2.448-4.895-2.553-.247-.494-.047-1.095.447-1.342.491-.244 1.086-.049 1.336.437.046.082.834 1.458 3.112 1.458 2.298 0 3.08-1.4 3.112-1.46.177-.328.503-.524.899-.533.373.006.716.212.883.546C18.92 24.6 19.701 26 22 26s3.08-1.4 3.112-1.46c.26-.481.859-.673 1.345-.42.485.251.682.839.438 1.327C26.843 25.552 25.577 28 22 28zm4 6c-1.979 0-3.25-.749-4-1.437-.75.688-2.021 1.437-4 1.437s-3.25-.749-4-1.437c-.75.688-2.021 1.437-4 1.437-3.577 0-4.842-2.448-4.895-2.553-.247-.494-.047-1.095.447-1.342.491-.243 1.086-.049 1.336.437C6.934 30.624 7.722 32 10 32c2.298 0 3.08-1.4 3.112-1.46.177-.328.523-.534.899-.533.373.006.716.212.883.546C14.92 30.6 15.702 32 18 32c2.299 0 3.08-1.4 3.112-1.46.177-.328.53-.541.899-.533.373.006.716.212.883.546C22.92 30.6 23.701 32 26 32s3.08-1.4 3.112-1.46c.26-.481.86-.673 1.345-.42.485.251.682.839.438 1.327C30.843 31.552 29.577 34 26 34z" fill="#3B88C3"/></svg>
  )
}

export default Sunrise
