import React from 'react'

const Brick = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#C1694F" d="M35.627 10.826L.373 16.56v9.722h.004c-.012.149.129.295.443.473.727.412 9.835 5.286 10.553 5.639.895.439 1.441.493 2.206.112.626-.312 19.236-10.173 20.932-11.074.863-.459 1.146-.711 1.099-.919h.018v-9.687z"/><path fill="#A0041E" d="M.373 16.56v9.722h.004c-.012.149.129.295.443.473.727.412 9.835 5.286 10.553 5.639.432.212.781.329 1.114.356V16.56H.373z"/><path fill="#D99E82" d="M22.224 4.682c1.076-.558 1.113-.628 2.249-.024 1.136.604 9.846 5.248 10.487 5.589.814.434 1.112.591-.449 1.421-1.696.902-20.306 10.763-20.932 11.074-.765.381-1.311.327-2.206-.112-.718-.352-9.826-5.226-10.553-5.639-.82-.465-.482-.706.769-1.37L22.224 4.682z"/><ellipse fill="#C1694F" cx="11.189" cy="17.191" rx="3.679" ry="1.84"/><path fill="#A0041E" d="M11.642 16.734c-1.569-.516-3.352-.369-4.108.339-.005.04-.024.078-.024.118 0 1.016 1.647 1.84 3.679 1.84 1.063 0 2.013-.229 2.684-.589-.333-.692-1.086-1.332-2.231-1.708z"/><ellipse fill="#C1694F" cx="18" cy="13.639" rx="3.679" ry="1.84"/><path fill="#A0041E" d="M18.453 13.182c-1.569-.516-3.352-.369-4.108.339-.005.04-.024.078-.024.118 0 1.016 1.647 1.84 3.679 1.84 1.063 0 2.013-.229 2.684-.589-.333-.692-1.086-1.332-2.231-1.708z"/><ellipse fill="#C1694F" cx="24.811" cy="10.087" rx="3.679" ry="1.84"/><path fill="#A0041E" d="M25.264 9.63c-1.569-.516-3.352-.369-4.108.339-.005.04-.024.078-.024.118 0 1.016 1.647 1.84 3.679 1.84 1.063 0 2.012-.229 2.684-.589-.333-.692-1.086-1.332-2.231-1.708z"/></svg>
  )
}

export default Brick
