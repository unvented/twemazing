import React from 'react'

const Superhero = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#A0041E" d="M17.992 36h17s-.067-3.204-1.554-5.579c-3.91-6.242-15.446.579-15.446.579v5z"/><path fill="#A0041E" d="M18 36H1s.067-3.204 1.554-5.579C6.465 24.179 18 31 18 31v5z"/><path fill="#55ACEE" d="M27.992 29H8c-3 0-4.952 3.5-4 7h27.992c.953-3.5-1-7-4-7z"/><path fill="#FFDC5D" d="M14.269 30.041c1.466 1.065 2.964.98 3.672.98s2.194.085 3.66-.98v-5.664h-7.332v5.664z"/><path fill="#F9CA55" d="M14.264 25.179c1.022 1.155 2.29 1.468 3.668 1.468 1.379 0 2.647-.312 3.67-1.468v-2.936h-7.338v2.936z"/><path fill="#FFAC33" d="M21.69 2.615c-1.904-.616-6.384-.448-7.504 1.008-2.912.056-6.328 2.688-6.776 6.16-.443 3.437.545 5.032.896 7.616.398 2.928 2.044 3.864 3.36 4.256 1.893 2.501 3.906 2.394 7.285 2.394 6.599 0 9.742-4.415 10.02-11.915.168-4.535-2.494-7.971-7.281-9.519z"/><path fill="#FFDC5D" d="M25.464 12.456c-.639-.884-1.456-1.596-3.248-1.848.672.308 1.316 1.372 1.4 1.96.084.588.168 1.064-.364.476-2.131-2.356-4.452-1.428-6.753-2.867-1.607-1.005-2.096-2.117-2.096-2.117s-.196 1.484-2.632 2.996c-.706.438-1.549 1.415-2.016 2.856-.336 1.036-.232 1.96-.232 3.539 0 4.609 3.799 8.485 8.485 8.485s8.485-3.909 8.485-8.485c-.001-2.867-.301-3.987-1.029-4.995z"/><path fill="#C1694F" d="M17.887 23.543c-1.606 0-2.447-.794-2.537-.885-.268-.267-.268-.7 0-.967.266-.265.692-.267.961-.007.035.032.551.491 1.576.491 1.038 0 1.555-.473 1.576-.492.273-.256.703-.248.963.02.26.269.26.691-.004.955-.09.091-.93.885-2.535.885"/><path fill="#269" d="M24.523 13c-2.796 0-4.66.857-6.523.857S14.272 13 11.477 13c-2.796 0-.932 4.903 0 5.76s4.66-.857 6.523-.857 5.591 1.714 6.523.857 2.796-5.76 0-5.76z"/><path fill="#88C9F9" d="M14.5 17.269c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.466 0 .847.381.847.846v.845c-.001.466-.382.847-.847.847m7 0c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.465 0 .846.381.846.846v.845c0 .466-.381.847-.846.847"/><path fill="#C1694F" d="M18.777 20.5h-1.69c-.233 0-.423-.19-.423-.423v-.153c0-.233.189-.424.423-.424h1.69c.233 0 .424.19.424.424v.153c0 .233-.19.423-.424.423"/><path fill="#DD2E44" d="M24.056 36c-1.211-1.194-3.466-2-6.056-2s-4.845.806-6.056 2h12.112zM18 31.022S13 31 11 32c0 0-1.319-2.978-3.703-3.325-2.955-.43-4.742 1.746-4.742 1.746s.884-1.785 2.915-2.796c1.968-.979 4.038.075 4.038.075s1.2-.739 2.2-.739c1.066 0 2.095.094 2.667.914.719 1.031 2.625 3.147 3.625 3.147z"/><path fill="#DD2E44" d="M17.992 31.022s5-.022 7 .978c0 0 1.319-2.978 3.703-3.325 2.955-.43 4.742 1.746 4.742 1.746s-.884-1.785-2.915-2.796c-1.968-.979-4.038.074-4.038.074s-1.2-.739-2.2-.739c-1.066 0-2.095.094-2.667.914-.718 1.032-2.625 3.148-3.625 3.148z"/></svg>
  )
}

export default Superhero
