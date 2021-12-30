import React from 'react'

const Mirror = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFAC33" d="M29 32H7c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h22c.55 0 1 .45 1 1v24c0 .55-.45 1-1 1z"/><path fill="#D99E82" d="M8 8h20v22H8z"/><path fill="#FFD983" d="M28 30H8L28 8z"/><path fill="#BBDDF5" d="M9 9h18v20H9z"/><path fill="#F5F8FA" d="M24.231 9L11.769 29H18l9-14.615V9z"/><path fill="#662113" d="M28 8H7V7h22zM8 30l-1 1V8h1z"/><path fill="#C1694F" d="M29 31H7l1-1h21zm0-24l-1 1v22h1z"/><path d="M26.294 5.31s-.163-.587-1.04-1.069c-.594-.327-1.604-.089-1.604-.089s-.323-.834-1.634-1.366C21.066 2.399 20 3 20 3c0-1-.977-2-2-2s-2 1-2 2c0 0-1.066-.601-2.016-.214-1.31.532-1.634 1.366-1.634 1.366s-1.01-.238-1.604.089c-.876.482-1.04 1.069-1.04 1.069S7.894 6 7 6h22c-.894 0-2.706-.69-2.706-.69zM7 32c.894 0 2.706.414 2.706.414s.163.352 1.04.642c.594.196 1.604.053 1.604.053s.323.5 1.634.82C14.934 34.16 16 33.8 16 33.8c0 .6.977 1.2 2 1.2s2-.6 2-1.2c0 0 1.066.36 2.016.129 1.31-.319 1.634-.82 1.634-.82s1.01.143 1.604-.053c.876-.289 1.04-.642 1.04-.642S28.106 32 29 32H7z" fill="#FFAC33"/><path d="M9.868 6.375H11c.207 0 .375-.168.375-.375 0-.317.092-.537.28-.673.551-.398 1.793-.115 2.227.029.114.038.238.018.335-.052.097-.069.156-.182.158-.301.002-.147.056-.628.625-.628.688 0 1.483.641 1.734.889l.001.001c.146.146.384.146.53 0 .144-.144.146-.376.007-.523l-.001-.001-.005-.005c-.405-.405-.347-1.037-.157-1.494.203-.495.587-.867.891-.867s.688.372.892.866c.19.457.248 1.089-.157 1.494l-.005.005-.001.001c-.14.147-.137.379.007.523.146.146.383.146.531 0v-.001c.25-.247 1.045-.888 1.733-.888.569 0 .622.481.625.625 0 .121.058.233.155.304.099.07.226.09.338.052.433-.143 1.674-.427 2.227-.029.188.136.28.356.28.673 0 .207.168.375.375.375h1.132c.207 0 .375-.168.375-.375s-.168-.375-.375-.375h-.79c-.09-.472-.341-.75-.559-.907-.718-.517-1.867-.34-2.489-.19-.156-.456-.55-.903-1.294-.903-.43 0-.852.151-1.211.342.005-.326-.062-.671-.204-1.013-.303-.732-.867-1.222-1.437-1.299-.046-.019-.096-.03-.148-.03s-.102.011-.148.031c-.57.077-1.135.567-1.438 1.299-.142.342-.208.687-.203 1.013-.36-.192-.781-.343-1.211-.343-.744 0-1.138.447-1.294.903-.623-.151-1.775-.326-2.489.19-.218.157-.469.435-.558.907h-.791c-.207 0-.375.168-.375.375s.168.375.375.375zm16.264 24.95H25c-.207 0-.405.222-.405.429-.333.283-1.708.214-2.533.076-.11-.018-.218-.007-.302.063-.084.071-.131.156-.131.267-.016.043-.163.165-.629.165-.896 0-1.823-.456-1.833-.461-.184-.091-.409-.018-.502.168-.093.186-.018.411.168.503.152.076.22.152.203.225-.052.223-.521.565-1.035.565s-.983-.343-1.035-.565c-.018-.072.051-.148.203-.225.186-.092.261-.317.168-.503-.093-.184-.318-.259-.502-.168-.009.005-.937.461-1.833.461-.466 0-.614-.122-.625-.125 0-.11-.048-.215-.133-.286-.083-.071-.194-.1-.304-.084-.823.139-2.198.208-2.563-.13 0-.207-.168-.375-.375-.375H9.868c-.207 0-.375.168-.375.375s.168.375.375.375h.848c.049.093.118.177.204.251.611.517 2.153.38 2.854.287.164.227.507.462 1.227.462.435 0 .864-.084 1.226-.187.002.015.006.029.009.044.146.619.955 1.143 1.765 1.143s1.619-.523 1.766-1.143l.009-.044c.361.103.791.187 1.226.187.72 0 1.062-.235 1.227-.462.699.094 2.243.23 2.854-.287.087-.074.155-.158.204-.251h.848c.207 0 .375-.168.375-.375s-.171-.375-.378-.375z" fill="#C1694F"/></svg>
  )
}

export default Mirror
