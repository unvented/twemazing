import React from 'react'

const WritingHandDarkSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#583529" d="M6.203 21.641c-.078.922.321 1.198.946 1.636.618.433 4.383-2.867 5.614-3.369 1.231-.502 12.787-2.949 12.286-5.183-.501-2.234-3.993-2.564-6.683-2.108-2.69.456-7.838 2.822-9.342 4.099-1.504 1.276-2.821 4.925-2.821 4.925zm8.622 1.497s-3.557 1.155-3.557 4.155.866 4.692 1.276 5.513c.411.82 1.688 1.616 3.455.851 2.052-.889-.491-6.004 6-3.656 2.974 1.075 6.059 2.528 9.059 1.528C33.904 30.58 35 27 35 25c0-4.094-3-3-4-2s-9 3-10 3-6.175-2.862-6.175-2.862z"/><path fill="#664131" d="M19.312 28.188s-.12-1.316-1.375-1.469c-1.031-.125-2.656.219-3.5 1.906-.844 1.688-2.344 1.406-2.281 2.812.062 1.406.5 2.5 1.406 2.781.907.282 2.188-.218 2.344-1.718.156-1.5.344-2.875 1.312-3.469.97-.593 2.094-.843 2.094-.843z"/><path fill="#583529" d="M18 26s-1-1-3-1-6.664 2.133-5.25 6.375c1 3 3.844 1.594 4.25-1.375.407-2.973 4-4 4-4z"/><path fill="#664131" d="M17 26s-1-1-3-1-4.885 1.53-5 6c-.094 3.656 4.031 2 4-1-.031-3 4-4 4-4z"/><path fill="#583529" d="M5 27c0 3.297.457 5.286 2.428 4.947 3.269-.562 2.028-4.614 4.889-5.754 2.077-.827 5.101-.63 8.02 1.103C22.26 28.438 21 24 19 23s-8 0-9 0-5 4-5 4z"/><path fill="#664131" d="M4.842 27.174C3.251 29.839 4.219 32.594 7 32c2.691-.574 1.343-4.07 4-6 1.489-1.082 4.698-1.445 6.698-.445S20 24 18 23s-8.54-.025-9.538.037c-1.909.119-3.62 4.137-3.62 4.137z"/><path fill="#3B88C3" d="M9.418 29.114c-.679.778-1.86.859-2.639.18l-.196-.171c-.779-.679-.859-1.859-.18-2.638L28.926.668c.679-.778 1.86-.859 2.639-.18l.195.171c.779.679.859 1.86.181 2.638L9.418 29.114z"/><path fill="#3B88C3" d="M10.49 27.886c-2.36 2.705-8.313 8.009-9.067 7.352-.753-.657 3.693-7.275 6.053-9.981 2.36-2.706 1.661-.542 2.493.185.832.726 2.881-.26.521 2.444z"/><path fill="#583529" d="M6.672 25.026c0 1 2.421 1.915 3.421.915s3.341-2.228 6.419-.941C23.716 28.01 21 24 18 23s-8 0-9 0-2.328 2.026-2.328 2.026z"/><path fill="#7C533E" d="M6.195 22.043c-.358-1.113 2.188-7.279 3.341-8.234 1.452-1.202 7.069-3.063 9.069-3.063S35 18 35 23s-2 5.625-4.875 6.406c-2.299.625-7.115.242-9.219-1.719C19.062 25.969 17.781 24.781 16 24c-3.302-1.448-5.503.424-6.503 1.424-2 2-5.768-.159-2.625-3.58C9.121 19.395 11.102 18.632 13 18c6-2 10-2 8-4-.707-.707-1.092.346-2.076.525-1.98.36-3.556.602-6.165 1.472-.902.3-5.172 3.023-6.564 6.046z"/><path fill="#583529" d="M13.196 16.275c1.064-.388 5.702-1.232 8.115-2.068 1.949-.676 3.659.636-.04 2.028-3.57 1.343-7.279 1.233-9.984 2.307-1.023.406-1.91-.875 1.909-2.267z"/><path fill="#3B88C3" d="M22.487 8.023s-5.928 6.795-8.446 9.661c2.254-.926 4.271-.75 6.198-1.884 1.927-1.133 2.806-2.342 5.73-5.695 1.086-1.244-3.482-2.082-3.482-2.082z"/></svg>
  )
}

export default WritingHandDarkSkinTone
