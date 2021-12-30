import React from 'react'

const TechnologistMediumSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FA743E" d="M35 36v-5c0-3.314-2.686-6-6-6H13c-3.313 0-6 2.686-6 6v5h28z"/><path fill="#D4AB88" d="M16.64 25.106c0 .894 2.36 1.993 4.36 1.993s4.359-1.099 4.359-1.992V21.29h-8.72v3.816z"/><path fill="#CC9B7A" d="M16.632 23.121c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.146-.373 4.363-1.746V19.63h-8.728v3.491z"/><path fill="#963B22" d="M24.731.531c-1.925-.623-6.455-.453-7.588 1.019-2.944.057-6.398 2.718-6.851 6.228-.448 3.475.551 5.088.906 7.701.403 2.96 2.067 3.907 3.397 4.303 1.914 2.529 3.949 2.421 7.366 2.421 6.672 0 9.85-4.464 10.131-12.047.17-4.585-2.521-8.059-7.361-9.625z"/><path fill="#D4AB88" d="M28.547 10.481c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.624-1.016-2.119-2.141-2.119-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c-.002-2.898-.305-4.031-1.041-5.05z"/><path fill="#C1694F" d="M21.961 17.914h-1.906c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z"/><path fill="#662113" d="M17.195 14.578c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c.001.527-.426.953-.953.953zm7.626 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .527-.427.953-.953.953z"/><path fill="#C1694F" d="M21.134 21.894c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.142.143-.987.848-3.741.848"/><path fill="#E1E8ED" d="M33 35c0 .553-.447 1-1 1H22c-.553 0-1-.447-1-1 0-.553.447-1 1-1h10c.553 0 1 .447 1 1z"/><path fill="#E1E8ED" d="M20.24 22H3.759c-1.524 0-3.478.771-2.478 3.531l3.072 8.475C4.354 34.006 4.75 36 7 36h20l-4-11.24c-.438-1.322-1.235-2.76-2.76-2.76z"/><path fill="#99AAB5" d="M19.24 22H2.759c-1.524 0-3.478.771-2.478 3.531l3.072 8.475C3.354 34.006 3.75 36 6 36h20l-4-11.24c-.438-1.322-1.235-2.76-2.76-2.76z"/><path fill="#E1E8ED" d="M14.019 29.283c.524 1.572.099 3.13-.949 3.479-1.048.35-2.322-.641-2.846-2.213s-.099-3.13.949-3.479c1.048-.349 2.323.641 2.846 2.213zM19 24.75H3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h16c.414 0 .75.336.75.75s-.336.75-.75.75z"/></svg>
  )
}

export default TechnologistMediumSkinTone
