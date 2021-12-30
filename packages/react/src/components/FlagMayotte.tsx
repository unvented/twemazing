import React from 'react'

const FlagMayotte = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EEE" d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z"/><path d="M8.775 8.131h.557l.825 2.426.819-2.426h.553V11h-.371V9.307c0-.059.001-.156.004-.291s.004-.281.004-.436l-.82 2.42h-.385l-.827-2.42v.088c0 .07.002.177.006.321s.006.25.006.317V11h-.371V8.131zm4.579 0h.438L14.834 11h-.426l-.299-.859h-1.126l-.311.859h-.398l1.08-2.869zm.645 1.693l-.442-1.268-.459 1.268h.901zm.669-1.693h.453l.825 1.379.825-1.379h.457l-1.086 1.713V11h-.389V9.844l-1.085-1.713zm5.253.41c.189.254.285.579.285.975 0 .428-.109.785-.326 1.068-.256.333-.619.5-1.092.5-.441 0-.789-.146-1.041-.438-.225-.281-.338-.637-.338-1.066 0-.388.096-.72.289-.996.248-.354.613-.531 1.098-.531.506 0 .881.162 1.125.488zm-.343 1.829c.152-.246.229-.528.229-.847 0-.337-.089-.609-.265-.815-.177-.206-.418-.309-.724-.309-.297 0-.539.102-.727.306-.188.204-.281.504-.281.902 0 .318.081.586.241.804s.421.328.782.328c.344-.001.592-.124.745-.369zm3.177-2.239v.342h-.967V11h-.393V8.473h-.967v-.342h2.327zm2.602 0v.342h-.967V11h-.393V8.473h-.967v-.342h2.327zm.635 0h2.082v.352h-1.703v.871h1.574v.332h-1.574v.973h1.732V11h-2.111V8.131z" fill="#D42E11"/><path fill="#231F20" d="M18 24.91c-.069 0-.125-.056-.125-.124v-.001c0-.035-.015-.875-.875-.875h-2c-1.105 0-1.847-.854-1.847-2.125v-8.449c0-.069.056-.125.125-.125h9.423c.069 0 .125.056.125.125v8.449c0 1.271-.733 2.125-1.826 2.125h-2c-.86 0-.875.84-.875.875v.001c0 .068-.056.124-.125.124z"/><path fill="#EEE" d="M13.403 13.461v8.324c0 .934.494 1.875 1.597 1.875h2c.552 0 .852.283 1 .591.148-.308.448-.591 1-.591h2c.957 0 1.576-.736 1.576-1.875v-8.324h-9.173z"/><path fill="#269" d="M20.5 16.525c0 .538-.448.975-1 .975-.553 0-1.001-.437-1.001-.975s.448-.975 1.001-.975c.552.001 1 .437 1 .975z"/><path fill="#269" d="M20.5 18.025c0 .538-.448.975-1 .975-.553 0-1.001-.437-1.001-.975s.448-.975 1.001-.975c.552.001 1 .437 1 .975z"/><path fill="#269" d="M19 16.525c0 .538-.448.975-1 .975-.553 0-1.001-.437-1.001-.975s.448-.975 1.001-.975c.552.001 1 .437 1 .975z"/><path fill="#269" d="M19 18.025c0 .538-.448.975-1 .975-.553 0-1.001-.437-1.001-.975s.448-.975 1.001-.975c.552.001 1 .437 1 .975z"/><path fill="#269" d="M17.5 16.525c0 .538-.448.975-1 .975-.553 0-1.001-.437-1.001-.975s.448-.975 1.001-.975c.552.001 1 .437 1 .975z"/><path fill="#269" d="M17.5 18.025c0 .538-.448.975-1 .975-.553 0-1.001-.437-1.001-.975s.448-.975 1.001-.975c.552.001 1 .437 1 .975z"/><path fill="#171796" d="M22 16.525c0-.308-.156-.571-.386-.75.23-.178.386-.441.386-.75 0-.538-.448-.975-1-.975-.294 0-.552.128-.735.325-.183-.223-.451-.375-.765-.375-.305 0-.568.142-.752.354-.183-.212-.445-.354-.748-.354-.304 0-.567.143-.75.357-.184-.214-.447-.357-.75-.357-.304 0-.567.143-.75.357-.184-.214-.446-.357-.75-.357-.553 0-1 .448-1 1 0 .304.143.566.356.75-.213.184-.356.446-.356.75s.143.566.356.75c-.213.184-.356.446-.356.75 0 .552.447 1.25 1 1.25h6c.552 0 1-.562 1-1.1 0-.308-.156-.634-.386-.812.23-.179.386-.504.386-.813z"/><path fill="#D42E11" d="M22 19.025c0-.194-.06-.374-.16-.525h-7.681c-.1.152-.16.331-.16.525 0 .304.146.571.369.75-.224.179-.369.446-.369.75s.146.571.369.75c-.224.179-.369.446-.369.75 0 .538.448.975 1.001.975.3 0 .566-.132.75-.336.183.204.449.336.75.336.3 0 .566-.132.75-.336.183.204.449.336.75.336.3 0 .566-.132.75-.336.183.204.449.336.75.336.3 0 .566-.132.75-.336.183.204.449.336.75.336.552 0 1-.437 1-.975 0-.304-.146-.571-.369-.75.223-.178.369-.446.369-.75s-.146-.571-.369-.75c.223-.178.369-.446.369-.75z"/><path fill="#EEE" d="M18 17c-.931 0-1.706-.639-1.93-1.5-.041.161-.07.326-.07.5 0 1.104.896 2 2 2s2-.896 2-2c0-.174-.029-.339-.071-.5-.223.861-.998 1.5-1.929 1.5z"/><path fill="#FFAC33" d="M16.869 20.627c-.101-.058-.196-.098-.286-.127.089-.029.185-.069.286-.127.287-.165.475-.377.42-.473-.056-.096-.333-.039-.62.127-.101.058-.182.121-.252.184.019-.092.033-.194.033-.311 0-.332-.089-.601-.2-.601-.111 0-.2.269-.2.601 0 .116.014.219.033.311-.07-.062-.152-.126-.253-.184-.287-.166-.564-.223-.62-.127-.055.096.132.307.42.473.101.058.196.098.285.127-.089.029-.185.069-.285.127-.288.166-.476.378-.42.473.055.096.333.039.62-.127.101-.058.183-.121.253-.184-.019.092-.033.194-.033.311 0 .332.089.601.2.601.11 0 .2-.269.2-.601 0-.116-.014-.219-.033-.31.07.063.152.126.253.184.287.165.564.222.62.126.054-.096-.134-.308-.421-.473zm3.5 0c-.101-.058-.196-.098-.285-.127.089-.029.185-.069.285-.127.287-.165.475-.377.42-.473-.056-.096-.333-.039-.62.127-.1.058-.182.121-.252.183.019-.092.033-.194.033-.31 0-.332-.09-.601-.2-.601s-.2.269-.2.601c0 .116.014.219.033.311-.07-.063-.152-.126-.253-.184-.287-.166-.564-.223-.62-.127-.055.096.133.307.42.473.101.058.197.098.286.127-.089.029-.185.069-.286.127-.287.166-.475.378-.42.473.056.096.333.039.62-.127.101-.058.183-.121.253-.184-.019.092-.033.194-.033.311 0 .332.09.601.2.601s.2-.269.2-.601c0-.116-.014-.218-.033-.31.07.062.151.126.252.184.287.165.565.222.62.126.056-.096-.133-.308-.42-.473z"/><path fill="#CCD6DD" d="M9.181 28.658s2.397-1.298 3.167-1.473c.771-.177 1.65-.198 1.299.329-.353.527.065 1.166-.484 1.1s-1.804.506-2.266.705c-.462.197-1.145.55-1.145.55l-.571-1.211z"/><path fill="#66757F" d="M13.998 27.845c-.132-.33-.306-.659-.306-.659s-.085.2-.387.337c-.262.119-.521.33-.451.477.097.204 1.144-.155 1.144-.155z"/><path fill="#CCD6DD" d="M27.154 28.658s-2.398-1.298-3.169-1.473c-.769-.177-1.649-.198-1.298.329.354.527-.065 1.166.485 1.1.551-.066 1.803.506 2.266.705.462.197 1.145.55 1.145.55l.571-1.211z"/><path fill="#66757F" d="M22.336 27.845c.132-.33.306-.659.306-.659s.086.2.388.337c.262.119.521.33.45.477-.096.204-1.144-.155-1.144-.155z"/><path fill="#CCD6DD" d="M21.963 27.339c-.595-.198-2.222-.309-2.751-.309h-2.089c-.528 0-2.155.11-2.75.309-.594.198-1.108.672-1.518.66.03.125.065.285.22.77.153.484.572.462 1.056.221.484-.243 1.189-.396 1.849-.396h4.377c.661 0 1.365.153 1.849.396.483.241.902.264 1.057-.221.153-.484.188-.645.219-.77-.413.012-.926-.462-1.519-.66z"/><path fill="#99AAB5" d="M15.585 27.5h1.73v.819h-1.73zm2.593 0h2.949v.819h-2.949z"/><path fill="#CCD6DD" d="M6.464 12.875l.99.25.833-.667s1-.375 1.542-.083c.541.292.083.25-.417.375s-.606.622-.479.812c.188.281.759.304.688-.125-.031-.188.792.229.708.688l-.083.458s-.042 1.042.625 1.25.594.833-.031.792-1.677-.833-1.677-.833-.542.375-.667.125c0 0-1.292-.292-1.125-1.458 0 0-.406 1.292.406 1.729 1.17.63 1.316.196 2.302.979 1.167.927 2.083 2.646 1.792 5.021s-.958 3.969-3.625 3.969c-1.562 0-2.406-1.167-2.406-2.312C5.839 22.698 6.87 22 7.526 22c.781 0 1.031.75.938.938-.314.628-.615.194-.375-.094.156-.188-.157-.484-.531-.469-.75.031-1.156.76-1.156 1.469 0 .709.802 1.781 1.802 1.781s2.125-.916 2.125-2.333-.584-2.333-1.542-3.125l-.479.927s-1.833-.261-2.875-1.344c-1.042-1.083-.941-2.463-.75-2.312.438.344 1.479.396 1.479.396s-.416-.875-.708-1.042c-.292-.167-.886-1.063-.427-2.104.458-1.042 1.136-1.354 1.302-1.021.166.333.604.104.479-.229s-.344-.563-.344-.563z"/><path fill="#99AAB5" d="M5.933 17.406c.594.812 1.281 1.875 2.281 2.406 1 .531 2.156 1.906 2.156 3.281s-.927 2.531-2.166 2.531c-1.24 0-1.833-1.156-1.833-1.906s.656-1.156.656-1.156-.719.156-.875 1.094c-.139.832.656 2.188 1.969 2.188 1.937 0 2.656-1.312 2.656-2.75s-1.25-3-2.094-3.844c-.844-.844-2-1.812-2.531-2.375s-.219.531-.219.531z"/><path fill="#CCD6DD" d="M29.479 12.875l-.989.25-.834-.667s-1-.375-1.541-.083c-.542.292-.084.25.416.375s.607.622.479.812c-.188.281-.759.304-.688-.125.031-.188-.792.229-.708.688l.083.458s.042 1.042-.625 1.25-.594.833.031.792 1.677-.833 1.677-.833.542.375.667.125c0 0 1.292-.292 1.125-1.458 0 0 .406 1.292-.406 1.729-1.171.63-1.315.196-2.302.979-1.167.927-2.084 2.646-1.792 5.021s.958 3.969 3.625 3.969c1.562 0 2.406-1.167 2.406-2.312 0-1.146-1.031-1.844-1.688-1.844-.781 0-1.031.75-.938.938.313.628.615.194.375-.094-.156-.188.157-.484.531-.469.75.031 1.156.76 1.156 1.469 0 .709-.802 1.781-1.802 1.781s-2.125-.916-2.125-2.333.584-2.333 1.541-3.125l.479.927s1.833-.261 2.875-1.344.94-2.463.75-2.312c-.438.344-1.479.396-1.479.396s.416-.875.709-1.042c.291-.167.885-1.063.427-2.104s-1.136-1.354-1.302-1.021c-.167.333-.604.104-.479-.229s.346-.564.346-.564z"/><path fill="#99AAB5" d="M30.01 17.406c-.594.812-1.281 1.875-2.281 2.406-1 .531-2.156 1.906-2.156 3.281s.927 2.531 2.167 2.531c1.239 0 1.833-1.156 1.833-1.906s-.656-1.156-.656-1.156.719.156.875 1.094c.139.832-.656 2.188-1.969 2.188-1.938 0-2.656-1.312-2.656-2.75s1.25-3 2.094-3.844c.844-.844 2-1.812 2.531-2.375.53-.563.218.531.218.531z"/></svg>
  )
}

export default FlagMayotte
