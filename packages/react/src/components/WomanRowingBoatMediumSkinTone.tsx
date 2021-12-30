import React from 'react'

const WomanRowingBoatMediumSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path d="M15.356 15.875l3.083 1.158-1.156 3.084s-4.55-1.004-5.259-2.113c-.709-1.111.602-2.729.602-2.729l2.73.6z"/><path fill="#C1694F" d="M2 17h32s0 2-1 7c-.86 4.302-21 1-24.601 0C5.316 23.144 2 17 2 17z"/><path fill="#F4900C" d="M35 18c0 .553-.447 1-1 1H2c-.552 0-1-.447-1-1 0-.553.448-1 1-1h32c.553 0 1 .447 1 1z"/><path fill="#55ACEE" d="M0 23.933V34c0 1.105.895 2 2 2h32c1.105 0 2-.895 2-2v-9.637c0-.637-.585-1.097-1.21-.976-11.333 2.19-22.667-2.809-34-.439-.461.096-.79.514-.79.985z"/><path fill="#1C6399" d="M24.646 13.533c-.171-.171-.448-.171-.619 0l-8.031 8.031c-2.225 2.224-2.691.599-5.033 2.941l-3.231 3.231c-.2.199-.199.523 0 .723l.994.994.994.994c.2.2.523.2.722 0l3.231-3.231c2.342-2.342.717-2.809 2.941-5.033l8.031-8.031c.172-.171.172-.448.001-.619z"/><path fill="#D4AB88" d="M17.028 9.229c-.176-.21-.314-.46-.388-.773-.265-1.118.345-2.22 1.362-2.461 1.017-.241 2.447.464 2.46 1.613.013 1.141-.556 2.847-1.522 2.6-.255-.065-.51-.138-.754-.228-.098.125-.153.592-.096.987.147 1.008-1.245 1.167-1.391.157-.116-.798.365-1.327.329-1.895z"/><path fill="#963B22" d="M13.809 8.258c.568-.028 1.117-.092 2.056-1.302.624-.804 1.207-1.32 2.649-1.307 1.531.014 2.814 1.317 1.831 1.969-.429.284-.788.149-1.476.342-1.081.303-1.245 1.453-2.221 1.711-1.912.506-3.406-1.385-2.839-1.413z"/><path fill="#D4AB88" d="M24.039 13.96c-.331-.341-.519.068-.754.058-.139-.006-2.338-.872-2.623-1.143-.285-.271-1.105-1.326-1.929-1.875-.824-.549-1.384-.171-1.597.237-.282.541-.146 1.165.412 1.517.397.25 1.755 1.106 2.535 1.54.561.311 2.569.67 2.744.741.236.095.555.618.787.57.232-.048.479-.425.719-.809.239-.385.037-.495-.294-.836z"/><path fill="#9266CC" d="M20.25 12.366l-.738-.759c-.482-.732-.789-1.183-1.524-1.344-1.287-.284-2.912.308-4.222 1.927-.829 1.024-.947 2.174-2.259 3.794 0 0 4.444.604 4.552.092.137-.653.753-1.253 1.055-2.174.78-.345.86-.869.88-.855.447.326 1.073.678 1.073.678l1.183-1.359z"/></svg>
  )
}

export default WomanRowingBoatMediumSkinTone
