import React from 'react'

const Snowman = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#E1E8ED" cx="18" cy="26" r="10"/><path fill="#E1E8ED" d="M12 11c0-3.314 2.686-6 6-6 3.313 0 6 2.686 6 6s-2.687 6-6 6c-3.314 0-6-2.686-6-6z"/><path fill="#414042" d="M23 6c0 1.104-.896 2-2 2h-6c-1.104 0-2-.896-2-2V2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v4z"/><path fill="#231F20" d="M25 7c0 .552-.447 1-1 1H12c-.552 0-1-.448-1-1s.448-1 1-1h12c.553 0 1 .448 1 1z"/><path fill="#DD2E44" d="M22.5 15h-9c-.829 0-1.5.671-1.5 1.5 0 .652.419 1.202 1 1.408V25c0 .553.448 1 1 1h1c.552 0 1-.447 1-1v-7h6.5c.828 0 1.5-.671 1.5-1.5s-.672-1.5-1.5-1.5z"/><path fill="#414042" d="M19 24c0 .553-.447 1-1 1-.552 0-1-.447-1-1 0-.553.448-1 1-1 .553 0 1 .447 1 1zm0 5c0 .553-.447 1-1 1-.552 0-1-.447-1-1 0-.553.448-1 1-1 .553 0 1 .447 1 1z"/><path fill="#F4900C" d="M19 12c0 .553-.447 1-1 1-.552 0-1-.447-1-1 0-.553.448-1 1-1 .553 0 1 .447 1 1z"/><path fill="#414042" d="M16 10c0 .553-.448 1-1 1s-1-.447-1-1c0-.553.448-1 1-1s1 .447 1 1zm6 0c0 .553-.447 1-1 1-.553 0-1-.447-1-1 0-.553.447-1 1-1 .553 0 1 .447 1 1z"/><path fill="#FFAC33" d="M10.394 20.081l-3.452-1.479-.547-2.866c-.104-.542-.624-.897-1.17-.795-.542.104-.898.627-.795 1.17l.294 1.54-1.33-.57c-.508-.219-1.096.018-1.313.525-.218.508.018 1.096.525 1.313l.743.318-1.056 1.056c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.621-1.621 4.278 1.833c.128.056.262.081.394.081.388 0 .757-.227.919-.606.218-.508-.018-1.095-.525-1.313zm22.922-3.03l-1.465-.488.855-.855c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-.751.751-.572-2.287c-.134-.535-.678-.865-1.212-.727-.536.134-.862.677-.727 1.213l.862 3.45-3.6 3.6c-.391.391-.391 1.023 0 1.414.196.194.452.292.708.292s.512-.098.707-.293l3.563-3.563 2.413.805c.106.035.213.051.317.051.419 0 .809-.265.948-.684.175-.524-.108-1.09-.632-1.265z"/><path d="M10.08 2.113c-.153-.229-.463-.292-.693-.138l-.887.591V1.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.066l-.887-.591c-.231-.154-.54-.091-.693.138-.153.229-.091.54.139.693l1.04.694-1.04.693c-.23.154-.292.464-.139.694.096.145.255.223.417.223.095 0 .191-.027.277-.084l.886-.592V5.5c0 .276.224.5.5.5s.5-.224.5-.5V4.434l.887.591c.085.057.182.084.277.084.162 0 .32-.078.417-.223.153-.229.091-.54-.139-.693L8.901 3.5l1.04-.693c.23-.154.292-.464.139-.694zm-4 7c-.153-.229-.463-.292-.693-.138l-.887.591V8.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.066l-.887-.591c-.231-.154-.54-.091-.693.138-.153.229-.091.54.139.693l1.04.693-1.04.693c-.23.153-.292.464-.139.693.096.145.255.223.417.223.095 0 .191-.027.277-.084l.886-.59V12.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.066l.887.591c.085.057.182.084.277.084.162 0 .32-.078.417-.223.153-.229.091-.54-.139-.693L4.901 10.5l1.04-.693c.23-.154.292-.464.139-.694zm0 17c-.153-.229-.463-.292-.693-.139l-.887.592V25.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.066l-.887-.591c-.231-.153-.541-.091-.693.139-.153.229-.091.54.139.693l1.04.693-1.04.693c-.23.153-.292.464-.139.693.096.145.255.223.417.223.095 0 .191-.027.277-.084l.886-.591V29.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.066l.887.591c.085.057.182.084.277.084.162 0 .32-.078.417-.223.153-.229.091-.54-.139-.693L4.901 27.5l1.04-.693c.23-.154.292-.464.139-.694zM33.901 9.5l1.04-.693c.23-.153.292-.464.139-.693s-.463-.292-.693-.139l-.887.591V7.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.066l-.887-.591c-.231-.153-.541-.091-.693.139-.153.229-.091.54.139.693l1.04.693-1.04.693c-.23.153-.292.464-.139.693.096.145.255.223.417.223.095 0 .191-.027.277-.084l.887-.591V11.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.066l.887.591c.085.057.182.084.277.084.162 0 .32-.078.417-.223.153-.229.091-.54-.139-.693L33.901 9.5zm.179 13.613c-.153-.229-.463-.292-.693-.139l-.887.592V22.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.066l-.887-.591c-.231-.153-.541-.091-.693.139-.153.229-.091.54.139.693l1.04.693-1.04.693c-.23.153-.292.464-.139.693.096.145.255.223.417.223.095 0 .191-.027.277-.084l.887-.591V26.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.066l.887.591c.085.057.182.084.277.084.162 0 .32-.078.417-.223.153-.229.091-.54-.139-.693l-1.04-.693 1.04-.693c.228-.154.29-.464.137-.694zm-4.139-18.92l-1.04-.693 1.04-.693c.23-.153.292-.464.139-.693s-.463-.292-.693-.139l-.887.591V1.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.066l-.887-.591c-.231-.153-.541-.091-.693.139-.153.229-.091.54.139.693l1.04.693-1.04.693c-.23.153-.292.464-.139.693.096.145.255.223.417.223.095 0 .191-.027.277-.084l.886-.591V5.5c0 .276.224.5.5.5s.5-.224.5-.5V4.434l.887.591c.085.057.182.084.277.084.162 0 .32-.078.417-.223.152-.229.09-.539-.14-.693z" fill="#88C9F9"/></svg>
  )
}

export default Snowman
