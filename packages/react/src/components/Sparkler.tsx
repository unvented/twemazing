import React from 'react'

const Sparkler = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#269" d="M36 4c0-2.209-1.791-4-4-4H4C1.791 0 0 1.791 0 4v28c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V4z"/><path fill="#FFCC4D" d="M18 20c-.419 0-.809.265-.949.684l-3 9c-.175.524.108 1.09.632 1.265.525.177 1.091-.109 1.265-.632l3-9c.174-.524-.108-1.09-.632-1.265-.105-.036-.212-.052-.316-.052z"/><path fill="#FFCC4D" d="M18 20c-.087 0-.175.012-.263.036-.533.145-.847.694-.702 1.227l3.226 11.856c.146.533.696.845 1.228.702.533-.145.848-.694.702-1.228l-3.227-11.856C18.844 20.292 18.44 20 18 20z"/><path fill="#FFCC4D" d="M18 20c-.218 0-.437.071-.621.216l-13.25 10.5c-.433.343-.506.972-.163 1.405.343.433.973.504 1.405.163l13.25-10.5c.433-.343.506-.972.163-1.405-.198-.249-.49-.379-.784-.379z"/><path fill="#FFCC4D" d="M18.001 20c-.039 0-.077.002-.116.006L5.553 21.423c-.548.063-.942.559-.879 1.108.063.549.565.944 1.108.879l12.333-1.417c.548-.063.942-.559.879-1.108-.059-.509-.492-.885-.993-.885z"/><path fill="#FFCC4D" d="M3.5 13.083c-.373 0-.731.21-.903.569-.238.499-.027 1.096.472 1.333l14.5 6.917c.498.239 1.095.027 1.333-.472s.027-1.095-.472-1.333L3.93 13.18c-.138-.066-.285-.097-.43-.097z"/><path fill="#FFCC4D" d="M7.333 4.833c-.199 0-.399.059-.574.182-.452.318-.561.941-.243 1.393l10.666 15.167c.317.452.941.561 1.393.243.452-.317.561-.941.243-1.393L8.151 5.258c-.194-.277-.504-.425-.818-.425z"/><path fill="#FFCC4D" d="M18 20c-.276 0-.551.114-.749.337-.366.413-.328 1.045.085 1.412l11.708 10.375c.413.365 1.045.328 1.411-.085.366-.413.328-1.045-.085-1.412L18.663 20.251c-.19-.168-.427-.251-.663-.251z"/><path fill="#FFCC4D" d="M18 20c-.419 0-.81.266-.949.686-.174.524.111 1.09.635 1.264l12.333 4.083c.528.175 1.091-.111 1.264-.635.174-.524-.11-1.09-.635-1.264l-12.333-4.083C18.21 20.016 18.104 20 18 20z"/><path fill="#FFCC4D" d="M31.835 18.5c-.036 0-.072.002-.108.006l-13.835 1.5c-.549.059-.946.553-.886 1.102.06.549.559.944 1.102.886l13.833-1.5c.55-.059.946-.553.887-1.102-.056-.512-.489-.892-.993-.892z"/><path fill="#FFCC4D" d="M18.001 22c-.309 0-.613-.143-.809-.411-.325-.446-.227-1.071.219-1.396l8.917-6.5c.447-.325 1.072-.227 1.396.219.326.446.228 1.072-.219 1.397l-8.917 6.5c-.177.129-.383.191-.587.191z"/><path fill="#FFCC4D" d="M17.999 22c-.176 0-.354-.046-.515-.144-.473-.285-.625-.899-.34-1.373l7.834-13c.284-.474.898-.626 1.373-.34.473.285.625.899.34 1.373l-7.834 13c-.188.312-.519.484-.858.484z"/><path fill="#55ACEE" d="M20 0h-4v19c0 1.104.896 2 2 2s2-.896 2-2V0z"/><circle fill="#F5F8FA" cx="18" cy="21" r="3"/><path fill="#F5F8FA" d="M6.963 31.694c0-1.303-1.057-2.359-2.359-2.359-1.303 0-2.359 1.056-2.359 2.359s1.056 2.359 2.359 2.359c1.302.001 2.359-1.056 2.359-2.359z"/><circle fill="#F5F8FA" cx="29.708" cy="31.375" r="2.958"/><path fill="#F5F8FA" d="M22.833 32.856c0-.887-.719-1.606-1.606-1.606-.887 0-1.606.719-1.606 1.606s.719 1.606 1.606 1.606c.887 0 1.606-.719 1.606-1.606z"/><circle fill="#F5F8FA" cx="3.077" cy="13.917" r="1.75"/><path fill="#F5F8FA" d="M9.75 5.167c0-1.565-1.269-2.833-2.833-2.833-1.565 0-2.833 1.268-2.833 2.833C4.083 6.731 5.352 8 6.917 8 8.481 8 9.75 6.731 9.75 5.167zm24.584 14.25c0-1.22-.989-2.208-2.209-2.208-1.219 0-2.208.989-2.208 2.208s.989 2.208 2.208 2.208c1.22 0 2.209-.989 2.209-2.208z"/><circle fill="#F5F8FA" cx="25.917" cy="8" r="1.75"/></svg>
  )
}

export default Sparkler
