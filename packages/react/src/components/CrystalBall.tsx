import React from 'react'

const CrystalBall = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#BF6952" d="M28.736 28.767l-21.458.076-1.649 4.835c-.062.187-.101.387-.073.582.145.984.993 1.74 2.017 1.74h20.894c1.024 0 1.872-.756 2.017-1.74.029-.195-.01-.395-.073-.582l-1.675-4.911z"/><path fill="#854836" d="M28.736 28.767l-.19-.556c-.199-.598-.759-1.001-1.389-1.001H8.883c-.63 0-1.19.403-1.389 1.001l-.216.632c2.928 2.344 6.636 3.754 10.678 3.754 4.088 0 7.837-1.438 10.78-3.83z"/><circle fill="#AA8DD8" cx="17.956" cy="15.488" r="15.288"/><circle fill="#744EAA" cx="23.266" cy="12.37" r="4.195"/><circle fill="#744EAA" cx="14.875" cy="18.662" r="3.146"/><circle fill="#744EAA" cx="15.924" cy="5.028" r="2.098"/></svg>
  )
}

export default CrystalBall
