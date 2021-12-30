import React from 'react'

const ManInTuxedoMediumSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M32 36v-4c0-3.314-2.685-6-6-6H10c-3.313 0-6 2.686-6 6v4h28z"/><path fill="#546170" d="M22.5 30.003l4.292-.916L24.879 26l-2.379.003z"/><path fill="#66757F" d="M20.58 36h2.83l4.382-7.667-2.913.924-1.744-2.204z"/><path fill="#546170" d="M13.5 30.003l-4.292-.916L11.12 26l2.38.003z"/><path fill="#66757F" d="M15.42 36h-2.83l-4.382-7.667 2.912.924 1.745-2.204z"/><path fill="#DFE7EC" d="M20.805 36l2.862-10.017H12.333L15.195 36z"/><circle fill="#292F33" cx="18" cy="31.847" r=".7"/><circle fill="#292F33" cx="18" cy="34.704" r=".7"/><path fill="#D4AB88" d="M14 25.887l4 1.75 4-1.75v-4h-8z"/><path fill="#CC9B7A" d="M14 24c1.216 1.374 2.355 1.719 3.996 1.719 1.639 0 2.787-.346 4.004-1.719v-4h-8v4z"/><path fill="#D4AB88" d="M27.833 13.935c0-1.448-.733-2.623-1.639-2.623-.082 0-.161.02-.24.039C24.73 7.546 21.635 4.839 18 4.839s-6.729 2.707-7.955 6.512c-.079-.019-.158-.039-.24-.039-.905 0-1.639 1.175-1.639 2.623 0 1.33.621 2.417 1.423 2.587.634 4.845 4.153 8.557 8.411 8.557s7.776-3.712 8.411-8.557c.802-.17 1.422-1.257 1.422-2.587z"/><path fill="#F4F7F9" d="M13.927 24.744L18 27.637l-2.656 2.818-3.011-4.472zm8.146 0L18 27.637l2.656 2.818 3.011-4.472z"/><path fill="#292F33" d="M21.045 26.653c-.072-.043-.159-.043-.231-.003L18 28.197l-2.814-1.547c-.072-.04-.159-.039-.231.003-.071.042-.115.119-.115.201v3.218c0 .082.044.159.115.201.037.021.078.032.119.032.039 0 .077-.01.112-.029L18 28.728l2.814 1.548c.035.02.073.029.112.029.041 0 .082-.011.119-.032.07-.042.114-.119.114-.201v-3.218c0-.082-.044-.159-.114-.201z"/><path fill="#C1694F" d="M18 21.802c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.143-.987.848-3.741.848m.75-4.052h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75"/><path fill="#662113" d="M22 15c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1m-8 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1"/><path fill="#963B22" d="M18 1.48c5.648 0 9.178 4.168 9.178 7.641s-.706 4.863-1.412 3.473l-1.412-2.778s-4.235 0-5.647-1.39c0 0 2.118 4.168-2.118 0 0 0 .706 2.779-3.53-.694 0 0-2.118 1.389-2.824 4.862-.196.964-1.412 0-1.412-3.473C8.822 5.648 11.646 1.48 18 1.48"/></svg>
  )
}

export default ManInTuxedoMediumSkinTone
