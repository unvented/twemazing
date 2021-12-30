import React from 'react'

const Accordion = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFE8B6" d="M17.483 30.971c-.574.051-1.099-.36-1.168-.93L13.427 5.136c-.069-.57.676-1.133 1.657-1.22.981-.087 1.811.336 1.844.909l1.541 25.024c.031.574-.412 1.07-.986 1.122zm4.199-.146c-.574-.011-1.051-.476-1.058-1.051l-.192-25.071c-.007-.574.791-1.054 1.773-1.034.982.019 1.76.528 1.731 1.102l-1.157 25.045c-.029.574-.522 1.02-1.097 1.009zm4.185.306c-.57-.073-.993-.586-.939-1.158l2.501-24.947c.054-.572.899-.963 1.873-.838.974.124 1.694.714 1.603 1.281l-3.839 24.776c-.091.568-.629.959-1.199.886z"/><path fill="#D99E82" d="M19.582 30.841c-.575.02-1.076-.419-1.114-.992L16.927 4.825c-.038-.573.734-1.095 1.717-1.128.983-.034 1.788.433 1.789 1.007l.192 25.071c.001.574-.468 1.046-1.043 1.066zm4.197.081c-.573-.042-1.023-.532-.999-1.106l1.157-25.045c.024-.574.846-1.01 1.825-.938.979.071 1.729.622 1.669 1.193L24.93 29.973c-.062.572-.579.991-1.151.949z"/><path fill="#BE1931" d="M29.781 31.803l-1.033-.159c-1.136-.175-1.922-1.247-1.747-2.383l3.495-22.715c.175-1.136 1.247-1.922 2.383-1.747l1.033.159c1.136.175 1.922 1.247 1.747 2.383l-3.495 22.715c-.175 1.136-1.248 1.922-2.383 1.747z"/><circle fill="#F5F8FA" cx="33.276" cy="9.088" r="1.045"/><circle fill="#F5F8FA" cx="33.276" cy="9.088" r="1.045"/><circle fill="#F5F8FA" cx="32.799" cy="12.186" r="1.045"/><circle fill="#F5F8FA" cx="32.322" cy="15.283" r="1.045"/><circle fill="#F5F8FA" cx="31.846" cy="18.381" r="1.045"/><circle fill="#F5F8FA" cx="31.369" cy="21.478" r="1.045"/><circle fill="#F5F8FA" cx="30.893" cy="24.576" r="1.045"/><circle fill="#F5F8FA" cx="30.416" cy="27.673" r="1.045"/><path fill="#BE1931" d="M14.591 31.252L5.25 32.318c-1.142.13-2.182-.697-2.313-1.839L.331 7.645c-.13-1.142.697-2.183 1.839-2.313l9.341-1.066c1.142-.13 2.182.697 2.313 1.839l2.606 22.834c.13 1.142-.697 2.183-1.839 2.313z"/><path fill="#F5F8FA" d="M7.891 7.833l-5.542.633c-.474.054-.906-.29-.96-.764l-.04-.352c-.054-.474.29-.906.764-.96l5.541-.632c.474-.054.906.29.96.764l.04.352c.054.473-.289.905-.763.959zm.355 3.114l-5.541.633c-.474.054-.906-.29-.96-.764l-.04-.352c-.055-.474.289-.906.763-.96l5.541-.632c.474-.054.906.29.96.764l.04.352c.055.473-.289.905-.763.959zm.355 3.114l-5.541.632c-.474.054-.906-.29-.96-.764l-.04-.352c-.054-.474.29-.906.764-.96l5.541-.632c.474-.054.906.29.96.764l.04.352c.054.474-.289.906-.764.96zm.356 3.114l-5.541.632c-.474.054-.906-.29-.96-.764l-.04-.352c-.054-.474.29-.906.764-.96l5.541-.632c.474-.054.906.29.96.764l.04.352c.054.473-.29.906-.764.96zm.355 3.113l-5.541.632c-.474.054-.906-.29-.96-.764l-.04-.352c-.054-.474.29-.906.764-.96l5.541-.632c.474-.054.906.29.96.764l.04.352c.054.474-.29.906-.764.96zm.355 3.114l-5.541.632c-.474.054-.906-.29-.96-.764l-.04-.352c-.054-.474.29-.906.764-.96l5.541-.632c.474-.054.906.29.96.764l.04.352c.054.474-.289.906-.764.96zm.356 3.114l-5.541.632c-.474.054-.906-.29-.96-.764l-.04-.352c-.054-.474.29-.906.764-.96l5.541-.632c.474-.054.906.29.96.764l.04.352c.054.474-.29.906-.764.96zm.355 3.114l-5.541.632c-.474.054-.906-.29-.96-.764l-.04-.352c-.054-.474.29-.906.764-.96l5.541-.632c.474-.054.906.29.96.764l.04.352c.054.473-.29.906-.764.96z"/><path fill="#292F33" d="M5.582 9.148l2.427-.277c.474-.054.818-.486.764-.96l-.04-.352c-.054-.474-.486-.818-.96-.764l-2.428.277c-.474.054-.818.486-.764.96l.04.352c.054.475.486.818.961.764zm.355 3.114l2.427-.277c.474-.054.818-.486.764-.96l-.04-.352c-.054-.474-.486-.818-.96-.764l-2.428.277c-.474.054-.818.486-.764.96l.04.352c.055.475.487.818.961.764zm.711 6.228l2.427-.277c.474-.054.818-.486.764-.96l-.04-.353c-.054-.474-.486-.818-.96-.764l-2.427.277c-.474.054-.818.486-.764.96l.04.352c.053.475.486.819.96.765zm.355 3.113l2.427-.277c.474-.054.818-.486.764-.96l-.04-.352c-.054-.474-.486-.818-.96-.764l-2.427.277c-.474.054-.818.486-.764.96l.04.352c.054.475.486.818.96.764zm.355 3.114l2.427-.277c.474-.054.818-.486.764-.96l-.04-.352c-.054-.474-.486-.818-.96-.764l-2.427.277c-.474.054-.818.486-.764.96l.04.352c.054.475.486.818.96.764zm.711 6.228l2.427-.277c.474-.054.818-.486.764-.96l-.04-.352c-.054-.474-.486-.818-.96-.764l-2.427.277c-.474.054-.818.486-.764.96l.04.352c.054.474.486.818.96.764z"/><path fill="#A0041E" d="M10.103 6.529l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.258c-.237.027-.409.243-.382.48l.02.176c.027.237.243.408.48.381zm.237 2.076l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.257c-.237.027-.409.244-.382.481l.02.176c.027.236.243.408.48.381zm.237 2.076l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.257c-.237.027-.409.243-.382.48l.02.176c.027.237.243.409.48.382zm.237 2.076l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.257c-.237.027-.409.243-.382.48l.02.176c.027.237.243.409.48.382zm.237 2.076l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.257c-.237.027-.409.243-.382.48l.02.176c.027.237.243.409.48.382zm.237 2.076l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.257c-.237.027-.409.243-.382.48l.02.176c.027.237.243.409.48.382zm.237 2.075l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.257c-.237.027-.409.243-.382.48l.02.176c.026.238.243.41.48.382zm.237 2.076l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.257c-.237.027-.409.243-.382.48l.02.176c.026.238.242.409.48.382zm.236 2.076l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.257c-.237.027-.409.243-.382.48l.02.176c.027.237.243.409.48.382zm.237 2.076l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.257c-.237.027-.409.243-.382.48l.02.176c.027.237.243.409.48.382zm.237 2.076l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.257c-.237.027-.409.243-.382.48l.02.176c.027.237.243.409.48.382zm.237 2.076l2.252-.257c.237-.027.409-.243.382-.48l-.02-.176c-.027-.237-.243-.409-.48-.382l-2.252.257c-.237.027-.409.243-.382.48l.02.176c.027.237.243.409.48.382z"/></svg>
  )
}

export default Accordion
