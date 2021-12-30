import React from 'react'

const Beetle = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><g fill="#3E721D"><path d="M10.2 14.938l-.057-.039c-.074-.055-7.361-5.588-4.567-12.735.201-.515.781-.768 1.295-.567.518.199.768.781.568 1.295-2.245 5.743 3.837 10.357 3.899 10.403.443.33.535.956.205 1.4-.317.423-.905.525-1.343.243zm14.777-.416l-.057-.039c-.074-.055-7.361-5.588-4.567-12.735.201-.515.781-.768 1.295-.567.518.199.768.781.568 1.295-2.245 5.743 3.837 10.357 3.899 10.403.443.33.535.956.205 1.4-.316.423-.905.525-1.343.243z"/><path d="M11.008 14.522l.057-.039c.074-.055 7.361-5.588 4.567-12.735-.201-.515-.781-.768-1.295-.567-.518.199-.768.781-.568 1.295 2.245 5.743-3.837 10.357-3.899 10.403-.443.33-.535.956-.205 1.4.316.423.905.525 1.343.243zm-9.147 7.85c-.139-.027-.275-.085-.397-.173-.446-.326-.544-.951-.219-1.398 4.404-6.039 12.313-5.463 12.648-5.436.549.05.958.527.914 1.077-.044.55-.526.96-1.076.917-.071-.006-7.135-.5-10.87 4.62-.236.325-.631.465-1 .393zm3.786 11.977c-.124.07-.264.115-.414.127-.551.043-1.032-.367-1.076-.918-.592-7.451 5.783-12.166 6.055-12.363.449-.319 1.07-.224 1.395.222.325.446.226 1.071-.219 1.397-.058.042-5.74 4.269-5.237 10.586.031.401-.177.764-.504.949zm20.11-19.411l.057-.039c.074-.055 7.361-5.588 4.567-12.735-.201-.515-.781-.769-1.295-.568-.518.199-.768.781-.568 1.295 2.245 5.743-3.837 10.357-3.899 10.403-.443.33-.535.956-.205 1.4.317.424.905.526 1.343.244z"/><path d="M34.096 22.372c.139-.027.275-.085.397-.173.446-.326.544-.951.219-1.398-4.404-6.039-12.313-5.463-12.648-5.436-.549.05-.958.527-.914 1.077.044.55.526.96 1.076.917.071-.006 7.135-.5 10.87 4.62.236.325.631.465 1 .393zM30.31 34.349c.124.07.264.115.414.127.551.043 1.032-.367 1.076-.918.592-7.451-5.783-12.166-6.055-12.363-.449-.319-1.07-.224-1.395.222-.325.446-.226 1.071.219 1.397.058.042 5.74 4.269 5.237 10.586-.031.401.177.764.504.949z"/></g><path fill="#77B255" d="M24.24 7.766C24.177 5.14 22.013 3 17.99 3c-3.937 0-6.187 2.14-6.25 4.766C9.03 9.551 7.259 12.662 7.259 17c0 7.159 4.804 16.923 10.731 16.923S28.721 24.159 28.721 17c-.001-4.338-1.772-7.45-4.481-9.234z"/><path fill="#5C913B" d="M8.969 10.603c-1.074 1.69-1.71 3.822-1.71 6.397 0 7.159 4.804 16.923 10.731 16.923S28.721 24.159 28.721 17c0-2.578-.636-4.711-1.712-6.401C24.602 10.204 21.602 10 18 10c-3.614 0-6.621.205-9.031.603z"/><path fill="#3E721D" d="M11.74 7.766s2.917-.767 6.382-.767 6.118.767 6.118.767S24.348 3 17.99 3s-6.25 4.766-6.25 4.766z"/><path fill="#77B255" d="M16.202 34.959c-5.756-.595-10.284-6.895-10.284-14.581 0-7.685 4.398-8.003 9.074-8.003 1.434 0 2.104.58 2.104 2.92v18.541c-.001 1.17-.599 1.155-.894 1.123zm3.398 0c5.756-.595 10.284-6.895 10.284-14.581 0-7.685-4.398-8.003-9.074-8.003-1.434 0-2.104.58-2.104 2.92v18.541c.001 1.17.599 1.155.894 1.123z"/><path fill="#5C913B" d="M14.915 33.38c-.33 0-.653-.163-.844-.462-5.907-9.252-3.183-19.831-2.853-21.007.149-.531.696-.845 1.233-.692.532.149.841.702.692 1.233-.306 1.087-2.826 10.871 2.612 19.39.297.466.161 1.084-.305 1.381-.164.106-.351.157-.535.157zm5.983 0c-.185 0-.37-.051-.537-.157-.466-.297-.602-.915-.305-1.381 4.418-6.92 3.721-15.444 2.612-19.39-.149-.532.161-1.084.692-1.233.533-.146 1.084.161 1.233.692.33 1.176 3.056 11.753-2.853 21.007-.188.299-.511.462-.842.462z"/><path fill="#5C913B" d="M10 10.832h16v3H10z"/><path d="M6.427 16.518c.446-1.381 1.439-2.842 2.606-3.676 1.082-.772 2.114-.741 1.804.668-.957 4.367-5.024 4.912-4.41 3.008zm6.46-2.918c.586-1.73 3.587-1.871 4.032.067.446 1.938-1.025 2.072-2.228 2.027-1.203-.045-2.294-.646-1.804-2.094zm16.459 2.918c-.446-1.381-1.439-2.842-2.606-3.676-1.082-.772-2.114-.741-1.804.668.957 4.367 5.024 4.912 4.41 3.008zM22.885 13.6c-.586-1.73-3.587-1.871-4.032.067-.446 1.938 1.025 2.072 2.228 2.027 1.203-.045 2.294-.646 1.804-2.094z" fill="#77B255"/></svg>
  )
}

export default Beetle
