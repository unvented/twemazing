import React from 'react'

const ManInLotusPosition = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#4289C1" d="M28.632 30.563c-.178-1.426-1.568-1.931-2.257-1.931-.884 0-2.992 1.106-3.375-.585l-.037-.183-9.91-.012-.053.184c-.375 1.708-2.492.596-3.378.596-.689 0-2.079.505-2.257 1.931C7.365 30.563 14.13 33 18 33c3.873 0 10.632-2.437 10.632-2.437z"/><path fill="#FFDC5D" d="M12.497 16.024c-.674-.134-1.336 1.309-1.47 1.983L9.846 23.02c-1.619 1.166-1.57 3.454-2.808 4.512-.171.146-.949.766-1.203 1.325-.336.738.22.444.045.695-.406.584-.414 1.478-.127 1.686l.373.1c.557.403 2.081-1.336 2.281-2.302.3-1.443 3.075-3.25 3.589-4.653.006-.017.007-.029.013-.046.097-.138.169-.294.204-.469l1.266-6.375c.135-.674-.308-1.335-.982-1.469zm17.59 13.588c-.175-.251.437-.016.101-.754-.255-.56-1.089-1.179-1.259-1.325-1.246-1.064-1.133-3.377-2.781-4.535l-1.176-4.99c-.134-.674-.795-2.117-1.47-1.983-.674.134-1.116.795-.983 1.47l1.266 6.375c.038.191.125.355.236.501l.004.014c.513 1.402 3.289 3.209 3.589 4.653.201.967 1.725 2.706 2.281 2.302l.373-.1c.29-.21.226-1.044-.181-1.628z"/><path fill="#FFDC5D" d="M22.757 35.82c-1.04.089-2.02-.208-3 0-.475.03-.802 0-1.277-.416s-8.287-1.515-9.713-2.465c-.658-.439-1.662-1.54-1.396-2.465.263-.913 1.139-1.429 2.198-1.455 2.065-.051 6 2.941 8.851 4.04.518.2.948-.052 1.604.119.683.178 2.317-.555 3.149-.446 1.129.149 1.574.683 1.485 1.604-.094.974-.861 1.395-1.901 1.484z"/><path fill="#F9CA55" d="M22.757 35.82c-1.04.089-2.02-.208-3 0-.475.03-.802 0-1.277-.416s.889-2.399 1.545-2.228c.683.178 2.317-.555 3.149-.446 1.129.149 1.574.683 1.485 1.604-.095.976-.862 1.397-1.902 1.486zm-11.561-2.614c.238-.624 1.188-.891 1.634-.95s1.188.208 1.693.416c.505.208 1.118.234 1.504.085.386-.149.668-.124.958 0 .078.033.423 0 .546-.067 0 0 1.79.616 1.136.824-.653.208-5.421.524-6.074.524s-1.397-.832-1.397-.832z"/><path fill="#F9CA55" d="M7.371 30.474c.006-.02.016-.037.022-.056.201.762.76 1.66 1.401 1.898.802.297 7.247 2.198 8.049 2.287.802.089 1.99.208 2.228.386.238.178.861.238 1.366.119.505-.119 1.782.356 2.436.208.653-.148 1.604-.445 1.782-1.247.003-.015.007-.022.011-.034.004.096.003.195-.007.302-.094.975-.861 1.396-1.901 1.485s-2.02-.208-3 0c-.475.03-.802 0-1.277-.416-.475-.416-8.287-1.515-9.713-2.465-.659-.441-1.663-1.543-1.397-2.467z"/><path fill="#FFDC5D" d="M13.243 35.82c1.04.089 2.02-.208 3 0 .475.03.802 0 1.277-.416s8.287-1.515 9.713-2.465c.658-.439 1.662-1.54 1.396-2.465-.263-.913-1.139-1.429-2.198-1.455-2.065-.051-6 2.941-8.851 4.04-.518.2-.948-.052-1.604.119-.683.178-2.317-.555-3.149-.446-1.129.149-1.574.683-1.485 1.604.094.974.861 1.395 1.901 1.484z"/><path fill="#77B255" d="M22.543 15h-9.06c-2.562 0-2.943 4.394-2.943 4.394l2.458.535s.31 3.589.271 5.27c-.038 1.682-.27 2.801-.27 2.801s1.912.394 5 .394 5-.394 5-.394-.349-1.606-.349-2.978.349-5.093.349-5.093l2.458-.535S25.105 15 22.543 15z"/><path fill="#FFDC5D" d="M15.667 10.389v4.666c0 .312.553 1.488 2.333 1.488 1.781 0 2.333-1.214 2.333-1.488v-4.666h-4.666z"/><path fill="#F9CA55" d="M20.333 9.774l-4.666.022v4.644s2.333 1.167 4.666 0V9.774z"/><path fill="#FFDC5D" d="M22.954 3.966h-9.908v5.433c0 2.737 2.218 4.954 4.954 4.954 2.736 0 4.954-2.217 4.954-4.954V3.966z"/><path fill="#C1694F" d="M19.982 12.057h-3.964s0 .991 1.982.991 1.982-.991 1.982-.991zM16.25 8.75h-1.5c-.137 0-.25-.113-.25-.25s.113-.25.25-.25h1.5c.138 0 .25.113.25.25s-.112.25-.25.25zm5 0h-1.5c-.138 0-.25-.113-.25-.25s.112-.25.25-.25h1.5c.138 0 .25.113.25.25s-.112.25-.25.25zm-4.241 1.326h1.982s0 .991-.991.991-.991-.991-.991-.991z"/><path fill="#FFAC33" d="M18 .953c3.385 0 5.5 2.579 5.5 4.728 0 2.149-.423 3.009-.846 2.149l-.846-1.719s-2.538 0-3.384-.86c0 0 1.269 2.579-1.269 0 0 0 .423 1.72-2.115-.429 0 0-1.269.86-1.692 3.008-.117.597-.846 0-.846-2.149C12.5 3.532 14.192.953 18 .953"/></svg>
  )
}

export default ManInLotusPosition
