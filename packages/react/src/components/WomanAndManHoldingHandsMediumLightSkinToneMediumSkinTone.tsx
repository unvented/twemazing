import React from 'react'

const WomanAndManHoldingHandsMediumLightSkinToneMediumSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFE51E" d="M11 0C9.736 0 8.565.393 7.598 1.061 7.401 1.031 7.205 1 7 1 4.791 1 3 2.791 3 5v6c0 3.866 3.134 7 7 7s7-3.134 7-7V6.001C17 2.687 14.314 0 11 0z"/><path fill="#F3D2A2" d="M11.213 34.309c-.052.682 1.849.953 2.129.791.299-.173-.698-.623-.702-.977-.019-1.797.53-1.648.311-3.492.443-1.625.672-2.592.672-3.131 0-1.25-3.312-.766-3.312 0 0 .344.365 1.681.417 3.131-.313 1.659.641 1.615.485 3.678zm-2.448 0c.052.682-1.849.953-2.129.791-.299-.173.698-.623.702-.977.019-1.797-.53-1.648-.311-3.492-.443-1.625-.672-2.592-.672-3.131 0-1.25 3.313-.766 3.313 0 0 .344-.365 1.681-.417 3.131.311 1.659-.642 1.615-.486 3.678z"/><path fill="#E2C196" d="M13.623 27.5c0-1.25-3.312-.766-3.312 0 0 .151.071.499.154.961h3.029c.084-.411.129-.729.129-.961zm-3.956 0c0-.766-3.312-1.25-3.312 0 0 .232.045.55.13.961h3.029c.082-.462.153-.81.153-.961z"/><path fill="#F3D2A2" d="M3.258 26.96c-.258.124-.503-.097-.619-.227-.328-.367-.583-1.246-.282-2.209.303-.973.6-2.384 1.199-4.002.081-.22.499-3.764.805-4.445.197-.437 1.28-.896 1.81-.807.529.089.246.651.105 1.13 0 0-.916 3.953-1.016 4.296-.316 1.079-1.624 2.918-1.565 4.237.031.692.06 1.255-.339 1.246-.049.362-.003.735-.098.781zm14.984-.2c.271.091.487-.159.586-.302.279-.405.422-1.309.004-2.227-.423-.927-.894-2.29-1.69-3.821-.108-.208-.966-3.672-1.355-4.309-.25-.409-1.382-.729-1.897-.574-.513.154-.162.676.037 1.134 0 0 1.403 3.807 1.546 4.135.449 1.031 1.977 2.691 2.082 4.008.056.69.097 1.253.492 1.194.094.353.095.729.195.762z"/><path fill="#292F33" d="M13.945 36c.305 0 .372-.418.089-.629-.379-.285-.88-1.371-1.561-1.371h-1.245c-.229 0-.49 1.209-.41 1.48.102.345.433.52.812.52h2.315zm-7.913 0c-.305 0-.372-.418-.089-.629.379-.285.88-1.371 1.561-1.371h1.245c.229 0 .49 1.209.41 1.48-.102.345-.433.52-.811.52H6.032z"/><path fill="#E75A70" d="M14.354 17.771L16 16c-1.438-1.792-4-2-4-2H8s-2.562.208-4 2l1.646 1.771S6.25 20.688 6.25 21 5 25.75 5 28h10c0-2.25-1.25-6.688-1.25-7s.604-3.229.604-3.229z"/><path fill="#DA2F47" d="M13.75 21c0-.106.07-.512.161-1H6.089c.092.488.161.894.161 1 0 .083-.122.509-.223 1h7.942c-.108-.558-.219-.917-.219-1z"/><path fill="#F3D2A2" d="M8 11v4c0 1.104.896 2 2 2s2-.896 2-2v-4H8z"/><path fill="#E2C196" d="M8 13.56c.608.687 1.178.859 1.998.859.819 0 1.394-.173 2.002-.859v-.812H8v.812z"/><path fill="#F3D2A2" d="M15 3H5v6c0 2.762 2.238 5 5 5s5-2.237 5-5V3z"/><path fill="#FFE51E" d="M15 2H5L4 7c4 0 4-4 4-4s0 4 8 4l-1-5z"/><path fill="#DF1F32" d="M12 12H8s0 1 2 1 2-1 2-1z"/><circle fill="#662113" cx="7.5" cy="8.5" r=".5"/><circle fill="#662113" cx="12.5" cy="8.5" r=".5"/><path fill="#C1694F" d="M9 10h2s0 1-1 1-1-1-1-1z"/><path fill="#963B22" d="M26.5 0c-1.187 0-2.282.379-3.181 1.018C21.473 1.114 20 2.629 20 4.5c0 1.542.007 3.484 2.038 4.208C23.036 10.094 24.66 11 26.5 11c3.037 0 5.5-2.462 5.5-5.499C32 2.463 29.537 0 26.5 0z"/><path fill="#D4AB88" d="M18.117 26.76c-.271.091-.487-.159-.586-.302-.279-.405-.422-1.309-.004-2.227.423-.927.702-2.072 1.69-3.821.115-.204.494-2.746 1.242-4.354.202-.435 1.495-.684 2.009-.529.513.154-.005.98-.037 1.134-.344 1.651-1.305 4.077-1.45 4.404-.8 1.806-1.965 2.389-2.071 3.706-.055.69-.205 1.286-.6 1.228-.092.352-.094.728-.193.761zm14.595.204c.257.126.504-.094.62-.222.33-.365.591-1.242.296-2.208-.297-.975-.424-2.146-1.174-4.01-.087-.217-.129-2.787-.66-4.479-.143-.457-1.392-.875-1.922-.789-.529.086-.124.972-.112 1.129.124 1.682.758 4.213.859 4.556.556 1.895 1.634 2.627 1.566 3.946-.036.692.034 1.302.433 1.296.048.363 0 .735.094.781z"/><path fill="#AAB8C2" d="M29.555 29.5c.5-2.734.422-6.5.422-6.5h-7.963s-.078 3.766.422 6.5c.063.344.188 3.344-.109 5.5-.066.479 2.886.937 2.844-.125-.078-1.969.264-3.513.328-4.5.035-.547.25-1.875.344-3.208.011-.018.295-.018.306 0 .094 1.333.308 2.661.344 3.208.064.987.406 2.531.328 4.5-.042 1.062 2.91.604 2.844.125-.297-2.156-.172-5.156-.11-5.5z"/><path fill="#292F33" d="M30.54 36c.499-.406-.041-1.161-1.42-1.402-1.163-.203-2.2-.032-2.363.35-.212.493-.05 1.052-.05 1.052h3.833zm-9.117 0c-.499-.406.041-1.161 1.42-1.402 1.163-.203 2.2-.032 2.363.35.212.494.05 1.053.05 1.053L21.423 36z"/><path fill="#4289C1" d="M30.797 14.766C29.578 14 28 14 28 14h-4s-1.578 0-2.797.766c-1.201.754-1.656 3-1.656 3l2.203.688.109 5.546h8.281l.109-5.547 2.203-.688c.001.001-.454-2.245-1.655-2.999z"/><path fill="#D4AB88" d="M24 10.042v4c0 .682.896 1.305 2 1.305s2-.668 2-1.305v-4h-4z"/><path fill="#CC9B7A" d="M24 13.561c.608.687 1.178.859 1.998.859.819 0 1.394-.173 2.002-.859v-.812h-4v.812z"/><path fill="#D4AB88" d="M31 3H21v6c0 2.762 2.238 5 5 5s5-2.237 5-5V3z"/><path fill="#963B22" d="M21 2.5L20.5 5l.5 2c2.333 0 2.85-2.412 2.965-3.488C24.004 4.588 24.779 7 31 7l.5-2-.5-2.5H21z"/><path fill="#C1694F" d="M28 12h-4s0 1 2 1 2-1 2-1z"/><circle fill="#662113" cx="23.5" cy="8.5" r=".5"/><circle fill="#662113" cx="28.5" cy="8.5" r=".5"/><path fill="#C1694F" d="M25 10h2s0 1-1 1-1-1-1-1z"/></svg>
  )
}

export default WomanAndManHoldingHandsMediumLightSkinToneMediumSkinTone
