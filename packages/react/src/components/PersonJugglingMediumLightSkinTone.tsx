import React from 'react'

const PersonJugglingMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FA743E" d="M26 26.163l.017.836H6V36h24v-9.835z"/><path fill="#F3D2A2" d="M13.862 26.999s.85 2.063 3.55 2.063 3.45-2.063 3.45-2.063l-.024-3.9-6.976-.1v4z"/><path fill="#E2C196" d="M13.881 25.029c1.058 1.207 2.049 1.51 3.477 1.51 1.426 0 2.426-.304 3.485-1.51v-3.515h-6.961v3.515z"/><path fill="#FFE51E" d="M20.591 5.419c-1.666-.539-5.587-.392-6.567.882-2.548.049-5.538 2.352-5.93 5.391-.388 3.008.476 4.404.784 6.666.348 2.562 1.789 3.382 2.941 3.725 1.657 2.189 3.418 2.095 6.375 2.095 5.775 0 8.525-3.864 8.769-10.427.146-3.97-2.183-6.976-6.372-8.332z"/><path fill="#F3D2A2" d="M23.894 14.031c-.559-.774-1.274-1.397-2.843-1.617.588.27 1.152 1.201 1.225 1.715.074.515.147.931-.319.417-1.865-2.062-3.896-1.25-5.909-2.509-1.406-.88-1.834-1.853-1.834-1.853s-.172 1.299-2.303 2.622c-.618.384-1.355 1.238-1.764 2.499-.294.907-.203 1.715-.203 3.097 0 4.034 3.324 7.425 7.425 7.425s7.425-3.421 7.425-7.425c0-2.508-.263-3.489-.9-4.371z"/><path fill="#C1694F" d="M17.359 23.566c-2.396 0-3.132-.62-3.256-.745-.222-.225-.222-.59 0-.815.216-.218.562-.223.786-.02.045.032.627.428 2.47.428 1.915 0 2.466-.426 2.472-.431.223-.223.573-.213.796.014.223.225.21.6-.013.824-.123.125-.858.745-3.255.745m.835-3.101h-1.65c-.228 0-.412-.184-.412-.412 0-.228.184-.412.412-.412h1.65c.228 0 .412.184.412.412 0 .228-.184.412-.412.412z"/><path fill="#662113" d="M14.069 17.578c-.456 0-.825-.369-.825-.825v-.825c0-.456.369-.825.825-.825.456 0 .825.369.825.825v.825c0 .455-.37.825-.825.825zm6.6 0c-.456 0-.825-.369-.825-.825v-.825c0-.456.369-.825.825-.825.456 0 .825.369.825.825v.825c0 .455-.37.825-.825.825z"/><path fill="#D1D3D4" d="M5.895 14.205s-3.834 1.39-4.214 6.221c0 0-2.4-4.817-.522-10.149l4.736 3.928zm14.156-8.228s-2.758-3.005-7.363-1.497c0 0 3.522-4.069 9.167-4.387l-1.804 5.884zm9.22 10.36s1.972-3.571-.923-7.457c0 0 4.978 2.046 7.075 7.296l-6.152.161z"/><circle fill="#5C913B" cx="4.603" cy="10.986" r="3.5"/><circle fill="#BE1931" cx="22.516" cy="3.5" r="3.5"/><circle fill="#3B88C3" cx="32.396" cy="17.854" r="3.5"/><path fill="#E2C196" d="M32.646 23.488c-.111-.538-.634-.884-1.169-.774l-2.057.431h-1.809c-.85 0-1.538.695-1.538 1.555v1.552h3.847c.83 0 1.503-.666 1.532-1.496l.273-.057h.503c0-.059-.022-.113-.035-.169.342-.215.537-.621.453-1.042z"/><path fill="#F3D2A2" d="M36.075 23.921c0-.429-.344-.776-.77-.776l-4.616.776h-3.847c-.426 0-.77.349-.77.778L26 26.25l1.611.002h3.078l4.616-1.553c.001 0 .77-.348.77-.778z"/><path fill="#E2C196" d="M3.43 27.236c.11-.538.633-.884 1.168-.774l2.058.431h1.808c.85 0 1.539.695 1.539 1.555V30H6.155c-.83 0-1.503-.666-1.532-1.496l-.273-.057h-.503c0-.059.022-.113.036-.169-.343-.215-.538-.621-.453-1.042z"/><path fill="#F3D2A2" d="M0 27.669c0-.429.344-.776.769-.776l4.617.776h3.847c.425 0 .769.349.769.778V30H5.386L.769 28.447S0 28.099 0 27.669z"/><path fill="#DD551F" d="M10 30h1v6h-1zm15-3h1v9h-1z"/></svg>
  )
}

export default PersonJugglingMediumLightSkinTone
