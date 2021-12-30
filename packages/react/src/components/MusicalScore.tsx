import React from 'react'

const MusicalScore = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#8899A6" d="M36 5V3H0v30h36v-2H6v-5h30v-2H6v-5h30v-2H6v-5h30v-2H6V5z"/><path fill="#31373D" d="M27.827 20.562c-.223-.646-.543-1.227-.947-1.723-.411-.513-.926-.928-1.529-1.232-.61-.31-1.259-.46-1.981-.46-.086 0-.208.009-.366.026l-.533-2.593c.613-.603 1.156-1.299 1.616-2.077.499-.847.885-1.77 1.145-2.741.269-.978.399-1.942.399-2.945 0-2.106-.542-3.94-1.627-5.475-.158-.196-.288-.343-.387-.431-.394-.355-.788-.412-1.704.266-.47.352-.883.86-1.224 1.506-.352.644-.608 1.366-.786 2.2-.185.826-.283 1.723-.292 2.684.041 1.352.234 2.701.576 4.013-.77.779-1.392 1.43-1.881 1.951-.521.569-1.038 1.222-1.539 1.943-.495.711-.91 1.493-1.233 2.324-.317.807-.497 1.693-.533 2.655.008.982.195 1.944.561 2.864.365.902.884 1.726 1.546 2.45.665.718 1.448 1.287 2.325 1.694 1.23.569 2.644.749 4.02.51.063.288.146.629.244 1.022.157.647.274 1.172.35 1.56.073.391.109.766.109 1.122 0 .541-.059.955-.197 1.301-.05.202-.185.412-.401.62-.233.227-.508.401-.839.533-.468.184-.922.231-1.289.181.195-.105.375-.241.537-.405.433-.443.652-.988.652-1.622 0-.447-.109-.875-.328-1.282-.215-.375-.508-.684-.886-.929-.378-.225-.778-.341-1.226-.341h-.006c-.512.034-.954.195-1.301.471-.36.266-.646.619-.852 1.051-.193.406-.307.847-.338 1.362.04 1.04.477 1.885 1.306 2.508.784.581 1.707.877 2.739.877.743 0 1.434-.164 2.053-.487.634-.326 1.148-.796 1.529-1.402.37-.602.559-1.291.559-2.046 0-.495-.043-.96-.129-1.419-.085-.458-.211-1.08-.384-1.869-.124-.535-.219-.987-.288-1.35.965-.428 1.712-1.049 2.226-1.85.576-.898.867-1.908.867-3-.001-.665-.112-1.342-.333-2.015zm-3.122 5.178l-1.047-5.149c.261.056.502.147.727.276.396.224.703.529.945.938.241.39.392.838.456 1.303 0 1.246-.354 2.115-1.081 2.632zM23.547 7.101c-.181.526-.43 1.057-.743 1.577-.307.517-.629.973-.959 1.359-.105.125-.202.231-.288.322-.078-.354-.128-.746-.149-1.165.016-.685.116-1.364.305-2.081.17-.661.408-1.259.695-1.756.305-.468.621-.705.944-.705.115 0 .196.028.259.087.07.071.119.208.15.454.03.133.047.303.047.494 0 .443-.088.918-.261 1.414zM18.602 18.58c.653-.943 1.452-1.837 2.431-2.718l.339 1.739c-.717.362-1.321.9-1.801 1.61-.552.82-.846 1.727-.872 2.717.017.913.309 1.736.871 2.451.566.708 1.294 1.181 2.169 1.4l.12.03.122-.029c.537-.127.594-.471.594-.613 0-.345-.224-.621-.579-.72-.367-.17-.637-.417-.82-.758-.202-.368-.309-.713-.309-.994 0-.476.17-.903.516-1.303.214-.242.432-.432.654-.572l1.093 5.508c-.382.081-.733.132-1.046.152-1.384-.045-2.518-.5-3.369-1.35-.434-.442-.747-.907-.958-1.423-.213-.516-.327-1.059-.342-1.584.029-1.27.429-2.463 1.187-3.543z"/></svg>
  )
}

export default MusicalScore
