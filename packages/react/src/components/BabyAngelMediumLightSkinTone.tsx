import React from 'react'

const BabyAngelMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E1E8ED" d="M.005 30.093c-.003.014-.004.027-.005.041.001.11.02.215.032.322.009.073.01.15.021.225l.046.2C.715 33.773 4.431 36 8.94 36c4.506 0 8.225-2.227 8.838-5.119.018-.066.035-.131.046-.199.012-.074.015-.151.022-.227.012-.106.031-.211.032-.321 0-.015-.004-.028-.006-.041l.006-.053h-.008c-.051-1.652-1.357-2.979-2.971-2.979-1.617 0-2.923 1.327-2.973 2.979h-.018c.001-.031.009-.061.009-.093 0-1.696-1.334-3.072-2.98-3.072-1.644 0-2.978 1.374-2.98 3.072.001.032.009.062.012.093h-.017c-.051-1.652-1.356-2.979-2.972-2.979-1.615 0-2.921 1.327-2.97 2.979L0 30.039c0 .019.005.036.005.054zm18.084 0c-.004.015-.005.027-.006.041.001.11.02.215.031.322.01.073.011.15.021.225.014.069.031.137.046.2.617 2.892 4.334 5.119 8.841 5.119 4.506 0 8.225-2.227 8.839-5.119.018-.066.035-.131.046-.199.012-.074.016-.151.022-.227.012-.106.03-.211.032-.321 0-.015-.004-.028-.006-.041l.006-.053h-.009c-.051-1.652-1.357-2.979-2.971-2.979-1.616 0-2.923 1.327-2.973 2.979h-.018c.001-.031.009-.061.009-.093 0-1.696-1.334-3.072-2.979-3.072-1.644 0-2.978 1.374-2.979 3.072.002.032.009.062.012.093h-.019c-.051-1.652-1.356-2.979-2.972-2.979-1.615 0-2.921 1.327-2.97 2.979l-.01-.001c.001.019.007.036.007.054z"/><circle fill="#F3D2A2" cx="18" cy="21" r="12"/><path fill="#FFE51E" d="M18 5.205c-7.444 0-13.5 6.056-13.5 13.5 0 1.9.396 3.751 1.178 5.499.091.202.3.317.526.291.221-.031.394-.204.426-.425.393-2.755 2.581-4.706 4.512-6.428 1.793-1.599 3.498-3.119 3.444-5.041 6.516 1.171 14.006 6.017 14.784 11.469.031.221.205.394.426.425.023.003.047.005.069.005.195 0 .375-.114.456-.296.782-1.748 1.179-3.599 1.179-5.499 0-7.444-6.056-13.5-13.5-13.5z"/><path fill="#662113" d="M14 27h8s-1 2-4 2-4-2-4-2zm2-5c0 .553-.448 1-1 1s-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2zm6 0c0 .553-.447 1-1 1-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1 .553 0 1 .447 1 1v2z"/><path fill="#8CCAF7" d="M18 0C11.373 0 6 2.687 6 6s5.373 6 12 6 12-2.686 12-6-5.373-6-12-6zm0 9c-4.971 0-9-1.567-9-3.5S13.029 2 18 2s9 1.567 9 3.5S22.971 9 18 9z"/></svg>
  )
}

export default BabyAngelMediumLightSkinTone
