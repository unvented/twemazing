import React from 'react'

const FaceBlowingAKiss = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#FFCC4D" cx="18" cy="18" r="18"/><ellipse fill="#664500" cx="11.5" cy="15.5" rx="2.5" ry="3.5"/><path fill="#664500" d="M28.457 17.797c-.06-.135-1.499-3.297-4.457-3.297-2.957 0-4.397 3.162-4.457 3.297-.092.207-.032.449.145.591.175.142.426.147.61.014.012-.009 1.262-.902 3.702-.902 2.426 0 3.674.881 3.702.901.088.066.194.099.298.099.11 0 .221-.037.312-.109.177-.142.238-.386.145-.594zM5.999 11c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4C8.462 5.05 12.816 5 13 5c.552 0 1 .448 1 1 0 .551-.445.998-.996 1-.155.002-3.568.086-6.204 3.6-.196.262-.497.4-.801.4zm23.002 3c-.305 0-.604-.138-.801-.4-2.592-3.456-6.961-2.628-7.004-2.62-.547.11-1.068-.244-1.177-.784-.108-.541.243-1.068.784-1.177.231-.047 5.657-1.072 8.996 3.38.332.442.242 1.069-.2 1.4-.179.136-.389.201-.598.201zm-8.922 13.042c1.335-.412 2.629-1.156 2.629-2.5 0-2.619-4.912-2.968-5.472-2.999-.274-.026-.509.193-.527.468-.017.274.19.511.464.53.035.002 3.535.299 3.535 2.001s-3.5 1.999-3.535 2.001c-.014.001-.024.009-.037.011-.052.006-.101.018-.146.04l-.019.011c-.047.026-.088.057-.125.098-.014.015-.024.031-.036.048-.023.032-.044.063-.059.102-.012.029-.018.061-.024.092-.004.023-.016.044-.018.067 0 .011.004.021.004.031s-.005.021-.004.031c.001.024.013.045.018.068.006.031.011.061.023.09.013.03.031.057.049.084.017.024.032.05.052.071.023.023.05.041.078.061.024.017.046.034.074.047.032.015.066.021.101.027.024.006.044.018.069.02.035.002 3.535.299 3.535 2.001s-3.5 1.999-3.535 2.001c-.274.02-.481.257-.464.53.017.265.237.469.499.469l.028-.001c.56-.031 5.472-.38 5.472-2.999 0-1.345-1.294-2.089-2.629-2.501z"/><path fill="#FFAC33" d="M34.202 25.803c-.236-.79-.779-1.486-1.578-1.875-.922-.449-1.956-.391-2.793.06-.16-.936-.75-1.789-1.67-2.237-1.517-.74-3.348-.11-4.087 1.406-.105.215-.18.437-.23.659-.775 2.556.64 6.341 2.192 7.948 1.23.13 2.953-.198 4.513-.873 1.5-1.46 2.733-3.183 3.653-5.088z"/><path fill="#DD2E44" d="M35.654 27.222c.739-1.516.11-3.347-1.405-4.086-.922-.449-1.956-.391-2.793.06-.16-.936-.75-1.789-1.67-2.237-1.517-.74-3.348-.109-4.087 1.406-.105.215-.18.437-.23.659-.774 2.556.64 6.341 2.192 7.948 2.223.234 6.077-.979 7.615-3.161.145-.179.273-.374.378-.589z"/></svg>
  )
}

export default FaceBlowingAKiss
