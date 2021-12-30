import React from 'react'

const Badminton = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#55ACEE" d="M30.385 29c.382.382.382 1.002 0 1.385-.383.382-1.003.382-1.385 0L15.5 16.884c-.382-.382-.382-1.002 0-1.384.382-.382 1.001-.382 1.384 0L30.385 29z"/><path fill="#292F33" d="M35.561 33.439c.586.586.586 1.536 0 2.121-.585.586-1.535.586-2.121 0l-5.656-5.656c-.586-.586-.586-1.536 0-2.121.585-.586 1.535-.586 2.121 0l5.656 5.656z"/><g fill="#99AAB5"><path d="M2.447 5.2l.707-.707L15.178 16.51l-.707.707zm1.417-2.83l.707-.707 12.728 12.728-.708.707z"/><path d="M1.035 9.441L9.52.956l.707.707-8.485 8.485zm.707 3.535L12.35 2.37l.707.707L2.449 13.684zm2.122 2.122L15.177 3.785l.707.707L4.571 15.805zm2.828 1.415l9.899-9.9.707.707-9.9 9.9zm2.828 1.413l8.485-8.485.707.707-8.485 8.486z"/><path d="M1.035 8.027l.707-.707L12.35 17.926l-.707.707zM7.4 1.663l.706-.707 10.607 10.606-.707.708z"/></g><path fill="#55ACEE" d="M2.468 2.468c-3.471 3.472-3.119 9.452.786 13.357 3.906 3.906 9.885 4.257 13.356.786 3.472-3.472 3.121-9.45-.786-13.356C11.919-.651 5.94-1.003 2.468 2.468zm12.846 12.846c-2.733 2.733-7.535 2.364-10.725-.825C1.4 11.3 1.032 6.499 3.765 3.765c2.734-2.734 7.535-2.364 10.724.825s3.559 7.991.825 10.724z"/><g fill="#269"><path d="M17.298 14.391c.391.391.39 1.024 0 1.414l-1.415 1.415c-.39.39-1.023.391-1.414 0s-.391-1.024 0-1.415l1.414-1.414c.391-.391 1.024-.391 1.415 0z"/><path d="M18.005 16.512c.391.391.391 1.024 0 1.415s-1.024.391-1.414 0l-.707-.707c-.391-.391-.39-1.024 0-1.415.391-.391 1.023-.391 1.415 0l.706.707z"/></g><path fill="#269" d="M29.56 27.44c.586.585-.122.828-.707 1.414-.586.585-.829 1.292-1.414.707-.586-.586-.586-1.536 0-2.121.585-.586 1.536-.586 2.121 0z"/><path fill="#BE1931" d="M21.81 3.182c-.781.781-.781 2.047 0 2.828l.707.707.707-.707 1.414-1.414.709-.707-.709-.707c-.779-.781-2.046-.781-2.828 0z"/><path fill="#99AAB5" d="M22.52 6.716l2.83-2.828.707.707-2.83 2.829z"/><path fill="#E1E8ED" d="M23.225 7.424l2.83-2.828c1.473.488 9.125 5.069 8.861 5.334-.758.759-1.912.201-1.912.201s.844.806.117 1.532-1.531-.118-1.531-.118.969.741.149 1.564c-.826.826-1.562-.149-1.562-.149s.729.981.098 1.613c-.633.631-1.514-.199-1.514-.199s.418.998-.342 1.756c-.362.364-4.609-7.33-5.194-8.706z"/><path d="M26.414 7.823c.578-.683 5.432 3.727 4.58 4.579-.853.851-5.275-3.759-4.58-4.579zm1.705 7.448c.68-.443-3.072-5.816-3.535-5.427-.031.026-.045.072-.053.126.883 1.626 2.006 3.594 2.824 4.867.336.342.616.53.764.434zm.272-9.233c-.391.462 4.984 4.214 5.427 3.535.115-.178-.17-.541-.656-.97-1.215-.782-2.856-1.767-4.285-2.571-.24-.065-.418-.074-.486.006zm-2.989 2.859c.426-.429 4.641 4.589 4.002 5.093-.638.5-4.515-4.576-4.002-5.093zm2.041-2.041c-.428.426 4.59 4.64 5.092 4.002.502-.639-4.574-4.516-5.092-4.002z" fill="#CCD6DD"/></svg>
  )
}

export default Badminton
