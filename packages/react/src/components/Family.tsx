import React from 'react'

const Family = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFAC33" d="M31.72.302c-1.703-.551-5.71-.401-6.712.902-2.605.05-5.66 2.404-6.061 5.51-.397 3.074.487 4.501.801 6.812.356 2.618 1.828 3.456 3.005 3.807 1.693 2.237 3.493 2.141 6.516 2.141 3.043 0 5.258-1.057 6.73-2.993V2.834C34.925 1.737 33.487.873 31.72.302z"/><path fill="#FFDC5D" d="M26.05 17.786h5.059v10H26.05z"/><path fill="#FFDC5D" d="M35.248 9.103c-.571-.791-1.302-1.427-2.905-1.653.601.275 1.177 1.227 1.252 1.753.075.526.15.952-.326.426-1.906-2.107-3.982-1.277-6.039-2.564-1.437-.899-1.875-1.893-1.875-1.893s-.175 1.327-2.354 2.68c-.632.392-1.385 1.265-1.803 2.554-.301.927-.207 1.753-.207 3.165 0 1.145.27 2.235.738 3.219 1.218 2.558 3.823 4.37 6.85 4.37 2.587 0 4.869-1.335 6.239-3.317.561-.812.97-1.733 1.181-2.717v-4.138c-.144-.83-.385-1.378-.751-1.885z"/><path fill="#C1694F" d="M31.952 17.786h-6.746s.843 1.686 3.373 1.686 3.373-1.686 3.373-1.686zm-2.529-2.107h-1.686c-.233 0-.422-.189-.422-.422 0-.233.189-.422.422-.422h1.686c.233 0 .422.189.422.422-.001.233-.189.422-.422.422z"/><path fill="#662113" d="M25.207 12.728c-.466 0-.843-.378-.843-.843v-.843c0-.466.378-.843.843-.843.466 0 .843.378.843.843v.843c0 .465-.377.843-.843.843zm6.745 0c-.466 0-.843-.378-.843-.843v-.843c0-.466.378-.843.843-.843.466 0 .843.378.843.843v.843c.001.465-.377.843-.843.843z"/><path fill="#FA743E" d="M21 22h5s.198 4.773 2.472 4.773S31.084 22 31.084 22H36v14H18V24.973C18 23 19 22 21 22z"/><path fill="#DD551F" d="M20.986 26h1.028v10h-1.028z"/><path fill="#FFAC33" d="M8.27 19.473c5.902 0 8.713-3.949 8.962-10.656.15-4.057-2.23-7.13-6.511-8.515-1.704-.551-5.711-.401-6.713.901-1.362.026-2.844.686-4.008 1.751v13.375c.548.544 1.185.834 1.754 1.003 1.694 2.237 3.494 2.141 6.516 2.141z"/><path fill="#FFDC5D" d="M4.897 17.786h5.059v10H4.897z"/><path fill="#FFDC5D" d="M14.095 9.103c-.571-.791-1.302-1.427-2.905-1.653.601.275 1.177 1.227 1.252 1.753.075.526.15.952-.326.426-1.906-2.107-3.982-1.277-6.039-2.564-1.436-.899-1.874-1.894-1.874-1.894s-.175 1.327-2.354 2.68C1.217 8.243.464 9.116.046 10.405c-.022.067-.028.132-.046.198v4.506c.124.587.323 1.148.577 1.68 1.218 2.558 3.823 4.37 6.85 4.37 2.587 0 4.869-1.335 6.239-3.317.849-1.229 1.349-2.705 1.349-4.271 0-2.565-.268-3.566-.92-4.468z"/><path fill="#C1694F" d="M10.799 17.786H4.053s.843 1.686 3.373 1.686 3.373-1.686 3.373-1.686zM8.27 15.679H6.584c-.233 0-.422-.189-.422-.422 0-.233.189-.422.422-.422H8.27c.233 0 .422.189.422.422 0 .233-.189.422-.422.422z"/><path fill="#662113" d="M4.054 12.728c-.466 0-.843-.378-.843-.843v-.843c0-.466.378-.843.843-.843.466 0 .843.378.843.843v.843c0 .465-.377.843-.843.843zm6.745 0c-.466 0-.843-.378-.843-.843v-.843c0-.466.378-.843.843-.843.466 0 .843.378.843.843v.843c.001.465-.377.843-.843.843z"/><path fill="#99AAB5" d="M15 22h-5s-.198 4.773-2.472 4.773S4.897 22 4.897 22H0v14h18V24.973C18 23 17 22 15 22z"/><path fill="#66757F" d="M13.986 26h1.028v10h-1.028z"/><path fill="#FFAC33" d="M20.959 15.053c-1.464-.474-4.909-.345-5.771.775-2.239.043-4.866 2.067-5.211 4.737-.341 2.643.419 3.87.689 5.857.306 2.251 1.572 2.971 2.584 3.273 1.456 1.923 3.003 1.841 5.602 1.841 5.074 0 7.491-3.395 7.705-9.162.129-3.489-1.917-6.13-5.598-7.321z"/><path fill="#FFDC5D" d="M16.053 30.085h4.148V36h-4.148z"/><path fill="#FFDC5D" d="M23.861 22.62c-.491-.68-1.12-1.227-2.498-1.421.517.237 1.012 1.055 1.077 1.507.065.452.129.818-.28.366-1.639-1.811-3.424-1.098-5.192-2.205-1.235-.773-1.612-1.628-1.612-1.628s-.151 1.141-2.024 2.304c-.543.337-1.191 1.088-1.55 2.196-.258.797-.178 1.507-.178 2.721 0 3.544 2.921 6.524 6.524 6.524s6.524-3.006 6.524-6.524c-.001-2.204-.232-3.065-.791-3.84z"/><path fill="#C1694F" d="M21.027 30.085h-5.8s.725 1.45 2.9 1.45 2.9-1.45 2.9-1.45zm-2.175-1.449h-1.45c-.2 0-.362-.162-.362-.362s.162-.362.362-.362h1.45c.2 0 .362.162.362.362s-.162.362-.362.362z"/><path fill="#662113" d="M15.091 26.764c-.466 0-.843-.377-.843-.843v-.843c0-.466.377-.843.843-.843.465 0 .843.377.843.843v.843c0 .466-.377.843-.843.843zm6 0c-.466 0-.843-.377-.843-.843v-.843c0-.466.377-.843.843-.843.466 0 .843.377.843.843v.843c0 .466-.377.843-.843.843z"/><path fill="#5C913B" d="M23.091 33h-2.89s-.705 3-2.074 3c-1.368 0-2.074-3-2.074-3h-1.962c-.368 0-.719.032-1.055.088-1.941.326-3.301 1.535-3.759 2.912h17.632c-.518-1.602-2.159-3-3.818-3z"/></svg>
  )
}

export default Family
