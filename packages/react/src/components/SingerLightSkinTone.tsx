import React from 'react'

const SingerLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F7DECE" d="M13.6 26h16v10h-16z"/><path fill="#292F33" d="M29.6 26v10h6v-4c0-3.314-2.685-6-6-6zm-16 0c-3.313 0-6 2.686-6 6v4h6V26z"/><path fill="#FF7862" d="M21.783 36h9.001l5.083-6.925s-3.333-3.729-9.771-4.95c0 1.304.988 3.337.988 3.337l-5.301 7.006V36z"/><path fill="#FF7862" d="M21.783 36h-9.001l-5.083-6.925s3.333-3.729 9.771-4.95c0 1.304-.988 3.337-.988 3.337l5.301 7.006V36z"/><path fill="#DE2F33" d="M33.534 27.094s-2.453-1.665-4.656-2.447c-3.058-1.086-2.375 1.939-2.375 1.939s-3.82 6.429-4.72 7.883c0-.001 7.034-5.535 11.751-7.375zm-23.502 0s2.453-1.665 4.656-2.447c3.058-1.086 2.375 1.939 2.375 1.939s3.82 6.429 4.72 7.883c0-.001-7.035-5.535-11.751-7.375z"/><path fill="#FF5540" d="M21.784 34.563s7.333-7.479 12.125-8.354c-4.083-3.417-10.125-3.042-10.125-3.042 0 1.224 1.988 1.368 1.988 2.882 0 2.485-3.09 6.703-3.989 8.067l.001.447z"/><path fill="#FF5540" d="M21.782 34.563s-7.333-7.479-12.125-8.354c4.083-3.417 10.125-3.042 10.125-3.042 0 1.224-1.988 1.368-1.988 2.882 0 2.485 3.09 6.703 3.989 8.067l-.001.447z"/><path fill="#F7DECE" d="M17.782 26s.5 3.5 4 3.5 4-3.5 4-3.5v-4h-8v4z"/><path fill="#EEC2AD" d="M17.782 24c1.216 1.374 2.355 1.719 3.996 1.719 1.639 0 2.787-.346 4.004-1.719v-1.625h-8V24z"/><path fill="#FF605E" d="M33.702 11.938c.208-1.924-.128-3.959-2.262-5.42l-.004-.008c.751.196 1.524.581 2.234 1.362-1.301-3.789-5.222-6.067-9.318-6.723-2.05-.427-5.387-.171-6.414 1.164-2.944.057-5.397 2.759-6.001 6.212-.456 2.604.193 6.816 1.342 8.726 1.541 2.56 2.427-1.457 3.758-1.06 1.914 2.529 2.302 6.776 5.719 6.776 6.506 0 9.133-4.248 9.52-11.489.136.528.246 1.087.426 1.682.434 1.437 1.818 1.586 1.818 1.586s-1.032-.827-.818-2.808z"/><path fill="#F7DECE" d="M29.342 11.243c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.624-1.016-2.119-2.141-2.119-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c-.002-2.898-.305-4.03-1.041-5.05z"/><path fill="#DD2F45" d="M15.206 21.744l7.043-8.445-2.797.614 2.91-4.16c-.693-.16-1.39-.379-2.084-.814-1.203-.753-1.785-1.562-2.006-1.933l-4.543 11.231c.044.152.096.298.146.447l1.963-.805-1.236 3.033c.186.288.386.568.604.832z"/><path fill="#C1694F" d="M22.756 18.677H20.85c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z"/><path fill="#662113" d="M17.99 15.341c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c.001.526-.426.953-.953.953zm7.626 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953z"/><path fill="#C1694F" d="M21.929 22.657c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.939-.142.142-.987.847-3.741.847"/><path fill="#424143" d="M10.363 20c-1.695 0-3.069 1.374-3.069 3.07 0 .478.119.925.314 1.328l-.232-.232c-.347-.347-.89-.327-1.212.045L.676 30.433c-.544.628-.798 1.643.011 2.452.809.809 1.807.574 2.454.013l.892-.815V36h1.784v-5.546l3.443-3.146c.372-.323.393-.865.045-1.211l-.271-.271c.404.196.851.315 1.33.315 1.696 0 3.07-1.374 3.07-3.07C13.433 21.374 12.058 20 10.363 20z"/><path fill="#59595C" d="M12.011 26.035c-.15.15-.393.15-.543 0l-4.07-4.07c-.15-.15-.15-.392 0-.542l.543-.543c.15-.15.393-.15.543 0l4.07 4.07c.15.15.15.393 0 .543l-.543.542z"/></svg>
  )
}

export default SingerLightSkinTone
