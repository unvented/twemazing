import React from 'react'

const WomanGesturingNoMediumDarkSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#60352A" d="M19 0c-1.721 0-3.343.406-4.793 1.111C13.814 1.043 13.412 1 13 1 9.134 1 6 4.134 6 8v12h.018C6.201 26.467 11.489 31.656 18 31.656S29.799 26.467 29.982 20H30v-9c0-6.075-4.925-11-11-11z"/><path fill="#AF7E57" d="M14 5s-.003 5.308-5 5.936V17c0 4.971 4.029 9 9 9s9-4.029 9-9v-5.019C15.889 11.605 14 5 14 5z"/><circle fill="#DF1F32" cx="18" cy="22" r="1"/><path fill="#7450A8" d="M6 28h24v8H6z"/><path fill="#915A34" d="M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path fill="#60352A" d="M14 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z"/><path fill="#9B6A49" d="M3.195 18.025c.263-.484.776-.74 1.268-.694.034-.064 7.084 2.942 7.084 2.942l-1.268 1.547c-.7.854-1.907 1.023-2.696.376l-1.677-1.375-2.26-1.137c-.586-.297-.788-1.039-.451-1.659z"/><path fill="#AF7E57" d="M.365 14.985c-.35.427-.315 1.035.08 1.359l4.917 2.738 3.569 2.926c.395.323.998.239 1.348-.188l1.268-1.547-1.428-1.17-3.223-1.893-5.183-2.413c-.001 0-.998-.239-1.348.188z"/><path fill="#9268CA" d="M9.52 18.438s19.597 8.657 20.108 8.884c1.19.529 3.154 1.7 3.154 3.678l-.351 4.75c0 .138-.112.25-.25.25h-3.323c-.05 0-.098-.015-.139-.043L9.279 22.898c-.069-.046-.111-.124-.111-.207v-4.025c.001-.181.186-.302.352-.228z"/><path fill="#7450A8" d="M18.226 22.266l-.779-.324-6.462 2.109 1.482 1.031zm5.203 2.316l1.007.445-5.175 4.594-3.821-.025z"/><path fill="#9B6A49" d="M32.752 18.025c-.263-.484-.776-.74-1.268-.694-.034-.064-7.084 2.942-7.084 2.942l1.268 1.547c.7.854 1.907 1.023 2.696.376l1.677-1.375 2.26-1.137c.586-.297.788-1.039.451-1.659z"/><path fill="#AF7E57" d="M35.582 14.985c.35.427.315 1.035-.08 1.359l-4.917 2.738-3.569 2.926c-.395.323-.998.239-1.348-.188L24.4 20.273l1.428-1.17 3.223-1.892 5.183-2.413c0-.001.998-.24 1.348.187z"/><path fill="#9268CA" d="M26.427 18.438S6.83 27.095 6.319 27.322c-1.19.529-3.154 1.7-3.154 3.678l.351 4.75c0 .138.112.25.25.25h3.323c.05 0 .098-.015.139-.043l19.439-13.059c.069-.046.111-.124.111-.207v-4.025c0-.181-.186-.302-.351-.228z"/></svg>
  )
}

export default WomanGesturingNoMediumDarkSkinTone
