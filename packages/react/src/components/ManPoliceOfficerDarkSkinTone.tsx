import React from 'react'

const ManPoliceOfficerDarkSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#2A6797" d="M32 36v-2c0-3.314-2.685-6-6-6H10c-3.313 0-6 2.686-6 6v2h28z"/><ellipse fill="#2A6797" cx="18.003" cy="7.501" rx="12" ry="7.5"/><path fill="#7C533E" d="M13.64 28.101s2.848 1.963 4.36 1.963c1.512 0 4.359-1.963 4.359-1.963V24.29h-8.72v3.811z"/><path fill="#664131" d="M13.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.146-.373 4.363-1.746v-3.491h-8.728v3.491z"/><path fill="#7C533E" d="M11.444 15.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623"/><path fill="#7C533E" d="M9.477 16.959c0-5.589 3.816-10.121 8.523-10.121s8.522 4.532 8.522 10.121S22.707 27.08 18 27.08c-4.707 0-8.523-4.531-8.523-10.121"/><path fill="#3D2E24" d="M18 23.802c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.143-.987.848-3.741.848"/><path fill="#0B0200" d="M18 4.406c5.648 0 9.178 3.242 9.178 6.715s-.706 4.863-1.412 3.473l-1.412-2.778s-4.235 0-5.647-1.39c0 0 2.118 4.168-2.118 0 0 0 .706 2.779-3.53-.694 0 0-2.118 1.389-2.824 4.862-.196.964-1.412 0-1.412-3.473C8.822 7.648 11.646 4.406 18 4.406"/><path d="M14 17c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1m8 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1"/><path fill="#3D2E24" d="M18.75 19.75h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75"/><path fill="#2A6797" d="M8.5 8v1c0 1.105 4.253 2 9.5 2s9.5-.895 9.5-2V8h-19z"/><path fill="#4289C1" d="M27.001 8V6S23.251 3.75 18 3.75C12.752 3.75 9.002 6 9.002 6v2h17.999z"/><path fill="#FDCB58" d="M27.5 8h-19c-.275 0-.5.225-.5.5s.225.5.5.5h19c.275 0 .5-.225.5-.5s-.225-.5-.5-.5z"/><path fill="#193D59" d="M19.947 32.277c.886.622 1.812 1.245 2.147 1.379.018.007.016-.11.012-.114-1.958-2.292-4.084-3.534-4.084-3.534l.013-.009-.014.001h-.03l.011.008s-2.09 1.225-4.035 3.48c.013.103.037.158.076.137.297-.16 1.175-.766 2.03-1.368.039.112.078.213.112.275.156.281.528.906.528.906s-.753.562-1.035 2.563h4.667c-.281-1.595-1.031-2.563-1.031-2.563s.375-.625.531-.906c.031-.059.066-.151.102-.255z"/><path fill="#4289C1" d="M18.001 30.008s-.01-.006-.011-.008c-.124-.084-4.14-2.817-4.698-3.375-.271-.271-.97.905-.958 1.208.041 1.084 1.386 5.939 1.583 5.709l.049-.054c1.945-2.256 4.035-3.48 4.035-3.48zm.02 0s2.126 1.242 4.084 3.534c.004.005.011-.005.016-.005.237.029 1.527-4.642 1.567-5.704.012-.303-.688-1.479-.958-1.208-.557.557-4.56 3.282-4.696 3.374l-.013.009z"/><path fill="#1E4B6E" d="M18.016 30.688c-.562.031-1.452.941-1.359 1.328.427 1.785.779 1.312 1.391 1.312.542 0 .93.437 1.391-1.391.12-.478-1.034-1.272-1.423-1.249zm.026 3.145c-1.477 0-2.019 2.167-2.019 2.167h4.023c.001 0-.527-2.167-2.004-2.167z"/><path fill="#FDCB58" d="M20.25 1.501h-.002c-.233.001-.433.114-.57.282-.281.069-.667.084-1.157-.071-.136-.129-.318-.211-.521-.211-.201 0-.384.082-.519.212-.491.155-.877.14-1.157.071-.138-.168-.338-.282-.571-.282h-.002c-.415 0-.75.335-.75.75 0 .414.335.75.75.75h.002c0 3 1.498 3.75 2.247 3.75.751 0 2.248-.75 2.248-3.75h.002c.416 0 .751-.336.751-.75 0-.416-.335-.751-.751-.751z"/><path fill="#4289C1" d="M11.468 29.412l-5.926.938c-.272.043-.529-.144-.572-.416l-.157-.988c-.043-.271.144-.528.416-.571l5.926-.938c.271-.043.529.145.572.415l.156.988c.044.271-.143.528-.415.572"/><circle fill="#FFF" cx="10.625" cy="28.513" r=".576"/><path fill="#4289C1" d="M24.544 29.412l5.926.938c.273.043.529-.144.572-.416l.157-.988c.043-.271-.143-.528-.416-.571l-5.927-.938c-.271-.043-.529.145-.572.415l-.156.988c-.043.271.144.528.416.572"/><circle fill="#FFF" cx="25.191" cy="28.513" r=".576"/></svg>
  )
}

export default ManPoliceOfficerDarkSkinTone
