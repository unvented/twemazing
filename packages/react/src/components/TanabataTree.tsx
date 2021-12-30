import React from 'react'

const TanabataTree = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path d="M20.416 14.94c-1.003-1.821-1.381-3.77-1.685-5.336-.083-.427 1.579-2.199 1.701-1.66.092.401.175.83.263 1.279.291 1.503.621 3.207 1.473 4.752.267.485-1.569 1.296-1.752.965z"/><path fill="#BE1931" d="M18.456 17.272c.875-.524 5.387-2.693 6.682-3.288.524 1.679 2.903 15.461 9.234 15.146 1.469.069.104 1.504-1.085 1.644-1.189.141-2.901-.174-3.602-.489.21.734.272 2.973.244 3.742-.034.945-1.129.59-2.169-.035-6.226-3.742-9.304-16.72-9.304-16.72z"/><path fill="#A0041E" d="M25.138 13.985c-1.295.595-5.807 2.763-6.682 3.288 0 0 .148.624.445 1.637 1.477-.676 4.959-2.242 6.705-3.026-.222-.916-.375-1.601-.468-1.899z"/><path fill="#FFAC33" d="M18.212 17.448c1.135-.454 6.191-2.764 7.205-3.253 1.015-.49.7-2.344-.489-1.924-1.189.42-6.052 2.763-7.205 3.253-1.155.489-.386 2.273.489 1.924z"/><path fill="#A6D388" d="M6.195 14.044c-1.895-1.62 4.242-5.004 7.798-6.138-.251 1.072-5.064 8.475-7.798 6.138zm19.344-9.658c.964-2.299 6.06 2.512 8.225 5.55-1.096.089-9.615-2.233-8.225-5.55z"/><path fill="#5C913B" d="M3.083 35.625c-.829 0-1.5-.672-1.5-1.5 0-.192-.005-.438-.011-.734C1.486 29.226 1.513 16.86 10 2.583c.424-.712 1.056-1.254 1.767-.831.712.423.323 1.369-.1 2.081C3.618 17.372 4.49 29.376 4.571 33.328c.007.322.012.589.012.797 0 .828-.671 1.5-1.5 1.5z"/><path fill="#3E721D" d="M2.082 33.041c-.787 0-1.448-.613-1.496-1.41-.05-.827.58-1.537 1.407-1.587l2.083-.125c.825-.06 1.538.58 1.587 1.407.05.827-.58 1.537-1.407 1.587l-2.083.125c-.03.002-.061.003-.091.003z"/><path fill="#5C913B" d="M7.71 35.583c-.095 0-.19-.009-.287-.027-.813-.158-1.345-.945-1.187-1.759.035-.18.078-.448.132-.793C9.768 11.71 19.884 4.735 28.167 2.167c.799-.245 2.104-.359 2.349.431.245.791-.6 1.282-1.391 1.527-7.472 2.317-16.638 9.579-19.794 29.352-.062.388-.111.689-.15.892-.139.717-.767 1.214-1.471 1.214z"/><path fill="#3E721D" d="M9.916 8.625c-.199 0-.4-.04-.594-.123l-2.125-.917c-.76-.328-1.111-1.21-.783-1.971.328-.762 1.211-1.111 1.972-.783l2.125.916c.761.328 1.111 1.211.783 1.972-.245.567-.797.906-1.378.906zM5.459 20.916c-.125 0-.251-.016-.377-.048l-2.25-.583c-.802-.208-1.283-1.026-1.076-1.829.208-.802 1.025-1.285 1.829-1.076l2.25.583c.802.208 1.283 1.026 1.076 1.828-.176.677-.785 1.125-1.452 1.125zM22.668 8.75c-.481 0-.955-.232-1.245-.662l-1.292-1.916c-.463-.687-.281-1.619.405-2.082.687-.462 1.619-.282 2.083.405l1.292 1.917c.463.687.281 1.619-.405 2.082-.258.173-.549.256-.838.256zm-8.003 9.542c-.235 0-.473-.056-.695-.172l-2.542-1.333c-.734-.385-1.017-1.292-.631-2.025.385-.733 1.292-1.017 2.025-.631l2.542 1.333c.734.385 1.017 1.292.631 2.025-.268.511-.79.803-1.33.803zM9.917 29.958c-.127 0-.255-.016-.384-.05l-2.208-.583c-.801-.211-1.279-1.032-1.067-1.833.212-.801 1.035-1.279 1.833-1.067l2.208.583c.801.211 1.279 1.032 1.067 1.833-.177.673-.784 1.117-1.449 1.117z"/><path fill="#A6D388" d="M4.958 15.208c-2.252 1.068-2.834-5.917-2.417-9.625.876.667 5.667 8.084 2.417 9.625z"/></svg>
  )
}

export default TanabataTree
