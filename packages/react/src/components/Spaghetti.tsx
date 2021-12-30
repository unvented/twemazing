import React from 'react'

const Spaghetti = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><ellipse fill="#939598" cx="18" cy="24" rx="18" ry="10"/><ellipse fill="#F1F2F2" cx="18" cy="22" rx="18" ry="10"/><ellipse fill="#FFCC4D" cx="18" cy="21.611" rx="14.8" ry="7.611"/><path fill="#FFE8B6" d="M11 27c-.552 0-1-.447-1-1s.448-1 1-1c1.898 0 3.082-1.085 3.174-1.835.091-.736-.96-1.081-1.417-1.195-.906-.225-1.58.033-2.358.335-1.068.414-2.531.978-4.106-.598-.689-.688-.868-1.604-.492-2.513C6.534 17.425 9.245 16 11 16c.552 0 1 .448 1 1s-.448 1-1 1c-1.115 0-2.995 1.099-3.351 1.96-.074.178-.044.23.058.333.629.628.928.548 1.971.147.862-.334 2.042-.79 3.564-.409 2.384.596 3.07 2.136 2.917 3.379C15.942 25.174 13.953 27 11 27zm6 1c-.552 0-1-.447-1-1s.448-1 1-1c5.697 0 9.833-1.247 12.293-3.707.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414C27.858 26.556 23.247 28 17 28z"/><path fill="#FFE8B6" d="M21.349 24.16c-.537 0-1.069-.06-1.591-.191-.543-.135-2.194-.548-2.246-1.883-.038-1 .661-2.172 5.938-3.957C22.875 17.66 21.492 17 20 17c-2.513 0-3.797.211-4.293.707-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414C15.248 15.338 16.741 15 20 15c2.396 0 5.396 1.333 5.676 3.053.107.662-.193 1.506-1.359 1.895-2.583.861-3.921 1.549-4.501 1.957.112.039.253.081.427.125 3.231.804 7.322-2.366 7.768-3.18.072-.481.488-.85.989-.85.553 0 1 .448 1 1 0 .706-.635 1.56-1.887 2.537-1.743 1.361-4.289 2.622-6.764 2.623z"/><path fill="#DD2E44" d="M27 20.5c0 2.485-2.029 5.5-7 5.5s-4-2-12-5c-3.376-1.266 5.029-5 10-5s9 2.015 9 4.5z"/><path fill="#EA596E" d="M16 24c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414.281-.305.112-.474 0-.586-.558-.558-2.238-.616-3.846.188-.495.247-1.095.047-1.342-.447-.247-.494-.047-1.095.447-1.342 1.977-.988 4.726-1.242 6.154.188 1.252 1.252.686 2.728 0 3.414-.194.194-.45.292-.706.292zm4-4c-2.414 0-3.685-1.271-4.707-2.293-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0C17.661 17.247 18.414 18 20 18c.773 0 2.586 0 3.293-.707.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414C23.414 20 21.108 20 20 20zm0 4c-.553 0-1-.447-1-1s.447-1 1-1c1.847 0 4.548-.962 5.293-1.707.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414C25.416 22.998 22.041 24 20 24z"/><path fill="#FFAC33" d="M17.001 20c-.367 0-.72-.202-.896-.553-.999-1.997-3.077-6.153-4.098-14.323-.068-.548.32-1.048.868-1.116.544-.07 1.048.32 1.116.868.979 7.83 2.953 11.779 3.902 13.677.247.494.047 1.095-.447 1.342-.142.071-.295.105-.445.105z"/><path fill="#99AAB5" d="M35.125 11.042l-15.24-4.503C16.534 1.23 12.319 2.084 10 2c-.25-.009-.819.22-.833.625-.015.392 1.026.337 1.186.343 1.705.062 3.945.176 6.132 2.486C13.827 4.528 9.744 3.933 9 4c-.458.042-.5.375.042.625.445.206 4.572 1.647 6.84 2.34-1.419.489-3.286.715-6.434-.86C8.951 5.857 8.247 5.506 8 6c-.247.494.506.753 1 1 2.16 1.08 3.43 2.332 4.823 2.332 1.656 0 2.854-.505 3.792-.899.333-.14.634-.263.903-.343.016.01.028.024.044.033l14.805 6.592c.485.265 1.572-.791 1.837-1.275.265-.486.28-2.175-.079-2.398z"/><path fill="#FFAC33" d="M13 19c-.256 0-.512-.098-.707-.293-1.315-1.315-4.446-8.867-.074-14.332.345-.432.976-.501 1.405-.156.432.345.502.974.156 1.405-3.648 4.561-.778 10.963-.074 11.668.391.391.391 1.023 0 1.414-.194.196-.45.294-.706.294z"/></svg>
  )
}

export default Spaghetti
