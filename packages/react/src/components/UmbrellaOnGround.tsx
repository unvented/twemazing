import React from 'react'

const UmbrellaOnGround = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFAC33" d="M34 31H2c-1.104 0-2 .896-2 2v3h36v-3c0-1.104-.896-2-2-2z"/><path fill="#66757F" d="M16.996 32.5c-.175.809-.975 1.323-1.784 1.147-.81-.176-1.324-.975-1.148-1.784L20.004 1.5c.176-.81.975-1.323 1.784-1.148.809.176 1.323.975 1.147 1.784L16.996 32.5z"/><path fill="#DD2E44" d="M21.363 2.307C12.458.375 4.004 4.495 2.481 11.512c0 0-.424 1.954.553 2.167.977.212 3.356-1.318 3.356-1.318l24.431 5.303s1.53 2.379 2.508 2.591c.977.212 1.401-1.742 1.401-1.742 1.524-7.018-4.461-14.273-13.367-16.206z"/><path fill="#E1E8ED" d="M21.363 2.307C14.617.843 7.914 5.344 6.391 12.36c0 0-.424 1.955 1.53 2.379s5.31-.894 5.31-.894l10.749 2.333s2.508 2.59 4.463 3.015c1.954.424 2.378-1.53 2.378-1.53 1.524-7.017-2.712-13.892-9.458-15.356z"/><path fill="#DD2E44" d="M21.363 2.307c-3.508-.761-6.609 4.521-8.132 11.538 0 0 2.507 2.591 4.462 3.015l.977.212c1.955.424 5.31-.894 5.31-.894 1.524-7.016.892-13.109-2.617-13.871z"/></svg>
  )
}

export default UmbrellaOnGround
