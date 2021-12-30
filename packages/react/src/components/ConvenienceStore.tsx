import React from 'react'

const ConvenienceStore = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#AAB8C2" d="M17 34c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2V18c0-1.104-.896-2-2-2H19c-1.104 0-2 .896-2 2v16z"/><path fill="#292F33" d="M33 16H23v2h12c0-1.104-.896-2-2-2z"/><path fill="#3B88C3" d="M3 30h30v4H3z"/><path fill="#CCD6DD" d="M3 16c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20V16H3z"/><path fill="#66757F" d="M3 16c-1.104 0-2 .896-2 2h22v-2H3z"/><path fill="#55ACEE" d="M3 20h4v4H3zm14 0h4v4h-4zm-7 0h4v4h-4z"/><path fill="#3B88C3" d="M29 20h4v4h-4zm-6 0h4v4h-4z"/><path fill="#55ACEE" d="M3 30h18v6H3z"/><path fill="#3B88C3" d="M7 30h10v6H7z"/><path fill="#DD2E44" d="M1 26h22v4H1z"/><path fill="#F4ABBA" d="M7 27h10v2H7z"/><path fill="#FFF" d="M9 27h6v2H9z"/><path fill="#A0041E" d="M23 26h12v4H23z"/><path fill="#292F33" d="M5 14h2v2H5zm12 0h2v2h-2z"/><path fill="#DD2E44" d="M21 12c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V2c0-1.104.896-2 2-2h14c1.104 0 2 .896 2 2v10z"/><path d="M10.561 10.151c.616 0 1.093.28 1.093.925 0 .644-.477.924-1.009.924H5.967c-.617 0-1.093-.28-1.093-.924 0-.294.182-.546.322-.714C6.359 8.975 7.62 7.714 8.685 6.173c.252-.364.49-.798.49-1.303 0-.574-.434-1.079-1.009-1.079-1.611 0-.84 2.269-2.185 2.269-.672 0-1.022-.476-1.022-1.022 0-1.765 1.569-3.18 3.292-3.18 1.723 0 3.109 1.135 3.109 2.914 0 1.947-2.171 3.88-3.362 5.379h2.563zm2.363-.35c-.687 0-.981-.462-.981-.826 0-.309.112-.477.196-.617l3.138-5.687c.308-.56.7-.813 1.429-.813.812 0 1.611.519 1.611 1.793v4.3h.238c.546 0 .98.364.98.925 0 .56-.434.924-.98.924h-.238v1.19c0 .743-.295 1.093-1.009 1.093s-1.008-.35-1.008-1.093V9.8h-3.376zM16.3 4.044h-.028l-1.891 3.908H16.3V4.044z" fill="#FFF"/></svg>
  )
}

export default ConvenienceStore
