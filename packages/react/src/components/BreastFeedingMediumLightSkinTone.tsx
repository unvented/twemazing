import React from 'react'

const BreastFeedingMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#9268CA" d="M24.053 16.778h-4.282c-1.793 0-4.416 1.504-5.47 2.451-.953.856-4.246 3.302-4.246 5.802 0 4.716 5.221 10.969 5.221 10.969h10.111s2-8.719 2-15.889c0-1.736-1.541-3.333-3.334-3.333z"/><path fill="#F3D2A2" d="M22.538 17.493c-.178 1.084-1.277 3.246-4.038 6.007-2.5 2.5-5.5 3-5.5 3s-3.457.765-2.703-2.25c.44-1.762 2.616-1.833 4.156-3.922 1.545-2.096 4.842-3.087 6.047-3.328 2.5-.5 2.038.493 2.038.493z"/><path fill="#D2A077" d="M14.435 24.082c-.712.558-1.376.494-1.859.094-.796-.66-2.004-.693-2.092-.426.023 1.026 1.116 1.483 1.316 2.556.007.037.018.074.027.112.566.192 1.173.082 1.173.082s.572-.111 1.139-.309c.719-2.353 1.709-2.342 2.065-3.144.119-.27-1.163.56-1.769 1.035z"/><path fill="#FFE51E" d="M15.245 6.004c.724 1.74-.09 3.73-1.817 4.446-1.728.718-3.714-.109-4.436-1.849-.723-1.739.091-3.73 1.819-4.447 1.728-.717 3.714.11 4.434 1.85z"/><path fill="#F3D2A2" d="M18.113 15.261l.639 2.538c.258 1.026.069 1.857 1.581 1.915 1.056.04 2.483-1.846 2.225-2.873l-.638-2.538-3.807.958z"/><path fill="#E2C196" d="M18.113 15.261l.734 2.994c3.132-1.339 3.236-3.719 3.236-3.719l-3.97.725z"/><path fill="#F3D2A2" d="M12.622 4.758s1.356 3.263-1.556 4.926l1.549 3.728c1.27 3.052 3 5.239 6.056 3.968 3.057-1.27 6.278-5.513 5.008-8.565l-1.281-3.086c-6.926 2.608-9.776-.971-9.776-.971z"/><path fill="#BF6952" d="M13.699 14.763l-.387.161c-.17.07-.365-.008-.436-.18-.069-.17.01-.364.179-.434l.388-.161c.171-.072.366.01.436.179.071.171-.011.363-.18.435z"/><path fill="#662113" d="M13.889 12.162c-.339.141-.729-.021-.87-.359l-.257-.616c-.141-.337.021-.729.361-.869.34-.142.731.021.871.358l.256.616c.14.338-.02.729-.361.87z"/><path fill="#DF1F32" d="M14.225 16.272c.306.37.64.68 1 .921 1.326-.765 1.418-1.926 1.418-1.926l-2.355.979-.063.026z"/><path fill="#FFE51E" d="M18.112 12.01l-1.833-2.954s-5.064 1.243-6.58-1.649C8.183 4.516 12.047 1.826 14.645.912c2.598-.915 6.773-2.009 9.332 3.261 2.37 4.882-.68 9.096-1.57 10.228 0 0-1.297-1.013-1.671-1.751-.374-.739.172-2.612-.65-3.196-.781-.554-2.468.014-1.974 2.556z"/><path fill="#FFE51E" d="M23.306 5.242c-.682-1.427 1.115-3.782 3.234-3.566 2.12.215 4.612 2.319 3.576 5.085-.989 2.645-.247 4.682 1.801 4.613 0 0-1.172 1.615-3.168.44-2.083-1.225-.903-5.099-2.401-5.876-.752-.391-1.749-.505-2.151-.034-.399.47-.891-.662-.891-.662z"/><path fill="#77B255" d="M16.518 32.367c1.105.007 3.938-.359 5.817-.824-1.457-.994-4.946-3.342-6.46-4.075-1.938-.938-5.562-4.062-6.281-4.812s-2.438-.625-3.34.687c-.641.933-1.499 4.346-.004 7.094 1.747 3.212 4.769 5.539 8.744 5.539 1.05 0 1.978-.134 2.801-.348-2.253-.218-2.606-3.269-1.277-3.261z"/><path fill="#F3D2A2" d="M18 36h-2.565c-2.094 0-4.81-1.656-4.368-3.156.44-1.495 1.654-.486 3.434-.486 1 0 2.018.01 2.018.01S17.318 34.824 18 36z"/></svg>
  )
}

export default BreastFeedingMediumLightSkinTone
