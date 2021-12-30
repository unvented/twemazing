import React from 'react'

const Shrimp = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#BE1931" d="M4.458 7.429c-4.53.32-4.775-5.511 3.801-4.738 8.576.773 17.964 3.4 20.218 1.789 1.789-1.279 1.416-3.608.966-4.078-.45-.469-1.132-.045-.787.682.344.728-.062 2.678-2.262 2.875-2.199.197-10.4-1.352-15.575-2.081C5.534 1.136 1.287 1.504.364 4.46c-.919 2.947 1.944 3.873 3.458 4.017 1.514.143.636-1.048.636-1.048z"/><path fill="#DD2E44" d="M6.083 6.708c-4.542 0-4.375-5.833 4.125-4.458S27.887 6.907 30.25 5.458c1.875-1.15 1.666-3.5 1.25-4s-1.125-.125-.833.625-.25 2.667-2.458 2.708c-2.208.043-10.279-2.08-15.39-3.171C7.6.506 3.337.575 2.208 3.458c-1.125 2.875 1.667 4 3.167 4.25s.708-1 .708-1z"/><path fill="#DD2E44" d="M33.378 13.246c-2.541-3.928-6.765-6.629-11.255-7.484C14.806 4.369 4.812 4.938 2 9c-.562.812-.478 4.671 3 6 1.763.674 6.542-.162 9.841-.462l-.22 1.737c-.069.548.318 1.048.866 1.118.548.069 1.048-.318 1.118-.866l.264-2.082c.796.02 1.572.1 2.336.232l-.599 1.959c-.162.528.136 1.087.663 1.249.529.161 1.088-.136 1.249-.664l.638-2.088c.742.223 1.479.5 2.219.826l-1.043 1.695c-.29.471-.142 1.086.327 1.376.472.288 1.087.142 1.376-.328l1.14-1.854c.088.047.174.089.262.138 2.808 1.558 4.526 5.937 4.454 7.555-.036.812.169 1.406.608 1.771.792.652 2.078.343 3.018.117.318-.077.647-.156.799-.153l.302-.992.098-.285c1.981-5.772.366-9.121-1.338-11.753z"/><path fill="#BE1931" d="M22.193 8.503c-.609 1.144.135.936 1.025.066.596-.583 1.541-1.218 2.541-1.671-.562-.243-1.133-.459-1.714-.641-.785.756-1.522 1.628-1.852 2.246zm5.981 3.096c1.271-.63 2.827-.215 4.356.481-.684-.874-1.457-1.67-2.296-2.389-.717.044-1.431.26-2.034.703-1.005.737-2.215 2.288-.026 1.205zm3.863 3.908c-1.196.349-2.864 1.392-.438 1.124 1.411-.156 2.731.768 3.93 1.947-.14-1.046-.422-1.975-.782-2.82-.832-.37-1.791-.519-2.71-.251zm2.44 8.633c-.402-.205-2.004 1.771-3.686-.738-.003-.005-.008-.005-.011-.01-.076-1.172-.625-6.221-5.888-8.991-.559-.294-1.166-.565-1.837-.8-.845-.296-1.787-.537-2.827-.713-.536-.091-1.094-.168-1.686-.221-.103-.009-.209-.011-.313-.019-.99-.071-2.004-.063-3.025-.003-.665.039-1.333.097-1.998.168-3.97.423-7.844 1.242-10.491.452.506.706 1.24 1.336 2.285 1.735 1.491.569 5.137.06 8.222-.292l.002.228c.005.552.457.996 1.009.991.552-.005.996-.456.991-1.009l-.004-.411c.596-.048 1.14-.076 1.589-.066.33.007.656.028.98.055l-.097.406c-.128.538.205 1.077.741 1.204.537.128 1.076-.204 1.205-.741l.137-.577c.788.165 1.566.386 2.342.667l-.265.525c-.248.494-.05 1.095.441 1.344.493.249 1.095.051 1.345-.441l.327-.648c.488.232.977.477 1.472.752 2.792 1.55 4.506 5.887 4.453 7.526-.021.122-.032.251-.03.387.01.508-.112 1.094-.365 1.743-.511 1.316-1.538 2.8-2.619 3.779-.416.379-.718.801-.895 1.254-.32.829-.167 1.685.385 2.131.107.087.224.151.346.197 3.333-3.019 2.071-1.367 2.898 1.117.332.61.822.757 1.065.789.706.091 1.403-.398 1.779-1.249l.049-.118c.564-1.452 2.175-8.657 2.328-9.716.042-.282-.1-.558-.354-.687z"/><path fill="#292F33" d="M26.714 34.003c.39.147.839.092 1.244-.174.538-.353.893-.405 1.033-.343.147.064.274.35.339.762.059.367.16.649.282.872-.828-2.484 1.947-6.731-2.898-1.117z"/><circle fill="#292F33" cx="7" cy="9" r="1"/></svg>
  )
}

export default Shrimp
