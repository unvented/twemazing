import React from 'react'

const PersonWithVeilMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E6E7E8" d="M35 18c0-7.002-2-13-7-16s-10-.784-10-.784v.034l-.001-.034S13-1 8 2s-7 8.998-7 16c0 7.003-1 18-1 18h36s-1-10.998-1-18z"/><path fill="#FFF" d="M26 28H10c-3.313 0-6 2.686-6 6v2h28v-2c0-3.314-2.685-6-6-6z"/><path fill="#F3D2A2" d="M13.64 28.106c0 .894 2.36 1.993 4.36 1.993s4.359-1.099 4.359-1.992V24.29h-8.72v3.816z"/><path fill="#E2C196" d="M13.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.146-.373 4.363-1.746v-3.491h-8.728v3.491z"/><path fill="#FFE51E" d="M21.152 3.3c-1.925-.623-5.876-.46-7.008 1.012-2.944.057-6.083 2.932-6.536 6.443-.448 3.475.235 4.874.591 7.486.403 2.96 2.067 3.907 3.397 4.303 1.914 2.529 3.949 2.421 7.366 2.421 6.672 0 9.271-4.458 9.552-12.04.169-4.585-2.522-8.059-7.362-9.625z"/><path fill="#F3D2A2" d="M25.547 13.244c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.624-1.016-2.119-2.141-2.119-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c-.002-2.899-.305-4.031-1.041-5.05z"/><path fill="#C1694F" d="M18.134 24.657c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.939-.142.142-.987.847-3.741.847m.827-3.98h-1.906c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z"/><path fill="#662113" d="M14.195 17.341c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.426.953-.953.953zm7.626 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953z"/><path fill="#FFF" d="M9.847 6.337C11.86 6.742 14.759 7 18 7c3.245 0 6.148-.258 8.162-.664-.559-.601-1.215-1.141-1.958-1.615C22.59 4.892 20.415 5 18 5c-2.23 0-4.266-.091-5.836-.24-.834.35-1.628.891-2.317 1.577z"/></svg>
  )
}

export default PersonWithVeilMediumLightSkinTone
