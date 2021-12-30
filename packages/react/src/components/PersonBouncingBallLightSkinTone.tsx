import React from 'react'

const PersonBouncingBallLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F7DECE" d="M26.3 26.621c-.339-.021-.504-.165-.57-.496-.187-.94-.313-1.721-.356-1.993l-3.912.767c.118.473.644 2.5 1.322 3.806.393.757.831.782 1.79.838 0 0 3.726-.134 6.305-.231 1.142-.043 1.225-1.795.253-2.014-.692-.156-1.438-.3-2.053-.36-.465-.046-2.539-.303-2.779-.317zm-7.462-1.676l-1.729-3.593c-.428.233-2.257 1.253-3.35 2.237-.635.572-.549 1.002-.36 1.944 0 0 1.087 3.639 1.831 6.111.32 1.062 2.024.713 1.995-.251-.022-.732-.07-1.523-.171-2.156-.073-.463-.348-2.534-.394-2.77-.064-.334.033-.53.337-.677.863-.416 1.588-.735 1.841-.845z"/><path fill="#DD551F" d="M32.67 26.978c-.133.007-.238.02-.315.037l-1.55.085c-.078.002-.137.069-.131.147.017.225.309.899.018 1.424-.195.351-.656.495-.688.679-.01.058.032.112.091.118 0 0 .284-.012.532.003.217.1.626.182.836.408.063.148.242.283.364.684.072.239.412 1.33.412 1.33.081.278.189.345.236.494.095.306.263 1.127.346 1.387.083.26.28.37.433.391.152.02.239-.016.239-.016s.385-.362.64-2.01c.15-.967.095-4.904.095-4.904l-1.558-.257z"/><path fill="#CCD6DD" d="M31.227 29.855c-.033 0-.066-.008-.097-.025-.097-.053-.132-.175-.078-.272l.17-.307c.054-.097.178-.131.271-.078.097.053.132.175.078.272l-.17.307c-.035.066-.103.103-.174.103z"/><path fill="#FA743E" d="M33.882 29.325c-.243-.098-.797-.461-.953-.853-.141-.354-.241-1.312-.259-1.493.297-.028.753-.01.9.004.194.018.447.044.585.166-.001-.001-.214 1.543-.273 2.176z"/><path fill="#CCD6DD" d="M34.148 27.12s-.002.164-.079.276c-.077.113-.129.39-.149.596-.019.206-.105.981-.083 1.524.022.544.194 1.527.203 1.855.009.328.003.839-.065 1.217-.069.378-.142.715-.199.922-.073.267-.171.486-.285.639 0 0 .43-.03.757-.667.258-.503.402-.986.454-1.457l.263-3.109c.081-.868.1-1.309.061-1.475-.007-.029-.013-.152-.106-.279-.06-.083-.762-.153-.772-.042zm-2.472 3.287c-.074 0-.146-.042-.181-.113-.048-.1-.006-.219.094-.267l.317-.152c.101-.046.219-.006.268.094.048.1.006.219-.094.267l-.317.152c-.029.013-.058.019-.087.019zm.268.657c-.086 0-.164-.055-.191-.141-.032-.105.026-.218.132-.25l.354-.11c.112-.033.217.027.251.132.032.105-.026.218-.132.25l-.354.11c-.021.006-.04.009-.06.009zm.232.678c-.095 0-.179-.067-.196-.164-.021-.109.052-.213.16-.233l.333-.061c.108-.02.213.052.232.161.021.109-.052.213-.16.233l-.333.061-.036.003z"/><path fill="#DD551F" d="M17.911 32.716c-.04-.128-.078-.226-.114-.296l-.467-1.48c-.021-.075-.101-.116-.175-.09-.214.073-.794.523-1.375.371-.388-.102-.642-.513-.828-.498-.059.005-.101.059-.092.117 0 0 .082.272.129.516-.043.235-.021.651-.188.911-.128.098-.214.305-.572.522-.213.129-1.186.729-1.186.729-.25.148-.287.269-.42.351-.273.168-1.026.535-1.257.68-.231.145-.289.363-.271.516.018.152.074.228.074.228s.446.283 2.106.121c.974-.095 4.775-1.117 4.775-1.117s-.049-1.295-.139-1.581z"/><path fill="#CCD6DD" d="M15.3 32.271c-.017 0-.033-.002-.051-.006l-.34-.089c-.106-.028-.171-.137-.143-.244.027-.107.131-.171.244-.143l.34.089c.106.028.171.137.143.244-.023.09-.105.149-.193.149z"/><path fill="#FA743E" d="M15.939 34.472c.035-.26.248-.886.59-1.135.308-.224 1.211-.559 1.382-.622.101.281.197.727.22.873.031.192.072.411-.022.609 0 .001-1.543.176-2.17.275z"/><path fill="#CCD6DD" d="M18.141 34.183s-.159.039-.287-.008-.409-.028-.614.004c-.204.033-.976.142-1.497.298-.521.157-1.431.567-1.747.657s-.812.211-1.195.239c-.383.027-.728.04-.942.036-.277-.004-.513-.045-.69-.117 0 0 .136.409.834.567.552.125 1.055.145 1.524.078.036-.005 3.077-.517 3.077-.517.861-.137 1.293-.229 1.444-.307.027-.014.144-.05.244-.172.065-.078-.042-.776-.151-.758zm-3.379-1.16c-.057 0-.113-.024-.153-.071l-.227-.269c-.071-.084-.06-.211.024-.282.084-.07.21-.061.282.024l.227.269c.071.084.06.211-.024.282-.037.032-.083.047-.129.047zm-.6.47c-.067 0-.133-.034-.17-.095l-.194-.316c-.059-.094-.029-.217.065-.275.093-.057.217-.029.274.066l.194.316c.059.094.029.217-.065.275-.032.02-.068.029-.104.029zm-.652.384c-.075 0-.147-.043-.182-.116l-.143-.308c-.046-.1-.003-.219.098-.265.1-.047.219-.003.266.097l.143.308c.046.1.003.219-.098.265-.028.013-.056.019-.084.019z"/><path fill="#C63900" d="M16.402 21.36c.74-.389 3.187-1.616 4.873-1.765.154-.014.293.086.346.23l1.309 3.555c.067.182-.027.382-.213.441-.769.245-2.7.895-4.157 1.681-.154.083-.342.04-.441-.104-.449-.65-1.618-2.423-1.894-3.678-.033-.145.043-.29.177-.36z"/><path fill="#DD551F" d="M21.334 25.576c-.189-.827-.758-3.547-.484-5.242.025-.155.154-.266.305-.281l3.721-.37c.191-.019.359.124.369.323.044.818.189 2.882.581 4.517.042.173-.046.346-.208.407-.732.274-2.715.965-3.982.914-.148-.006-.268-.118-.302-.268z"/><path fill="#F7DECE" d="M18.032 10.676c-.037.617.172 1.537 1.603 1.665 1.43.128 2.808-.164 3.392-.377.584-.214.637.836.892 1.807.256.974.44 1.739.407 1.947-.054.352-.726 1.071-.388 1.647.338.576.848 1.115 1.404.854s1.009-.557 1.136-.889c.127-.333-.626-1.25-.674-1.525s-.081-3.894-.146-4.3c-.08-.496-.172-1.177-1.01-1.395s-4.153-.593-4.985-.688c-.953-.109-1.582.436-1.631 1.254zM16.461.971c-1.845-.19-4.101 1.369-3.959 3.405.198 2.841 2.368 4.687 4.011 4.031 1.723-.688 2.703-1.387 2.911-3.417.209-2.03-1.118-3.829-2.963-4.019z"/><path fill="#F7DECE" d="M19.083 5.593c1.625-3.518-4.125-1.612-4.125-1.612-1.092.348.181 1.974-.058 3.122-.162.794 1.439.743 1.439.743s.685-.202.955.622l.002.008c.068.21.116.469.111.834-.027 1.808 2.503 2.205 2.528.394.01-.717-.229-1.278-.478-1.788l-.022-.045c-.372-.76-.753-1.408-.352-2.278z"/><path fill="#292F33" d="M18.713.962c-1.13-.88-4.156-1.091-5.51.802-1.268.128-1.41 1.408-1.123 2.041.23.506 1.567.279 2.173 1.192.156-.315.072-.847-.054-1.109.525.283.637 1.379 2.455 1.608 1.757.221 1.867 1.688 1.867 1.688s.719-.624 1.109-1.452c.745-1.581.329-3.799-.917-4.77z"/><path fill="#FA743E" d="M22.418 9.765c-.897-1.578-2.213-2.392-3.528-1.683-1.86 1.002-2.251 2.242-2.141 3.879.146 2.165 2.5 5.884 2.881 8.423 0 0 2.583.175 5.773-.166.002 0-.825-6.654-2.985-10.453z"/><path fill="#F7DECE" d="M19.924 10.175c-.603-.298-1.614-.479-2.349.901-.735 1.38-1.027 2.884-1.06 3.561-.033.677-1.108.284-2.191.128-1.086-.156-2.853-.332-3.048-.453-.191-.118-1.565-.234-2.03-.242-.34-.005-2.104.282-2.496.612-.461.388 2.73.461 3.01.729.28.269.876.481 1.274.587.294.078 4.391 1.364 4.826 1.471.531.131 1.253.327 1.827-.421.574-.748 2.356-3.913 2.804-4.707.512-.909.232-1.771-.567-2.166z"/><circle fill="#FFAC33" cx="6.397" cy="21.831" r="3.603"/><path fill="#C1694F" d="M7.365 21.657c.764.708 1.573 1.273 2.329 1.615.122-.277.201-.573.25-.881-.628-.303-1.297-.777-1.942-1.37l1.304-1.304c-.178-.245-.389-.459-.621-.652l-1.32 1.32c-.646-.702-1.158-1.437-1.455-2.11-.306.042-.603.109-.879.223.013.031.016.059.03.09.336.785.927 1.635 1.667 2.434L5.43 22.319c-.796-.737-1.642-1.325-2.423-1.662-.1.29-.162.595-.185.914.636.302 1.317.782 1.972 1.385l-1.158 1.158c.193.232.408.444.652.621l1.142-1.142c.592.643 1.023 1.262 1.304 1.803.315-.03.617-.093.903-.199-.356-.751-.914-1.542-1.564-2.247l1.292-1.293z"/></svg>
  )
}

export default PersonBouncingBallLightSkinTone
