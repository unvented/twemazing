import React from 'react'

const CatFace = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M32.348 13.999s3.445-8.812 1.651-11.998c-.604-1.073-8 1.998-10.723 5.442 0 0-2.586-.86-5.276-.86s-5.276.86-5.276.86C10.001 3.999 2.605.928 2.001 2.001.207 5.187 3.652 13.999 3.652 13.999c-.897 1.722-1.233 4.345-1.555 7.16-.354 3.086.35 5.546.658 6.089.35.617 2.123 2.605 4.484 4.306 3.587 2.583 8.967 3.445 10.761 3.445s7.174-.861 10.761-3.445c2.361-1.701 4.134-3.689 4.484-4.306.308-.543 1.012-3.003.659-6.089-.324-2.814-.659-5.438-1.556-7.16z"/><path fill="#F18F26" d="M2.359 2.971c.2-.599 5.348 2.173 6.518 5.404 0 0-3.808 2.624-4.528 4.624 0 0-2.99-7.028-1.99-10.028z"/><path fill="#FFCC4D" d="M5.98 7.261c0-1.414 5.457 2.733 4.457 3.733s-1.255.72-2.255 1.72S5.98 8.261 5.98 7.261z"/><path fill="#F18F26" d="M33.641 2.971c-.2-.599-5.348 2.173-6.518 5.404 0 0 3.808 2.624 4.528 4.624 0 0 2.99-7.028 1.99-10.028z"/><path fill="#FFCC4D" d="M30.02 7.261c0-1.414-5.457 2.733-4.457 3.733s1.255.72 2.255 1.72 2.202-4.453 2.202-5.453z"/><path fill="#292F33" d="M14.001 20.001c0 1.105-.896 1.999-2 1.999s-2-.894-2-1.999c0-1.104.896-1.999 2-1.999s2 .896 2 1.999zm11.998 0c0 1.105-.896 1.999-2 1.999-1.105 0-2-.894-2-1.999 0-1.104.895-1.999 2-1.999s2 .896 2 1.999z"/><path fill="#FEE7B8" d="M2.201 30.458c-.148 0-.294-.065-.393-.19-.171-.217-.134-.531.083-.702.162-.127 4.02-3.12 10.648-2.605.275.021.481.261.46.536-.021.275-.257.501-.537.46-6.233-.474-9.915 2.366-9.951 2.395-.093.07-.202.106-.31.106zm8.868-4.663c-.049 0-.1-.007-.149-.022-4.79-1.497-8.737-.347-8.777-.336-.265.081-.543-.07-.623-.335-.079-.265.071-.543.335-.622.173-.052 4.286-1.247 9.362.338.264.083.411.363.328.627-.066.213-.263.35-.476.35zm22.73 4.663c.148 0 .294-.065.393-.19.171-.217.134-.531-.083-.702-.162-.127-4.02-3.12-10.648-2.605-.275.021-.481.261-.46.536.022.275.257.501.537.46 6.233-.474 9.915 2.366 9.951 2.395.093.07.202.106.31.106zm-8.868-4.663c.049 0 .1-.007.149-.022 4.79-1.497 8.737-.347 8.777-.336.265.081.543-.07.623-.335.079-.265-.071-.543-.335-.622-.173-.052-4.286-1.247-9.362.338-.264.083-.411.363-.328.627.066.213.263.35.476.35z"/><path fill="#67757F" d="M24.736 30.898c-.097-.258-.384-.392-.643-.294-.552.206-1.076.311-1.559.311-1.152 0-1.561-.306-2.033-.659-.451-.338-.956-.715-1.99-.803v-2.339c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2.373c-.81.115-1.346.439-1.816.743-.568.367-1.059.685-2.083.685-.482 0-1.006-.104-1.558-.311-.258-.095-.547.035-.643.294-.097.259.035.547.293.644.664.247 1.306.373 1.907.373 1.319 0 2.014-.449 2.627-.845.524-.339.98-.631 1.848-.635.992.008 1.358.278 1.815.621.538.403 1.147.859 2.633.859.601 0 1.244-.126 1.908-.373.259-.097.391-.385.294-.644z"/><path fill="#E75A70" d="M19.4 24.807h-2.8c-.64 0-1.163.523-1.163 1.163 0 .639.523 1.163 1.163 1.163h.237v.345c0 .639.523 1.163 1.163 1.163s1.163-.523 1.163-1.163v-.345h.237c.639 0 1.163-.523 1.163-1.163s-.524-1.163-1.163-1.163z"/><path fill="#F18F26" d="M18.022 17.154c-.276 0-.5-.224-.5-.5V8.37c0-.276.224-.5.5-.5s.5.224.5.5v8.284c0 .277-.223.5-.5.5zM21 15.572c-.276 0-.5-.224-.5-.5 0-2.882 1.232-5.21 1.285-5.308.13-.244.435-.334.677-.204.243.13.334.433.204.677-.012.021-1.166 2.213-1.166 4.835 0 .276-.224.5-.5.5zm-6 0c-.276 0-.5-.224-.5-.5 0-2.623-1.155-4.814-1.167-4.835-.13-.244-.038-.546.205-.677.242-.131.545-.039.676.204.053.098 1.285 2.426 1.285 5.308.001.276-.223.5-.499.5z"/></svg>
  )
}

export default CatFace
