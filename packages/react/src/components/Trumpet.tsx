import React from 'react'

const Trumpet = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FCAB40" d="M5.622 33.051l-2.674-2.673L23.337 9.987c3.344-3.343 1.337-8.021 2.007-8.689.666-.67 1.335-.002 1.335-.002l8.023 8.023c.668.668 0 1.336 0 1.336-.669.67-5.778-.908-8.692 2.006L5.622 33.051z"/><path fill="#CCD6DD" d="M5.457 33.891c.925-.925.925-2.424 0-3.35-.924-.924-2.424-.924-3.349 0l.087.087c-.371-.334-.938-.331-1.296.027-.369.368-.369.968 0 1.336L4.008 35.1c.37.369.968.369 1.337 0 .355-.356.36-.919.032-1.29l.08.081z"/><path fill="#FCAB40" d="M13.31 33.709c-1.516 0-2.939-.59-4.011-1.661-1.071-1.07-1.661-2.495-1.661-4.011 0-1.515.59-2.939 1.661-4.011L19.995 13.33c1.071-1.071 2.496-1.661 4.012-1.661 1.515 0 2.94.59 4.011 1.661 2.211 2.212 2.211 5.811 0 8.022L17.322 32.047c-1.072 1.071-2.496 1.662-4.012 1.662zM24.007 15.45c-.506 0-.98.197-1.338.554L11.974 26.7c-.357.357-.554.832-.554 1.337 0 .506.197.979.553 1.336.358.357.832.555 1.337.555s.98-.197 1.337-.555l10.696-10.695c.737-.737.736-1.937-.001-2.674-.356-.357-.83-.554-1.335-.554z"/><path fill="#FCAB40" d="M25.344 24.026c.736.738 1.936.738 2.674 0 .738-.739.738-1.937 0-2.674l-8.022-8.023c-.739-.738-1.935-.738-2.673 0-.739.739-.739 1.937 0 2.675l8.021 8.022zm-4.012 4.011c.738.738 1.937.738 2.674 0 .738-.739.738-1.936.002-2.674l-8.023-8.023c-.739-.738-1.936-.738-2.675 0-.738.738-.738 1.936 0 2.675l8.022 8.022zm-4.01 4.011c.738.738 1.934.738 2.673 0 .738-.738.738-1.937 0-2.674l-8.021-8.022c-.739-.738-1.936-.738-2.675 0-.738.737-.738 1.935 0 2.674l8.023 8.022z"/><path fill="#CCD6DD" d="M14.648 13.329c.369.369.968.369 1.337 0l1.337-1.336c.369-.369.369-.968 0-1.338-.37-.369-.968-.369-1.337 0l-1.337 1.338c-.37.369-.37.967 0 1.336zm-4.011 4.012c.37.371.967.37 1.337 0l1.336-1.337c.37-.37.371-.967 0-1.337-.369-.37-.967-.37-1.337 0l-1.337 1.337c-.369.37-.369.968.001 1.337zm-4.012 4.012c.37.37.967.37 1.337 0l1.337-1.338c.37-.369.37-.967 0-1.337-.369-.369-.967-.369-1.336 0l-1.337 1.338c-.37.369-.37.967-.001 1.337z"/></svg>
  )
}

export default Trumpet
