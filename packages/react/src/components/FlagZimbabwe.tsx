import React from 'react'

const FlagZimbabwe = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EEE" d="M10.154 12L1.833 5.637c-.176.114-.344.242-.5.381v.001C.515 6.752 0 7.816 0 9v18c0 1.184.515 2.248 1.333 2.981.156.14.324.267.501.382L18 18l-7.846-6z"/><path fill="#DE200F" d="M6.682 11.597l1.783 3.613 3.989.58-2.887 2.813.682 3.972-3.567-1.876-3.567 1.876.681-3.972L.91 15.79l3.988-.58z"/><path fill="#FFD200" d="M7.5 15.458c-.917-.75-1.292-1.292-1.958-2.333s-1.542-.917-1.917 0c-.583.125-.75.75-.75.75.958-.292 1.583.333 1.667 1.667s-.25 1.708-.833 2.875.083 1.458.083 1.458l.384 2.026h5.958l.825-3.568h.5c-.001 0-3.042-2.125-3.959-2.875z"/><path fill="#FFAC33" d="M5.812 16.531l-.344.236s.625 1.369 1.531 1.566 3.837.523 3.837.523l.121-.523s-3.031-.365-3.792-.49-1.353-1.312-1.353-1.312zm-.75 3.376s1.281-.106 1.938 0c.613.099 3.193.242 3.534.261l.113-.49c-.349-.056-3.075-.491-3.835-.536-.812-.048-1.624.346-1.75.765zm.657.968l.156 1.026h4.258l.182-.785c-2.073-.41-4.596-.241-4.596-.241z"/><path fill="#F15A29" d="M10.173 21.951H4.134l-.008-.04-.379-2.003c-.058-.032-.201-.132-.278-.345-.109-.3-.043-.693.194-1.169.088-.176.171-.334.247-.481.42-.806.651-1.25.582-2.369-.047-.746-.264-1.273-.627-1.525-.263-.182-.591-.214-.975-.097l-.086.026.023-.087c.007-.026.176-.638.762-.78.186-.438.494-.707.847-.739.407-.035.814.231 1.148.755.643 1.004 1.021 1.564 1.948 2.322.905.74 3.925 2.852 3.956 2.873l.13.091h-.619l-.826 3.568zm-5.956-.099h5.876l.825-3.568h.382c-.591-.415-3.032-2.132-3.832-2.787-.938-.768-1.32-1.332-1.968-2.345-.313-.491-.694-.744-1.055-.709-.322.029-.604.285-.774.701l-.01.024-.026.005c-.418.09-.612.458-.681.627.376-.094.701-.048.968.137.39.27.622.824.67 1.601.072 1.147-.164 1.6-.592 2.422-.076.146-.158.304-.246.479-.221.442-.287.817-.191 1.087.081.225.243.3.25.303l.024.011.005.025.375 1.987z"/><path fill="#319209" d="M35.873 8C35.429 6.275 33.864 5 32 5H4c-.798 0-1.542.234-2.166.636l-.001.001L4.923 8h30.95zm0 20c-.444 1.725-2.01 3-3.873 3H4c-.798 0-1.542-.234-2.166-.636l-.001-.001L4.923 28h30.95z"/><path fill="#FFD200" d="M4.923 8L18 18 4.923 28h30.95c.083-.321.127-.653.127-1V9c0-.343-.046-.682-.127-1 0-.002-30.95 0-30.95 0z"/><path fill="#DE200F" d="M10.154 12l5.231 4H36v-4zm0 12H36v-4H15.385z"/><path fill="#141414" d="M15.385 16L1.833 5.637c-.176.114-.344.242-.5.381v.001L17 18 1.333 29.981c.156.14.324.267.501.382L15.385 20H36v-4H15.385z"/></svg>
  )
}

export default FlagZimbabwe
