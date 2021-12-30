import React from 'react'

const PoutingCat = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M35.734 19.929C35.375 16.66 35 15 34 13c0 0 3-9 1-12.7-.674-1.246-7.404 1.688-10 3.7 0 0-4-.998-7-.998S11 4 11 4C8.404 1.988 1.674-.946 1 .3-1 4 2 13 2 13 1 15 .625 16.66.266 19.929-.129 23.513.657 26.37 1 27c.39.716 2.367 3.025 5 5 4 3 10 4 12 4s8-1 12-4c2.633-1.975 4.61-4.284 5-5 .343-.63 1.129-3.487.734-7.071z"/><path fill="#E75A70" d="M18 19.5c3 0 3 .5 3 1.5s-1.5 3-3 3-3-2-3-3-.001-1.5 3-1.5z"/><path fill="#F18F26" d="M2 3c.447-1.342 5.64 1 6.64 2C8.64 5 4 8 3 11c0 0-2-5-1-8zm32 0c-.447-1.342-5.64 1-6.64 2 0 0 4.64 3 5.64 6 0 0 2-5 1-8z"/><path fill="#FFCC4D" d="M4.934 5.603C4.934 4.189 11 7 10 8s-2 1.603-3 2.603-2.066-4-2.066-5zm26.132 0C31.066 4.189 25 7 26 8s2 1.603 3 2.603 2.066-4 2.066-5z"/><path fill="#FEE7B8" d="M.701 25c-.148 0-.294-.065-.393-.19-.171-.217-.134-.531.083-.702.162-.127 4.02-3.12 10.648-2.605.275.02.481.261.46.536-.021.275-.257.501-.537.46-6.233-.474-9.915 2.366-9.951 2.395-.093.071-.202.106-.31.106zm8.868-4.663c-.049 0-.1-.007-.149-.022-4.79-1.497-8.737-.347-8.777-.336-.265.081-.543-.07-.623-.335-.079-.265.071-.543.335-.622.173-.052 4.286-1.247 9.362.338.264.083.411.363.328.627-.066.213-.263.35-.476.35zM35.299 25c.148 0 .294-.065.393-.19.171-.217.134-.531-.083-.702-.162-.127-4.02-3.12-10.648-2.605-.275.02-.481.261-.46.536.021.275.257.501.537.46 6.233-.474 9.915 2.366 9.951 2.395.093.071.202.106.31.106zm-8.868-4.663c.049 0 .1-.007.149-.022 4.79-1.497 8.737-.347 8.777-.336.265.081.543-.07.623-.335.079-.265-.071-.543-.335-.622-.173-.052-4.286-1.247-9.362.338-.264.083-.411.363-.328.627.065.213.263.35.476.35z"/><path fill="#292F33" d="M25.362 30.28C24.879 29.642 21.947 26 18 26c-4.234 0-7.3 4.191-7.428 4.37-.121.167-.085.381.084.516.094.075.219.114.344.114.096 0 .193-.023.277-.07.029-.016 2.918-1.597 6.722-1.597 3.792 0 6.695 1.581 6.723 1.597.086.048.215.08.281.07.277-.003.516-.182.516-.417.001-.119-.059-.226-.157-.303z"/><g fill="#292F33"><ellipse cx="12" cy="14.5" rx="2" ry="3.5"/><ellipse cx="24" cy="14.5" rx="2" ry="3.5"/><path d="M21.137 13.031c-.225-.06-.425-.215-.547-.45-.243-.469-.079-1.081.366-1.366 4.834-3.099 8.616-2.136 8.775-2.093.486.13.764.668.621 1.202-.142.532-.65.859-1.135.731-.058-.015-3.27-.777-7.383 1.859-.221.144-.471.178-.697.117zm-6.274.001c-.225.06-.476.026-.698-.116-4.13-2.647-7.352-1.867-7.384-1.859-.486.124-.993-.205-1.133-.737s.136-1.066.62-1.196c.159-.042 3.941-1.005 8.775 2.093.445.285.609.896.366 1.366-.121.234-.321.388-.546.449z"/></g></svg>
  )
}

export default PoutingCat
