import React from 'react'

const AdhesiveBandage = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D99E82" d="M2.92 21.393L21.393 2.92c3.227-3.227 8.46-3.227 11.687 0 3.227 3.227 3.227 8.46 0 11.687L14.607 33.08c-3.227 3.227-8.46 3.227-11.687 0-3.227-3.228-3.227-8.46 0-11.687z"/><g fill="#C1694F"><circle cx="4.389" cy="25.778" r=".972"/><circle cx="7.306" cy="28.694" r=".972"/><circle cx="10.222" cy="31.611" r=".972"/><circle cx="7.306" cy="22.861" r=".972"/><circle cx="10.222" cy="25.778" r=".972"/><circle cx="13.139" cy="28.694" r=".972"/><path d="M21.896 7.189c.064-.533.548-.913 1.081-.849.533.064.913.548.849 1.081-.064.533-.548.913-1.081.849-.533-.063-.913-.547-.849-1.081z"/><circle cx="25.778" cy="10.222" r=".972"/><circle cx="28.694" cy="13.139" r=".972"/><circle cx="25.778" cy="4.389" r=".972"/><circle cx="28.694" cy="7.306" r=".972"/><circle cx="31.611" cy="10.222" r=".972"/></g><path fill="#EABAA7" d="M6.82 17.514L17.512 6.819 29.18 18.486 18.486 29.18z"/><path fill="#F7DED5" d="M9.799 18.423c-.249 0-.498-.095-.687-.285-.38-.38-.38-.995 0-1.375l7.715-7.715c.38-.38.995-.38 1.375 0s.38.995 0 1.375l-7.715 7.715c-.191.191-.439.285-.688.285z"/></svg>
  )
}

export default AdhesiveBandage
