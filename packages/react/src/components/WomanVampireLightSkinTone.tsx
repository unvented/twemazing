import React from 'react'

const WomanVampireLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M32 36v-2c0-3.313-2.687-6-6-6H10c-3.313 0-6 2.687-6 6v2h28z"/><path fill="#BE1931" d="M27 28.617C29.239 26.393 34 19 34 17c0 0-4.667-5-16-5v23s7.103-4.498 9-6.383zm-18 0C6.761 26.393 2 19 2 17c0 0 4.667-5 16-5v23s-7.103-4.498-9-6.383z"/><path fill="#C1694F" d="M18.75 19.75h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75z"/><path fill="#292F33" d="M18.004 4.067c4.35 0 11.601 2.175 11.601 11.601 0 9.427 0 11.602-2.175 11.602s-5.076-2.175-9.426-2.175c-4.351 0-7.19 2.175-9.427 2.175-2.424 0-2.176-8.701-2.176-11.602.001-9.426 7.253-11.601 11.603-11.601"/><path fill="#292F33" d="M17.996 4.067c-4.35 0-11.601 2.175-11.601 11.601 0 9.427 0 11.602 2.175 11.602s5.076-2.175 9.426-2.175c4.351 0 7.19 2.175 9.427 2.175 2.424 0 2.176-8.701 2.176-11.602-.001-9.426-7.253-11.601-11.603-11.601"/><path fill="#F7DECE" d="M22.239 28c0 1.92-4.239 7-4.239 7s-4.239-5.019-4.239-7h8.478z"/><path fill="#F7DECE" d="M14.291 28.246c1.553 1.129 2.959 1.039 3.709 1.039s2.325.09 3.697-1.006l.012-4.387h-7.418v4.354z"/><path fill="#EEC2AD" d="M14.291 26.024c1.031 1.224 3.022 1.336 3.699 1.336s2.67-.111 3.701-1.336v-3.112h-7.4v3.112z"/><path fill="#F7DECE" d="M9.24 15.351c0-6.182 3.896-11.194 8.702-11.194 4.804 0 8.699 5.012 8.699 11.194 0 6.181-3.895 11.238-8.699 11.238-4.806 0-8.702-5.057-8.702-11.238"/><path fill="#292F33" d="M7.112 18.829c-.022-1.06-.047-.237-.047-.493 0-3.626 2.176.524 2.176-2.059 0-2.584 1.449-2.843 2.9-4.293.725-.725 2.175-2.147 2.175-2.147s3.625 2.191 6.526 2.191c2.9 0 5.8 1.457 5.8 4.358 0 2.9 2.175-1.679 2.175 1.947 0 .259-.024-.563-.042.497h.762c.006-2.119.006-2.039.006-3.393 0-9.426-7.25-12.936-11.602-12.936-4.35 0-11.53 3.451-11.53 12.878 0 .84-.021 1.332.009 3.451h.692z"/><path fill="#DD2E44" d="M14.406 17.649c-.493 0-.896-.404-.896-.897v-.895c0-.493.404-.896.896-.896.494 0 .897.404.897.896v.895c0 .494-.403.897-.897.897m7.168 0c-.493 0-.896-.404-.896-.897v-.895c0-.493.404-.896.896-.896.493 0 .896.404.896.896v.895c.001.494-.403.897-.896.897"/><path fill="#C1694F" d="M18.886 20.419h-1.791c-.247 0-.448-.201-.448-.448v-.162c0-.247.201-.449.448-.449h1.791c.247 0 .449.202.449.449v.162c0 .247-.202.448-.449.448"/><path fill="#F7DECE" d="M26 14.28l-.47.129s-1.192 3.401 0 3.997C28.194 19.737 29 14.612 29 13.28c0-1-3 1-3 1zm-16 0l.47.129s1.192 3.401 0 3.997C7.806 19.737 7 14.612 7 13.28c0-1 3 1 3 1z"/><path fill="#C1694F" d="M18.059 24.504c-2.754 0-3.6-1.904-3.741-2.045-.256-.256-.256-.671 0-.927.248-.248.645-.255.902-.024.052.038.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.255-.255.656-.243.913.013.256.256.242.684-.014.94-.141.142-.986 2.046-3.741 2.046z"/><path fill="#C1694F" d="M15.626 22.004c-.331 0-.637.149-.84.41-.203.261-.274.594-.194.915.008.034.02.067.036.098l1.012 2.072c.084.172.258.281.449.281h.009c.194-.003.369-.119.448-.296l.88-1.973c.012-.027.021-.054.028-.082.064-.257.018-.521-.13-.741-.173-.258-.479-.441-.817-.489l-.767-.18c-.038-.011-.076-.015-.114-.015z"/><path fill="#F5F8FA" d="M16.434 22.692l-.809-.188c-.368 0-.639.346-.549.703l1.012 2.072.88-1.973c.08-.32-.212-.568-.534-.614z"/><path fill="#C1694F" d="M20.454 22.004c-.038 0-.076.004-.113.013l-.809.188c-.297.041-.602.224-.775.482-.148.221-.195.484-.13.741.007.028.017.056.028.082l.88 1.973c.079.177.254.293.448.296h.009c.191 0 .365-.109.449-.281l1.012-2.072c.015-.031.027-.064.036-.098.08-.321.009-.654-.194-.915-.204-.259-.51-.409-.841-.409z"/><path fill="#F5F8FA" d="M19.645 22.692l.809-.188c.368 0 .639.346.549.703l-1.012 2.072-.88-1.973c-.079-.32.213-.568.534-.614z"/></svg>
  )
}

export default WomanVampireLightSkinTone
