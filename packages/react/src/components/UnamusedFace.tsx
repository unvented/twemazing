import React from 'react'

const UnamusedFace = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><path fill="#664500" d="M25.485 27.879C25.44 27.7 24.317 23.5 18 23.5c-6.318 0-7.44 4.2-7.485 4.379-.055.217.043.442.237.554.195.111.439.078.6-.077.019-.019 1.954-1.856 6.648-1.856s6.63 1.837 6.648 1.855c.096.095.224.145.352.145.084 0 .169-.021.246-.064.196-.112.294-.339.239-.557zM29.001 14c-.305 0-.604-.138-.801-.4-2.432-3.244-6.514-.846-6.686-.743-.475.285-1.089.13-1.372-.343-.284-.474-.131-1.088.343-1.372 1.998-1.199 6.514-2.477 9.314 1.257.332.442.242 1.069-.2 1.4-.179.136-.389.201-.598.201zM6.999 14c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4 2.801-3.734 7.317-2.456 9.314-1.257.474.284.627.898.343 1.372-.284.473-.896.628-1.37.344-.179-.106-4.274-2.475-6.688.742-.195.261-.496.399-.8.399zM29 16c0-.552-.447-1-1-1h-7c-.553 0-1 .448-1 1s.447 1 1 1h5.092c.207.581.756 1 1.408 1 .828 0 1.5-.671 1.5-1.5 0-.11-.014-.217-.036-.321.012-.06.036-.116.036-.179zm-13 0c0-.552-.448-1-1-1H8c-.552 0-1 .448-1 1s.448 1 1 1h5.092c.207.581.756 1 1.408 1 .828 0 1.5-.671 1.5-1.5 0-.11-.014-.217-.036-.321.011-.06.036-.116.036-.179z"/></svg>
  )
}

export default UnamusedFace
