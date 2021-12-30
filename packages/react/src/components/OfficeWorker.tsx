import React from 'react'

const OfficeWorker = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CCD6DC" d="M30 26c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h22c2.209 0 4 1.791 4 4v22z"/><path fill="#F5F8FA" d="M28 26c0 1.104-.896 2-2 2H4c-1.104 0-2-.896-2-2V4c0-1.104.896-2 2-2h22c1.104 0 2 .896 2 2v22z"/><path fill="#50A5E6" d="M6 26c-.553 0-1-.448-1-1V13c0-.552.447-1 1-1s1 .448 1 1v12c0 .552-.447 1-1 1z"/><path fill="#77B255" d="M10 26c-.553 0-1-.448-1-1V8c0-.552.447-1 1-1s1 .448 1 1v17c0 .552-.447 1-1 1z"/><path fill="#DD2F45" d="M14 26c-.553 0-1-.448-1-1v-7c0-.552.447-1 1-1s1 .448 1 1v7c0 .552-.447 1-1 1z"/><path fill="#226798" d="M36 36v-2c0-3.314-2.685-6-6-6H14c-3.313 0-6 2.686-6 6v2h28z"/><path fill="#3A87C2" d="M16.667 36H20.2L17 28h-2l-1 6 3 1zm10.666 0H23.8l3.2-8h2l1 6-3 1z"/><path fill="#CCD6DC" d="M24 36l3-6H17l3 6z"/><path fill="#FFDC5D" d="M18.321 28.679c.681.649 1.419 1.529 2.055 2.344.828 1.062 2.435 1.06 3.26-.004.632-.815 1.365-1.693 2.044-2.34.423-.403.68-.95.68-1.534v-.783c0-1.144-.928-2.072-2.072-2.072h-4.576c-1.144 0-2.072.928-2.072 2.072v.782c0 .585.257 1.132.681 1.535z"/><path fill="#F9CA55" d="M17.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.147-.373 4.363-1.746v-3.491h-8.728v3.491z"/><path fill="#FFAC33" d="M25.731 3.323c-1.925-.623-6.455-.453-7.588 1.019-2.944.057-6.398 2.718-6.851 6.228-.448 3.475.551 5.088.906 7.701.403 2.96 2.067 3.907 3.397 4.303 1.914 2.529 3.949 2.421 7.366 2.421 6.672 0 9.85-4.464 10.131-12.047.17-4.585-2.521-8.059-7.361-9.625z"/><path fill="#FFDC5D" d="M29.547 13.273c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.624-1.016-2.119-2.141-2.119-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c-.002-2.898-.305-4.031-1.041-5.05z"/><path fill="#C1694F" d="M22.961 20.707h-1.906c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z"/><path fill="#662113" d="M18.195 17.37c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .527-.426.953-.953.953zm7.626 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .527-.427.953-.953.953z"/><path fill="#C1694F" d="M22.134 24.686c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.142.143-.987.848-3.741.848"/><path d="M26.719 26.75c-.567.566-2.709 3.786-2.709 3.786s1.127.839 3.084 3.13c.197.23.543-4.625.584-5.709.011-.303-.688-1.478-.959-1.207m-9.418 0c.566.566 2.709 3.786 2.709 3.786s-1.127.839-3.084 3.13c-.197.23-.543-4.625-.584-5.709-.012-.303.687-1.478.959-1.207" fill="#F4F7F9"/></svg>
  )
}

export default OfficeWorker
