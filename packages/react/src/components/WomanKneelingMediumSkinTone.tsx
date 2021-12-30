import React from 'react'

const WomanKneelingMediumSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D4AB88" d="M19.652 1.065c-1.764-.694-4.514.202-4.834 2.263-.317 2.047.265 5.257 2.063 5.063 1.885-.204 3.819-.613 4.582-2.554.764-1.942-.047-4.078-1.811-4.772z"/><path fill="#D4AB88" d="M20.963 6.335c2.567-3.016-3.617-2.722-3.617-2.722-1.17.042-.365 1.993-.916 3.057-.378.737 1.212 1.128 1.212 1.128s.73-.011.769.875v.008c.009.225-.015.493-.12.851-.524 1.772 1.857 2.859 2.38 1.083.207-.703.127-1.321.022-1.892l-.009-.051c-.159-.847-.356-1.591.279-2.337z"/><path fill="#963B22" d="M21.668 1.776C20.493.401 18.877-.17 16.11.9c-2.417.934-1.64 2.856-1.077 2.528 1.552-.905 2.582-.132 3.372 1.131.23-.62 1.242-1.001 1.447-.094.23 1.02-.717 1.464-.59 1.742.042.093-.048-.084 0 0 .606 1.063 1.591 1.397 1.591 1.397s.373.147 1.01-1.109c.638-1.255.971-3.354-.195-4.719z"/><path fill="#963B22" d="M21.032 3.222c2.395.517 1.412 4.251 1.647 5.625.289 1.692 1.95 1.752 1.95 1.752s-.275-1.178-.129-2.41c.203-1.709 1.317-3.088.141-4.757-1.501-2.131-5.098-.531-3.609-.21z"/><path fill="#9268CA" d="M23.519 20.125c0 1.605.25 2.331.32 3.029.039.388-1.112-.255-1.978-.367-2.249-.289-5.165-1.089-5.165-1.089-.46-2.215.356-3.139-.372-6.109-.939-3.832 2.664-7.612 4.228-7.11 2.044.657 3.247 2.527 3.246 6.099-.001 2.473-.279 3.943-.279 5.547z"/><path fill="#292F33" d="M25.941 32.817l1.063-1.378c.354-.459 1.051-.443 1.383.032.363.518 1.508 1.7 3.206 2.314.264.096.725.291-.165 1.083 0 0-1.049.797-5.632-.453M8.486 36h5.01c.241 0 .437-.195.437-.437v-.413c0-.453-.138-.895-.396-1.267l-.384-.553h-1.935l-1.892.523c-.77.213-1.296.923-1.276 1.722.006.236.2.425.436.425z"/><path fill="#2A6797" d="M17.334 25.673l-.311 7.139s-.156 2.997 3.036 2.939l6.85-.837s.506-1.751-.35-2.51l-4.938-.592c-.137-.016-.228-.149-.194-.283l1.581-5.127c.201-.653.548-2.062.603-2.737.034-.415-.196-.091-.185-.51l-6.403 1.84.311.678z"/><path fill="#4289C1" d="M19.207 21.365c-1.873-.051-7.335.631-7.335.631-2.68.63-2.036 4.541-2.036 4.541l.525 6.917s1.67.954 3.053 0l.93-6.917 4.07.048s6.832 1.36 5.163-5.257c0 0-3.989.047-4.37.037z"/><path fill="#D4AB88" d="M18.587 13.062c-.282 1.934-.185 5.121-.478 5.274-1.692.884-4.111 2.144-5.227 2.59-.809.323-1.622.524-1.961.85-.544.523-1.199.977-1.235 1.485-.037.516.562.675 1.574.199.743-.35 1.339-.332 1.995-.851.934-.739 5.782-.697 7.143-2.909.459-.747.764-2.806 1.31-6.387-.917-.331-3.121-.251-3.121-.251z"/></svg>
  )
}

export default WomanKneelingMediumSkinTone
