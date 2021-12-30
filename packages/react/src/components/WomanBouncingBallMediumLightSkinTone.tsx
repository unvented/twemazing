import React from 'react'

const WomanBouncingBallMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F3D2A2" d="M26.29 26.753c-.53-.033-.658-.368-.708-.617-.16-.802-.275-1.489-.333-1.845l-3.604.707c.168.654.657 2.438 1.271 3.619.354.682.711.703 1.666.758 0 0 3.975-.139 6.542-.237.885-.034.973-1.48.215-1.657-.751-.176-1.595-.346-2.276-.413-.465-.044-2.533-.3-2.773-.315zm-12.431-3.068c-.57.514-.5.865-.312 1.803 0 0 1.113 3.738 1.854 6.2.265.881 1.698.641 1.679-.138-.019-.771-.067-1.63-.174-2.305-.073-.463-.346-2.528-.392-2.764-.102-.523.19-.73.419-.84.736-.356 1.371-.642 1.7-.786l-1.591-3.311c-.59.327-2.194 1.249-3.183 2.141z"/><path fill="#BE1931" d="M33.493 26.983c-.195-.018-.89-.026-1.139.032l-1.55.085c-.078.002-.137.069-.131.147.017.225.309.899.018 1.424-.195.351-.656.495-.688.679-.01.058.032.112.091.118 0 0 .284-.012.532.003.217.1.626.182.836.408.063.148.242.283.364.684.072.239.412 1.33.412 1.33.081.278.189.345.236.494.095.306.263 1.127.346 1.387.083.26.28.37.433.391.152.02.239-.016.239-.016s.385-.362.64-2.01c.15-.967.095-4.904.095-4.904l-.144-.114c-.143-.115-.384-.119-.59-.138z"/><path fill="#CCD6DD" d="M31.227 29.855c-.033 0-.066-.008-.097-.025-.097-.053-.132-.175-.078-.272l.17-.307c.054-.097.178-.131.271-.078.097.053.132.175.078.272l-.17.307c-.035.066-.104.103-.174.103z"/><path fill="#DD2E44" d="M33.882 29.325c-.243-.098-.797-.461-.953-.853-.141-.354-.241-1.312-.259-1.493.297-.028.753-.01.9.004.194.018.448.047.582.16.012.01-.22 1.64-.27 2.182z"/><path fill="#CCD6DD" d="M34.147 27.12s-.002.164-.079.276c-.077.113-.129.39-.149.596-.019.206-.105.981-.083 1.524.022.544.194 1.527.203 1.855s.003.839-.065 1.217c-.069.378-.142.715-.199.922-.073.267-.171.486-.285.639 0 0 .43-.03.757-.667.258-.503.402-.986.454-1.457.004-.036.112-1.291.163-1.918.037-.459.1-1.191.1-1.191.081-.868.1-1.309.061-1.475-.007-.029-.013-.152-.106-.279-.059-.083-.761-.153-.772-.042zm-2.472 3.287c-.074 0-.146-.042-.181-.113-.048-.099-.006-.219.094-.267l.316-.152c.102-.047.219-.006.268.094.048.099.006.219-.094.267l-.316.152c-.028.013-.057.019-.087.019zm.269.656c-.085 0-.164-.055-.191-.141-.032-.106.026-.218.132-.25l.354-.11c.109-.034.218.026.251.132.032.106-.026.218-.132.25l-.354.11c-.021.007-.04.009-.06.009zm.23.679c-.095 0-.179-.067-.196-.164-.021-.109.052-.213.16-.233l.334-.061c.117-.019.213.052.232.161.021.109-.052.213-.16.233l-.334.061-.036.003z"/><path fill="#BE1931" d="M18.11 33.515c-.031-.194-.196-.868-.314-1.095l-.467-1.48c-.021-.075-.101-.116-.175-.09-.214.073-.794.523-1.375.371-.388-.102-.642-.513-.828-.498-.059.005-.101.059-.092.117 0 0 .082.272.129.516-.043.235-.021.651-.188.911-.128.098-.214.305-.572.522-.213.129-1.186.729-1.186.729-.25.148-.287.269-.42.351-.273.168-1.026.535-1.257.68-.231.145-.289.363-.271.516.018.152.074.228.074.228s.446.283 2.106.121c.974-.095 4.774-1.125 4.774-1.125l.075-.167c.076-.168.02-.403-.013-.607z"/><path fill="#CCD6DD" d="M15.299 32.271c-.017 0-.033-.002-.051-.006l-.34-.089c-.106-.028-.171-.137-.143-.244.028-.107.132-.172.244-.143l.34.089c.106.028.171.137.143.244-.023.09-.104.149-.193.149z"/><path fill="#DD2E44" d="M15.938 34.472c.035-.26.248-.886.59-1.135.308-.224 1.211-.559 1.382-.622.101.281.197.727.22.873.031.192.06.447-.017.606-.05.105-1.547.178-2.175.278z"/><path fill="#CCD6DD" d="M18.14 34.183s-.159.039-.287-.008-.409-.028-.614.004c-.204.033-.976.142-1.497.298-.521.157-1.431.567-1.747.657s-.812.211-1.195.239c-.383.027-.728.04-.942.036-.277-.004-.513-.045-.69-.117 0 0 .136.409.834.567.552.125 1.055.145 1.524.078.036-.005 1.278-.212 1.899-.318.453-.078 1.178-.198 1.178-.198.861-.137 1.293-.229 1.444-.307.027-.014.144-.05.244-.172.066-.079-.041-.777-.151-.759zm-3.378-1.16c-.057 0-.113-.024-.153-.071l-.227-.269c-.071-.084-.06-.211.024-.282.084-.07.21-.061.282.024l.227.269c.071.084.06.211-.024.282-.037.032-.083.047-.129.047zm-.601.47c-.067 0-.133-.034-.17-.095l-.194-.316c-.059-.094-.029-.217.065-.275.092-.057.218-.029.274.066l.194.316c.059.094.029.217-.065.275-.032.02-.068.029-.104.029zm-.653.384c-.075 0-.148-.043-.182-.116l-.142-.308c-.046-.1-.002-.219.098-.265.101-.046.22-.003.266.098l.142.308c.046.1.002.219-.098.265-.027.012-.055.018-.084.018z"/><path fill="#A0041E" d="M16.444 21.431c.754-.391 3.244-1.626 4.948-1.799.156-.016.295.078.346.218l1.259 3.435c.065.176-.033.372-.222.433-.78.251-2.74.917-4.224 1.706-.157.084-.345.045-.443-.094-.442-.624-1.591-2.328-1.848-3.543-.031-.144.047-.286.184-.356z"/><path fill="#BE1931" d="M21.42 25.547c-.187-.828-.749-3.55-.494-5.242.023-.155.147-.265.292-.279l3.581-.349c.184-.018.346.126.357.325.047.818.198 2.882.584 4.518.041.173-.043.345-.198.405-.703.27-2.609.95-3.829.892-.144-.008-.259-.12-.293-.27z"/><path fill="#F3D2A2" d="M18.032 10.659c-.037.617.172 1.537 1.603 1.665 1.43.128 2.808-.164 3.392-.377.584-.214.637.836.892 1.807.256.974.44 1.739.407 1.947-.054.352-.726 1.071-.388 1.647s.848 1.115 1.404.854 1.009-.557 1.136-.889c.127-.333-.626-1.25-.674-1.525s-.081-3.894-.146-4.3c-.08-.496-.172-1.177-1.01-1.395-.838-.218-4.153-.593-4.985-.688-.954-.109-1.582.436-1.631 1.254z"/><path fill="#F3D2A2" d="M19.132 6.366c.31-.401.546-.872.661-1.455.409-2.083-.794-4.073-2.688-4.444-1.893-.372-4.483 1.029-4.425 3.151.057 2.107 1.229 5.214 2.993 4.69.466-.138.932-.29 1.375-.474.189.224.325 1.081.247 1.815-.2 1.87 2.381 2.065 2.579.192.157-1.481-.768-2.423-.742-3.475z"/><path fill="#FFE51E" d="M24.54 2.488c-1.311-.014-2.496-1.36-3.845-.501-.264.168-.456.337-.604.503-.234-.711-.636-1.367-1.299-1.799-.648-.422-1.443-.737-2.194-.652-4.578.516-4.329 3.827-3.981 4.137.348.31 1.299-.572 2.002-.669.328-.046 1.041-.053 1.419.49.306.44.411 1.33.411 1.33s.012-1.012.041-1.368c.027-.332.356-.714.801-.221.387.428.19 1.268-.079 1.356-.207.068.129.575.648.961.946.704 1.681.428 1.786.389.106-.039.465-.118.648-1.333.026-.169.044-.35.055-.537.374.324.987.709 1.827.715.929.007 2.619-.466 3.586-1.621.744-.889 1.05-2.355 1.05-2.355-.395.736-1.283 1.186-2.272 1.175z"/><path fill="#DD2E44" d="M22.418 9.749c-.897-1.578-2.174-2.314-3.528-1.683-2.437 1.136-2.644 2.853-1.828 5.349.603 1.845 2.094 3.688 2.906 6.927 0 0 2.246.202 5.436-.14 0-.001-.827-6.655-2.986-10.453z"/><path fill="#F3D2A2" d="M19.923 10.158c-.603-.298-1.501-.279-2.236 1.101-.735 1.38-.969 2.5-1.173 3.36-.157.659-1.276.42-2.358.265-1.086-.156-2.742-.317-2.938-.438-.191-.118-1.507-.386-1.973-.393-.34-.005-2.01.282-2.402.612-.461.388 2.658.325 2.937.594s.914.457 1.312.562c.294.078 4.284 1.268 4.719 1.375.531.131 1.239.341 1.813-.406.574-.748 2.271-3.675 2.719-4.469.513-.91.38-1.768-.42-2.163z"/><circle fill="#FFAC33" cx="6.397" cy="21.831" r="3.603"/><path fill="#C1694F" d="M7.365 21.657c.764.708 1.573 1.273 2.329 1.615.122-.277.201-.573.25-.881-.628-.303-1.297-.777-1.942-1.37l1.304-1.304c-.178-.245-.389-.459-.621-.652l-1.32 1.32c-.646-.702-1.158-1.437-1.455-2.11-.306.042-.603.109-.879.223.013.031.016.059.03.09.336.785.927 1.635 1.667 2.434L5.43 22.319c-.796-.737-1.642-1.325-2.423-1.662-.1.29-.162.595-.185.914.636.302 1.317.782 1.972 1.385l-1.158 1.158c.193.232.408.444.652.621l1.142-1.142c.592.643 1.023 1.262 1.304 1.803.315-.03.617-.093.903-.199-.356-.751-.914-1.542-1.564-2.247l1.292-1.293z"/></svg>
  )
}

export default WomanBouncingBallMediumLightSkinTone
