import React from 'react'

const FlagAndorra = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D01C3A" d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z"/><path fill="#0020A8" d="M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z"/><path fill="#FEDF00" d="M12 5h12v26H12z"/><path fill="#C7B37F" d="M23.035 19.641c-.159-.472-.563-.382-.563-.225 0 0-.539-.39-.135-1.104 0 0 .786.093.337-.514 0 0 .674-.382.696-1.168.022-.787-.876-1.281-1.258-.967 0 0-.023-.314-.18-.314s-.247.202-.247.202.023-.517.359-.809c.337-.292 1.033-1.079-.428-1.528-1.46-.449-1.527.473-1.303.675 0 0-.359.201-.764.179-.404-.021-.113-.493-.023-.696.09-.202.023-.921-.473-.898-.494.022-.517.225-.696.292-.177.066-.357.021-.357.021s-.18.045-.36-.023c-.179-.067-.202-.269-.696-.292-.495-.023-.562.696-.472.898.09.203.382.675-.023.696-.404.022-.764-.179-.764-.179.225-.202.157-1.124-1.303-.675-1.46.449-.764 1.236-.427 1.528.337.292.36.809.36.809s-.09-.202-.248-.202c-.157 0-.179.314-.179.314-.382-.314-1.281.18-1.259.967.023.786.697 1.168.697 1.168-.45.606.337.514.337.514.404.715-.135 1.104-.135 1.104 0-.157-.404-.247-.564.225-.159.472.316.629.316.629-.629.81-.225 1.573.382 2.022.607.449 1.775.383 2.359.427.584.045.697.337.697.337-.449.428.225.765.225.765.135.449.674-.045.674-.045l.383.338.382-.337s.54.494.674.045c0 0 .675-.337.225-.765 0 0 .113-.292.697-.337.584-.044 1.753.022 2.359-.427.606-.449 1.011-1.213.382-2.022 0 .001.475-.157.316-.628z"/><path fill="#D01C3A" d="M17.82 17.641v-2.966h-2.966v2.966h2.966z"/><path fill="#FEDF00" d="M15.933 16.506l-.882.91.138.157.744-.82zm1.449-1.157s.391.102.391-.247-.234-.349-.312-.349c-.079 0-.438.057-.45.202-.011.146.141.236.059.315-.081.078-.302.273-.302.273l.131.156s.188-.156.337-.373c.076-.11.018-.378.09-.394.213-.044.292.057.281.136-.011.078-.146.157-.146.157l-.079.124z"/><path fill="#FFF" d="M16.652 16.91s.056.416.258.438c.202.022.27-.646.601-.646.332 0 .365.579 0 .669l-.05-.168s.236-.236.067-.271c-.168-.033-.247.18-.269.271-.023.09-.158.325-.36.325-.337 0-.382-.309-.433-.547-.05-.239.186-.071.186-.071zm-.6 0s-.056.416-.259.438c-.202.022-.27-.646-.601-.646-.332 0-.366.579 0 .669l.05-.168s-.236-.236-.067-.271c.168-.033.247.18.269.271.023.09.157.325.359.325.337 0 .382-.309.433-.547.052-.239-.184-.071-.184-.071z"/><path fill="#FFF" d="M16.394 14.798l.865 1.101-.433 1.18s-.174-.102-.433-.102-.461.102-.461.102l-.46-1.191.922-1.09z"/><path fill="#FEDF00" d="M16.466 15.18l.604.725-.306.927-.292-.09zm-.199 0l-.604.725.306.927.292-.09zm-1.413 2.73v1.843c0 1.214.886 1.381 1.648 1.214.614-.136 1.318 0 1.318 0V17.91h-2.966z"/><path d="M16.502 20.967l.06-.012V17.91h-.45v3.108c.131-.005.262-.024.39-.051zm.959-.046V17.91h-.45v2.998c.165-.005.32.002.45.013zm-1.798.058V17.91h-.449v2.841c.127.115.282.189.449.228z" fill="#D01C3A"/><path fill="#FEDF00" d="M18.18 17.641v-2.966h2.966v2.966H18.18z"/><path fill="#D01C3A" d="M18.539 14.675h.45v2.966h-.45zm.899 0h.45v2.966h-.45zm.899 0h.449v2.966h-.449z"/><path fill="#FEDF00" d="M21.146 17.91v1.843c0 1.214-.886 1.381-1.648 1.214-.614-.136-1.318 0-1.318 0V17.91h2.966z"/><path fill="#D01C3A" d="M18.629 18.404l.281-.225h.348v.181s.495-.008.899-.049c.404-.042.528.262.404.34-.123.079.022.383 0 .528-.022.146-.292.359-.225.236.067-.124 0-.461 0-.461s-.078.259-.146.337c-.068.079-.304.09-.214.023s.18-.213.101-.292c-.078-.078-.431-.09-.446-.056-.014.033-.081.426-.126.449-.046.022-.102-.034-.068-.157.034-.124 0-.337 0-.337s-.235-.012-.225.09c.012.101.113.146.091.225-.023.078-.169.18-.18.045-.012-.135-.236-.225-.135-.292.101-.067.203-.173.203-.173s-.127-.029-.216-.153c-.09-.123-.166-.112-.346-.112-.09 0 0-.147 0-.147zm0 1.349l.281-.225h.348v.18s.495-.007.899-.049c.404-.041.528.262.404.341-.123.079.022.382 0 .528-.022.146-.292.358-.225.236.067-.124 0-.461 0-.461s-.078.258-.146.337c-.068.079-.304.09-.214.022.09-.067.18-.214.101-.292-.078-.078-.431-.09-.446-.057-.014.034-.081.427-.126.45-.046.021-.102-.034-.068-.158.034-.123 0-.337 0-.337s-.235-.011-.225.09c.012.101.113.146.091.225-.023.079-.169.181-.18.045-.012-.134-.236-.225-.135-.292.101-.067.203-.173.203-.173s-.127-.029-.216-.152c-.09-.124-.166-.112-.346-.112-.09 0 0-.146 0-.146z"/><path fill="#AF9167" d="M14.629 21.191c0 .033 1.652.482 1.837.517.186.033.118.415-.129.393-.247-.021-1.472-.291-1.629-.37-.157-.08-.079-.54-.079-.54zm2.27.556s.495.067.921.085c.427.017.719-.02.719-.02l.304.412s-.528.057-.888.057c-.359 0-.944-.057-.944-.057l-.112-.477zm2.157 0s.708-.129 1.136-.231c.427-.101.988-.303 1.135-.325.146-.023.247.241.291.277l.045.037s-.741.348-1.101.449c-.359.102-1.506.259-1.506.259s-.164-.436 0-.466z"/></svg>
  )
}

export default FlagAndorra
