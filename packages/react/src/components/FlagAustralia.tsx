import React from 'react'

const FlagAustralia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#00247D" d="M32 5H4c-.205 0-.407.015-.604.045l-.004 1.754-2.73-.004C.244 7.427 0 8.185 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path d="M9 26.023l-1.222 1.129.121-1.66-1.645-.251 1.373-.94-.829-1.443 1.591.488L9 21.797l.612 1.549 1.591-.488-.83 1.443 1.374.94-1.645.251.121 1.66zM27.95 9.562l-.799.738.079-1.086-1.077-.164.899-.615-.542-.944 1.04.319.4-1.013.401 1.013 1.041-.319-.543.944.898.615-1.076.164.079 1.086zm-4 6l-.799.739.079-1.086-1.077-.164.899-.616-.542-.944 1.04.319.4-1.013.401 1.013 1.041-.319-.543.944.898.616-1.076.164.079 1.086zm9-2l-.799.739.079-1.086-1.077-.164.899-.616-.542-.944 1.04.319.4-1.013.401 1.013 1.041-.319-.543.944.898.616-1.076.164.079 1.086zm-5 14l-.799.739.079-1.086-1.077-.164.899-.616-.542-.944 1.04.319.4-1.013.401 1.013 1.041-.319-.543.944.898.616-1.076.164.079 1.086zM31 16l.294.596.657.095-.475.463.112.655L31 17.5l-.588.309.112-.655-.475-.463.657-.095z" fill="#FFF"/><path fill="#00247D" d="M19 18V5H4c-.32 0-.604.045-.604.045l-.004 1.754-2.73-.004S.62 6.854.535 7C.195 7.589 0 8.272 0 9v9h19z"/><path fill="#EEE" d="M19 5h-2.331L12 8.269V5H7v2.569L3.396 5.045c-.614.094-1.19.325-1.672.665L6.426 9H4.69L.967 6.391c-.11.129-.211.262-.305.404L3.813 9H0v5h3.885L0 16.766V18h3.332L7 15.432V18h5v-3.269L16.668 18H19v-2.029L16.185 14H19V9h-2.814L19 7.029V5z"/><path fill="#CF1B2B" d="M11 5H8v5H0v3h8v5h3v-5h8v-3h-8z"/><path fill="#CF1B2B" d="M19 5h-1.461L12 8.879V9h1.571L19 5.198zm-17.276.71c-.281.195-.534.423-.757.681L4.69 9h1.735L1.724 5.71zM6.437 14L.734 18h1.727L7 14.822V14zM19 17.802v-1.22L15.313 14H13.57z"/></svg>
  )
}

export default FlagAustralia
