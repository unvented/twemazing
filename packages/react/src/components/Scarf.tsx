import React from 'react'

const Scarf = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#A0041E" d="M13 2c-1 1-2.576 5.03-3 8-1 7-1 18-1 18s2 1 4 1 1 1 6 1c0 0-1.89-22.92 1-27 1.77-2.499-6-2-7-1z"/><path fill="#DD2E44" d="M10.409 5.73C8.143 7.036 7.424 9.03 7 12c-1 7-1 18-1 18s2 1 4 1 1 1 6 1c0 0-2-23 1-27s-5.366.024-6.591.73z"/><path fill="#A0041E" d="M13.483 4.274s-2.649 1.212-3.074 1.456c-1.423.82-2.235 1.913-2.748 3.347 1.884.775 5.204 1.09 7.98 1.188.01-.096 1.588-1.099 1.588-1.099l.001-4.493-3.747-.399z"/><path fill="#DD2E44" d="M28.982 1.641C28.075-1.118 22.63.722 19 .722c-3.692 0-9.016-1.84-9.939.92-.923 2.759-4.615 5.518.923 6.438C15.523 9 19 9 19 9s3.63 0 9.075-.92c5.445-.92 1.815-3.679.907-6.439z"/><path fill="#A0041E" d="M26.385.866c-.923 0-3.693.751-7.385.751S12.538.866 11.615.866 12.538 2.638 19 2.638 27.308.866 26.385.866z"/><path fill="#DD2E44" d="M6.257 34.718c-.255 0-.472-.193-.497-.452-.058-.595-.072-2.676.234-3.841.07-.268.349-.429.61-.356.267.07.427.344.356.61-.273 1.04-.25 3.03-.206 3.491.027.274-.175.52-.45.546l-.047.002zm1.569.382c-.254 0-.472-.193-.497-.452-.057-.584-.066-2.515.246-3.829.063-.27.333-.439.602-.371.269.063.435.333.371.601-.276 1.166-.272 3.002-.224 3.503.027.274-.175.519-.45.546l-.048.002zm1.683.348c-.254 0-.472-.193-.497-.452-.044-.453-.099-2.601.226-3.977.063-.27.333-.44.602-.372.269.063.435.332.372.601-.276 1.171-.25 3.176-.204 3.652.027.274-.175.519-.45.546l-.049.002zm1.857.169c-.276 0-.5-.224-.5-.5 0-.309-.007-.587-.013-.851-.022-.911-.042-1.697.242-2.928.062-.269.328-.436.6-.375.269.062.436.331.375.6-.256 1.107-.239 1.801-.217 2.679.007.271.014.558.014.875-.001.277-.224.5-.501.5zm1.873.371c-.254 0-.472-.193-.497-.452-.054-.56-.014-2.362.214-3.625.049-.272.312-.447.581-.403.272.049.452.31.403.581-.223 1.234-.244 2.93-.204 3.351.027.274-.175.519-.45.546l-.047.002zm2.209-.094c-.255 0-.472-.193-.497-.452-.034-.349-.021-1.142-.007-2.06.008-.502.016-1.022.016-1.477 0-.276.224-.5.5-.5s.5.224.5.5c0 .459-.008.984-.016 1.492-.013.813-.026 1.655.002 1.948.027.274-.175.52-.45.546l-.048.003z"/><path fill="#A0041E" d="M18.599 34.338c-.254 0-.472-.193-.497-.452-.05-.521-.143-2.261-.143-3.535 0-.276.224-.5.5-.5s.5.224.5.5c0 1.225.091 2.947.138 3.439.026.274-.175.519-.45.546l-.048.002zm-1.645-.094c-.254 0-.472-.193-.497-.452-.05-.521-.143-2.261-.143-3.536 0-.276.224-.5.5-.5s.5.224.5.5c0 1.226.091 2.948.138 3.44.027.274-.175.519-.45.546l-.048.002z"/></svg>
  )
}

export default Scarf
