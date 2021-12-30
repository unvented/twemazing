import React from 'react'

const RedEnvelope = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FA3C32" d="M21.503.407L.415 21.495c-.387.387-.387 1.019 0 1.406l12.653 12.653c.387.387 1.019.387 1.406 0l21.088-21.088L21.503.407z"/><path fill="#DC282C" d="M35.561 13.06L22.909.407c-.387-.387-1.019-.387-1.406 0l-1.089 1.089c-.349 2.648 1.709 6.88 4.443 9.614 2.783 2.783 6.905 4.905 9.572 4.488l1.133-1.133c.386-.386.386-1.018-.001-1.405z"/><path fill="#B3282C" d="M24.857 11.111c-2.734-2.734-4.793-6.966-4.443-9.614l-1.301 1.301c.158 2.739 2.308 6.666 4.85 9.207 2.578 2.578 6.371 4.797 9.139 4.921l1.327-1.327c-2.667.417-6.789-1.705-9.572-4.488z"/><g fill="#FFE933"><path d="M19.104 16.866c-.899-.899-2.206-1.41-2.982-.665-.03.15.084.971 1.38 2.267s2.117 1.41 2.267 1.38c.744-.777.233-2.084-.665-2.982zm-.011-1.543c-.093-.093-.126-.236-.073-.367l.666-1.632c.071-.175.27-.261.444-.192s.257.267.186.441l-.666 1.632c-.071.175-.27.261-.444.192-.043-.017-.081-.042-.113-.074zm-2.025-.747c-.057-.057-.093-.134-.097-.222l-.085-1.887c-.008-.187.137-.348.325-.36.187-.011.346.131.355.319l.085 1.887c.008.187-.137.348-.325.36-.101.006-.193-.032-.258-.097zm3.577 2.299c-.031-.031-.057-.069-.074-.113-.069-.174.017-.372.192-.444l1.632-.666c.175-.071.372.011.441.186.069.174-.017.372-.192.444l-1.632.666c-.13.053-.274.02-.367-.073zm.748 2.026c-.065-.065-.103-.157-.097-.258.011-.188.172-.333.36-.325l1.887.085c.188.008.331.168.319.355-.011.188-.172.333-.36.325l-1.887-.085c-.087-.004-.165-.04-.222-.097z"/><path d="M15.656 15.716c-.755-.976-1.184-1.686-1.332-1.945-.4.861-.392 1.839.044 2.925.545 1.356 1.583 2.481 2.003 2.901.421.421 1.546 1.458 2.902 2.004 1.086.437 2.064.445 2.925.044-.258-.148-.969-.576-1.944-1.332l-.028.031c-.451.451-1.698.118-3.209-1.393-1.511-1.511-1.844-2.758-1.393-3.209l.032-.026z"/><path d="M15.887 20.082c-1.775-1.775-3.09-4.201-2.292-6.333-.296.121-.678.341-1.095.758-2.408 2.408-.113 5.976 1.436 7.526 1.55 1.55 5.117 3.845 7.526 1.436.417-.417.638-.8.758-1.095-2.132.798-4.558-.517-6.333-2.292z"/></g></svg>
  )
}

export default RedEnvelope
