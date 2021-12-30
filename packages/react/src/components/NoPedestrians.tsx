import React from 'react'

const NoPedestrians = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path d="M34.999 17.999c0 9.389-7.611 17-17 17S1 27.388 1 17.999 8.611 1 17.999 1c9.388-.001 17 7.61 17 16.999z"/><path fill="#FFF" d="M20 8.5c0 1.38-.896 2.5-2 2.5-1.105 0-2-1.12-2-2.5S16.895 6 18 6c1.104 0 2 1.119 2 2.5zm5.918 19.74L21 19.869v-5.371c.371.326.755.678 1.127 1.043l.925 2.774c.139.42.529.685.948.685.104 0 .211-.017.316-.052.523-.175.807-.741.632-1.265l-1-3c-.049-.147-.132-.281-.241-.39C22.205 12.79 20.169 11 19 11h-2c-1.21 0-2.643 1.702-3.682 3.223l-3.765 1.882c-.494.247-.694.848-.447 1.342.247.494.846.695 1.342.447l4-2c.155-.078.288-.195.385-.339.202-.303.421-.605.643-.893l1.101 3.853-3.819 2.183c-.469.267-.758.764-.758 1.302v7c0 .828.671 1.5 1.5 1.5S15 29.828 15 29v-6.13l3.207-1.833 5.125 8.723c.279.476.78.74 1.294.74.259 0 .521-.066.759-.207.714-.419.953-1.339.533-2.053z"/><path fill="#DD2E44" d="M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0zm16 18c0 3.968-1.453 7.591-3.845 10.388L7.612 5.845C10.409 3.453 14.032 2 18 2c8.837 0 16 7.164 16 16zM2 18c0-3.968 1.453-7.592 3.845-10.388l22.543 22.544C25.592 32.548 21.968 34 18 34 9.164 34 2 26.837 2 18z"/></svg>
  )
}

export default NoPedestrians
