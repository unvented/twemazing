import React from 'react'

const WomanGettingMassageDarkSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><ellipse transform="rotate(-80.781 18 19.656)" fill="#0B0200" cx="18.001" cy="19.656" rx="12" ry="12"/><circle fill="#0B0200" cx="13.001" cy="8" r="7"/><circle fill="#0B0200" cx="19.001" cy="11" r="11"/><path fill="#0B0200" d="M30.001 20h-24V8l24 3z"/><path fill="#9268CA" d="M27.001 27h-18c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z"/><path fill="#7450A8" d="M26.001 32h1v4h-1zm-17 0h1v4h-1z"/><path fill="#7C533E" d="M15.001 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z"/><path fill="#7C533E" d="M14.001 5s-.003 5.308-5 5.936V17c0 4.971 4.029 9 9 9s9-4.029 9-9v-5.019c-11.111-.376-13-6.981-13-6.981z"/><ellipse fill="#DF1F32" cx="18.001" cy="22" rx="2" ry="1"/><path fill="#3D2E24" d="M19.001 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path fill="#583529" d="M5.561 5.032l5.189-3.823 1.638-.188V3.86l3.004.693c.689.161 1.119.849.96 1.538-.158.689-.847 1.119-1.536.96l-4.087-.941-2.045 2.045c-.342.343-.916.663-1.517.858l-.774 6.38s0 .999-.999.999-.999-.999-.999-.999V7.398l1.166-2.366z"/><path fill="#7C533E" d="M5.169 4.639L7.4 2.408 7.999 0H12v3.468l3 .693c.689.161 1.119.849.96 1.538-.158.689-.847 1.119-1.536.96l-4.088-.942-2.044 2.045c-.343.343-.917.664-1.518.858L6 15.001S6 16 5.001 16s-.999-.999-.999-.999V7.005l1.167-2.366z"/><path fill="#583529" d="M30.44 5.032l-5.846-3.594-.982-.417V3.86l-3.004.693c-.689.161-1.119.849-.96 1.538.158.689.847 1.119 1.536.96l4.088-.942 2.045 2.045c.343.343.916.663 1.518.858l.774 6.38s0 .999.999.999.999-.999.999-.999V7.398L30.44 5.032z"/><path fill="#7C533E" d="M30.833 4.639l-2.231-2.231-.6-2.408h-3.998v3.468l-3.003.692c-.689.161-1.119.849-.96 1.538.158.689.847 1.119 1.536.96l4.088-.942 2.045 2.045c.343.343.916.663 1.518.858l.774 6.38s0 .999.999.999C32 16 32 15.001 32 15.001V7.005l-1.167-2.366z"/><path d="M23.906 15.056c-.088-.071-.213-.074-.305-.007-.006.005-.63.451-1.851.451-1.22 0-1.845-.446-1.85-.45-.091-.068-.217-.067-.306.004-.089.071-.119.193-.073.297.03.068.751 1.649 2.229 1.649 1.479 0 2.199-1.581 2.229-1.648.046-.104.016-.225-.073-.296zm-7.5 0c-.088-.071-.213-.074-.305-.007-.006.005-.63.451-1.851.451-1.22 0-1.845-.446-1.85-.45-.091-.068-.217-.067-.306.004-.089.071-.119.193-.073.297.03.068.751 1.649 2.229 1.649 1.479 0 2.199-1.581 2.229-1.648.045-.104.016-.225-.073-.296z" fill="#0B0200"/></svg>
  )
}

export default WomanGettingMassageDarkSkinTone
