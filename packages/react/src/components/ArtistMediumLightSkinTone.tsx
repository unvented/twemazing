import React from 'react'

const ArtistMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FA743E" d="M30 28h-3.641v-3.71h-8.72V28H14c-3.313 0-6 2.686-6 6v2h28v-2c0-3.314-2.685-6-6-6z"/><path fill="#E2C196" d="M17.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.147-.372 4.364-1.746v-3.491h-8.728v3.491z"/><path fill="#FFE51E" d="M25.152 3.3c-1.925-.623-5.876-.46-7.008 1.012-2.944.057-6.083 2.932-6.536 6.443-.448 3.475.235 4.874.591 7.486.403 2.96 2.067 3.907 3.397 4.303 1.914 2.529 3.949 2.421 7.366 2.421 6.672 0 9.271-4.458 9.552-12.04.169-4.585-2.522-8.059-7.362-9.625z"/><path fill="#F3D2A2" d="M29.547 13.243c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.624-1.016-2.119-2.141-2.119-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c-.002-2.898-.305-4.03-1.041-5.05z"/><path fill="#C1694F" d="M22.961 20.677h-1.906c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z"/><path fill="#662113" d="M18.195 17.341c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.426.953-.953.953zm7.626 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953z"/><path fill="#C1694F" d="M22.134 24.657c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.939-.142.142-.987.847-3.741.847"/><path fill="#66757F" d="M33.626 6.385c-.439-2.026-4.933-3.858-9.573-4.075.346-.222.672-.402.924-.48.72-.224-.218-.917-.917-.917 0 0-1.092.505-1.93 1.41-6.756.349-12.218 4.021-12.051 4.979.175 1.004 1.232-.01 1.273.845.04.855.938.938.938.938s3.36-.401 8.87.051c5.51.451 9.114.507 10.53.888.872.235 1.006-1.106 1.006-1.106s1.441-.168.93-2.533z"/><path fill="#D99E82" d="M27.47 36c-.279-3.867-4.091-7.954-9.64-9.879-6.703-2.325-13.384-.613-14.923 3.823-.672 1.936-.252 4.071.989 6.056H27.47z"/><ellipse transform="rotate(-70.866 21.804 32.082)" fill="#5C913B" cx="21.805" cy="32.083" rx="1.654" ry="2.141"/><ellipse transform="rotate(-70.866 7.424 33.701)" fill="#269" cx="7.424" cy="33.703" rx="1.654" ry="2.141"/><ellipse transform="rotate(-70.866 9.272 28.72)" fill="#DD2E44" cx="9.272" cy="28.722" rx="1.654" ry="2.141"/><ellipse transform="rotate(-72.681 16.32 28.641)" fill="#FFCC4D" cx="16.32" cy="28.642" rx="1.654" ry="2.141"/><path fill="#F3D2A2" d="M1 30c.078-1.208 1.394-3.184 3-3 1.665.19.129 3.129 0 4s.144 2.938-1 3c-1.546.084-2.14-1.814-2-4z"/></svg>
  )
}

export default ArtistMediumLightSkinTone
