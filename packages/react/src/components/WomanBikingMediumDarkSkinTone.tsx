import React from 'react'

const WomanBikingMediumDarkSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#AF7E57" d="M12.375 6.333C11.375 7.333 13 7 14 9c1 2 4 1 3-1-.211-.423-1.044-1.096-1.731-1.604 0 0 .586-.687.273-1.416s-3.167 1.353-3.167 1.353z"/><path fill="#AF7E57" d="M11.978 2.296c-1.54.04-2.756 1.32-2.717 2.86.04 1.54 1.32 2.756 2.86 2.717 1.54-.04 2.756-1.32 2.717-2.86-.039-1.541-1.32-2.757-2.86-2.717z"/><path fill="#60352A" d="M19.953 3.854c-.855.237-1.891.562-3.461-.583-1.121-.818-2.167-1.09-4.369-.608-2.338.512-3.981 2.234-2.32 2.709.725.207 1.247-.07 2.341-.184 1.605-.167 2.257 1.189 3.814 1.188 3.046-.004 5.271-2.876 3.995-2.522z"/><path fill="#9B6A49" d="M19 16s-3 2-3 3 4 4 5 5 3 1 2-1-4-7-4-7z"/><path fill="#A0041E" d="M20.634 23.021s1.173.789 1.962-.385c.789-1.174 1.365 1.771 1.365 1.771s-2.559 2.539-4.521 2.924c-1.962.385-1.173-.789-.385-1.962l1.579-2.348z"/><path fill="#292F33" d="M7 22c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.133-7-7-7zm0 12c-2.761 0-5-2.238-5-5s2.239-5 5-5 5 2.238 5 5-2.238 5-5 5zm22-12c-3.865 0-7 3.134-7 7s3.135 7 7 7c3.867 0 7-3.134 7-7s-3.133-7-7-7zm0 12c-2.761 0-5-2.238-5-5s2.239-5 5-5c2.762 0 5 2.238 5 5s-2.238 5-5 5z"/><g fill="#AAB8C2"><path d="M22 20c0-.553-.484-1-1.083-1H10.083C9.485 19 9 19.447 9 20c0 .553.485 1 1.083 1h10.833c.6 0 1.084-.447 1.084-1zm8 9c0-.553-.447-1-1-1H18c-.552 0-1 .447-1 1 0 .553.448 1 1 1h11c.553 0 1-.447 1-1z"/><path d="M21.224 17l-4.166 11.664c-.185.519.086 1.092.606 1.277.111.04.224.059.336.059.411 0 .796-.255.942-.664L23.348 17h-2.124z"/><path d="M29.001 30c-.33 0-.654-.164-.845-.463l-7-11c-.297-.466-.159-1.084.307-1.381.467-.297 1.084-.159 1.381.307l7 11c.297.466.159 1.084-.307 1.381-.167.105-.352.156-.536.156zM19 25.734l-8.387-6.524c-.435-.34-1.063-.26-1.403.176-.339.437-.26 1.064.176 1.403l9 7c.182.143.398.211.613.211H19v-2.266z"/><path d="M7 30c-.104 0-.211-.017-.316-.052-.524-.174-.807-.74-.632-1.265l2.772-8.316-3.423-2.568c-.442-.331-.531-.958-.2-1.4.331-.44.957-.531 1.4-.2l4.577 3.433-3.228 9.684c-.141.419-.532.684-.95.684z"/></g><path fill="#292F33" d="M26.383 19c-.03 0-.059-.002-.089-.006l-5.672-.708c-.372-.046-.644-.374-.62-.748.023-.374.333-.665.707-.665.041 0 4.067-.018 5.989-1.299.25-.167.582-.157.824.026.239.185.337.501.241.788l-.709 2.127c-.096.293-.369.485-.671.485zM11 18H6c-.552 0-1-.448-1-1s.448-1 1-1h5c.552 0 1 .448 1 1s-.448 1-1 1z"/><path fill="#A0041E" d="M21.999 13L18 16l3 3z"/><path fill="#AF7E57" d="M19.999 17s-2 3-2 4 1 4 1 7 2 3 2 2 1.581-5.419 0-7c-1-1 2-4 2-4l-3-2zm-4.314-3.703l-2.75-.784c-.447 1.956-3.023 4.486-3.935 4.486-1 0-2 0-2 1s0 1 2 1 4-2 5-3c.65-.65 1.309-1.757 1.685-2.702z"/><path fill="#BE1931" d="M21.999 13l-3 4 4 3s5-5 5-7-3-3-3-3l-3 3z"/><path fill="#DD2E44" d="M20.999 6.999c-3-1-5.585-.414-7 1-1 1-1 2-1 4 0 .176-.03.362-.073.55l2.744.784c.202-.509.33-.984.33-1.334 0-1 1-1 2 0s2 2 3 2 6-4 6-4c-3.001-1-4.103-2.368-6.001-3zM19 29s1 1 2 0 1 2 1 2-3 2-5 2-1-1 0-2l2-2zM11 2c2-1 6 0 4 2-1 1-7 2-7 2 0-1 1-3 3-4z"/></svg>
  )
}

export default WomanBikingMediumDarkSkinTone
