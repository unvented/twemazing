import React from 'react'

const Raccoon = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#99AAB5" d="M10.668 5.616C9.032 2.479 4.439 1.005 3.584 2.298s.707 10.152 1.757 9.967c1.051-.185 5.327-6.649 5.327-6.649z"/><path fill="#292F33" d="M9.841 7.674c-1.27-2.68-4.696-4.82-5.304-3.745-.435.771.122 5.263.757 7.696l4.547-3.951z"/><path fill="#99AAB5" d="M25.284 5.616c1.636-3.137 6.228-4.611 7.084-3.318s-.708 10.152-1.758 9.967c-1.051-.185-5.326-6.649-5.326-6.649z"/><path fill="#292F33" d="M26.36 7.674c1.231-2.686 4.501-4.854 5.07-3.786.416.78-.178 5.425-.815 7.825L26.36 7.674z"/><path fill="#99AAB5" d="M33.13 13.316c-2.583-3.164-9.048-11.601-15.155-11.601S5.404 10.152 2.821 13.316C-.317 17.16-.23 21.613.573 24.193c.805 2.587 3.155 5.038 9.261 7.431 2.065.809 5.705 2.393 8.142 2.393s6.076-1.583 8.142-2.393c6.106-2.393 8.457-4.843 9.261-7.431.802-2.58.89-7.033-2.249-10.877z"/><path fill="#E1E8ED" d="M17.976 14.408c0-4.913-4.078-4.855-6.542-4.572C6.922 10.353.076 16.597.076 20.569c0 1.39.16 2.631.496 3.624.584 1.726 1.875 3.015 5.034 5.266 3.49-8.351 12.37-11.246 12.37-15.051z"/><path fill="#292F33" d="M17.976 15.777c0-2.399-4.389-3.04-6.649-2.678C6.443 13.882.587 20.633.572 24.07v.013c.002.006.001.111.001.111s.384 1.401 1.623 2.815c.867.991 2.346 2.068 3.333 2.584l.01-.011c2.952-3.861 6.877-6.416 10.022-7.617 1.763-.673 2.415-3.5 2.415-6.188z"/><circle fill="#99AAB5" cx="13.396" cy="17.489" r="1.527"/><path fill="#E1E8ED" d="M17.976 14.408c0-4.913 4.078-4.855 6.542-4.572 4.511.518 11.357 6.762 11.357 10.734 0 1.39-.16 2.631-.496 3.624-.584 1.726-1.875 3.015-5.034 5.266-3.489-8.352-12.369-11.247-12.369-15.052z"/><path fill="#292F33" d="M17.976 15.777c0-2.399 4.389-3.04 6.649-2.678 4.884.783 10.74 7.534 10.755 10.971v.013c-.002.006-.001.111-.001.111s-.384 1.401-1.623 2.815c-.868.991-2.347 2.068-3.333 2.584l-.01-.011c-2.952-3.861-6.877-6.416-10.022-7.617-1.763-.673-2.415-3.5-2.415-6.188z"/><circle fill="#99AAB5" cx="22.555" cy="17.489" r="1.527"/><path fill="#66757F" d="M20.746 22.102c-.923-1.073-1.75-19.035-2.77-19.035s-1.847 17.962-2.77 19.035h5.54z"/><path fill="#E1E8ED" d="M24.915 24.184c-1.636-2.06-4.164-3.705-6.94-3.705s-5.304 1.646-6.94 3.705c-1.388 1.748-1.388 3.061-.925 4.226.482 1.214 1.388 2.821 4.164 3.986.939.394 2.594 1.165 3.701 1.165 1.108 0 2.762-.771 3.701-1.165 2.776-1.165 3.682-2.772 4.164-3.986.463-1.165.463-2.478-.925-4.226z"/><path fill="#292F33" d="M21.614 28.372c-.689-.562-1.629.184-3.639.184s-2.95-.746-3.639-.184c-.689.562.585 2.308 3.639 2.308s4.328-1.746 3.639-2.308z"/><path fill="#66757F" d="M13.165 24.769c-.133 0-.268-.035-.391-.107-3.002-1.792-8.357-.913-9.664-.286-.378.184-.835.023-1.019-.357-.182-.381-.022-.837.358-1.019 1.744-.838 7.624-1.725 11.107.35.362.217.481.685.264 1.047-.142.239-.395.372-.655.372z"/><path fill="#66757F" d="M2.141 29.702c-.168 0-.337-.056-.478-.169-.328-.264-.38-.744-.116-1.073 1.455-1.807 4.896-4.888 11.581-5.216.419-.035.779.304.8.725.021.421-.304.779-.725.8-6.089.299-9.171 3.041-10.467 4.649-.151.187-.372.284-.595.284zm31.669 0c-.223 0-.443-.097-.594-.284-1.295-1.608-4.377-4.35-10.467-4.649-.42-.021-.745-.379-.725-.8.021-.42.383-.763.8-.725 6.685.328 10.124 3.409 11.58 5.216.264.329.213.809-.115 1.073-.141.113-.31.169-.479.169z"/><path fill="#66757F" d="M22.787 24.769c-.26 0-.514-.133-.657-.373-.216-.362-.097-.83.264-1.047 3.482-2.076 9.366-1.188 11.107-.35.381.182.541.638.358 1.018-.182.381-.636.544-1.018.358-1.31-.628-6.664-1.505-9.664.286-.123.074-.257.108-.39.108z"/><path fill="#292F33" d="M21.614 22.244c0 1.765-2.539 3.223-3.639 3.223-1.1 0-3.639-1.458-3.639-3.223s1.629-1.81 3.639-1.81 3.639.045 3.639 1.81z"/></svg>
  )
}

export default Raccoon
