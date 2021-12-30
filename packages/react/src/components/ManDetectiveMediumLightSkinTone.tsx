import React from 'react'

const ManDetectiveMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#66757F" d="M33 36v-1c0-3.313-2.687-6-6-6H9c-3.313 0-6 2.687-6 6v1h30z"/><path fill="#EF9645" d="M12 27.482C13.672 29.057 15.746 30 18 30s4.327-.944 6-2.518V26H12v1.482z"/><path fill="#66757F" d="M26.75 20.435c1.188.208 2.619.129 2.416.917-.479 1.854-2.604 1.167-2.979 1.188-.375.02.563-2.105.563-2.105z"/><path fill="#292F33" d="M27.062 20.645c1.875.25 2.541.416 1.166.958-.772.305-2.243 4.803-3.331 4.118-1.087-.685 2.165-5.076 2.165-5.076z"/><path fill="#66757F" d="M9.255 20.435c-1.188.208-2.619.129-2.416.917.479 1.854 2.604 1.167 2.979 1.188.375.02-.563-2.105-.563-2.105z"/><path fill="#292F33" d="M8.943 20.645c-1.875.25-2.541.416-1.166.958.772.305 2.243 4.803 3.331 4.118 1.088-.685-2.165-5.076-2.165-5.076z"/><path fill="#FFE51E" d="M8.055 11.031c-1.953 0-2.305 3.164-.664 3.594 0 0-1.367 3.32 1.953 3.32-.547-1.68-1.562-4.414-.781-6.406m19.38-.508c1.953 0 2.305 3.164.664 3.594 0 0 1.367 3.32-1.953 3.32.547-1.68 1.562-4.414.781-6.406"/><ellipse fill="#F3D2A2" cx="18" cy="15.5" rx="10" ry="12.5"/><path fill="#662113" d="M14 17c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z"/><path fill="#C1694F" d="M19 20.5c0 .276-.224.5-.5.5h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#292F33" d="M7.657 14.788c.148.147.888.591 1.036 1.034.148.443.445 2.954 1.333 3.693.916.762 4.37.478 5.032.149 1.48-.738 1.662-2.798 1.924-3.842.148-.591 1.036-.591 1.036-.591s.888 0 1.036.591c.262 1.044.444 3.104 1.924 3.841.662.33 4.116.614 5.034-.147.887-.739 1.183-3.25 1.331-3.694.146-.443.888-.886 1.035-1.034.148-.148.148-.739 0-.887-.296-.295-3.788-.559-7.548-.148-.75.082-1.035.295-2.812.295-1.776 0-2.062-.214-2.812-.295-3.759-.411-7.252-.148-7.548.148-.149.148-.149.74-.001.887z"/><path fill="#66757F" d="M7.858 8.395S9.217-.506 13.79.023c3.512.406 4.89.825 7.833.097 1.947-.482 4.065 1.136 5.342 4.379.816 2.068 1.224 4.041 1.224 4.041s3.938-.385 4.165 1.732c.228 2.117-4.354 4.716-15.889 4.716C10 14.987 3.33 12.63 3.013 10.657c-.317-1.973 4.845-2.262 4.845-2.262z"/><path fill="#292F33" d="M8.125 7.149s-.27 1.104-.406 1.871c-.136.768.226 1.296 2.705 1.824 3.287.7 10.679.692 15.058-.383 1.759-.432 2.886-.72 2.751-1.583-.167-1.068-.196-1.066-.541-2.208 0 0-1.477.502-3.427.96-2.66.624-9.964.911-13.481.144-1.874-.41-2.659-.625-2.659-.625zm-.136 13.954c-.354.145 2.921 1.378 7.48 1.458 4.771.084 6.234.39 5.146 1.459-1.146 1.125-.852 2.894-.771 3.418.081.524 2.047 1.916 2.208 2.56.161.645-1.229 5.961-1.229 5.961l-8.729-.252c-2.565-8.844-2.883-8.501-4.105-13.604-.241-1.008 0-1 0-1z"/><path fill="#66757F" d="M6.989 21.144c-.354.146 2.921 1.378 7.48 1.458 4.771.084 6.234.39 5.146 1.459-1.146 1.125-.664 2.894-.583 3.418.081.524 1.859 1.916 2.021 2.561.16.644-1.231 5.96-1.231 5.96l-8.729-.252c-2.565-8.844-2.883-8.501-4.105-13.604-.24-1.008.001-1 .001-1z"/><path fill="#292F33" d="M28.052 21.103c.354.145-2.921 1.378-7.479 1.458-4.771.084-6.234.39-5.146 1.459 1.146 1.125 2.976 2.892 2.896 3.416-.081.524-4.172 1.918-4.333 2.562-.161.645 1.229 5.961 1.229 5.961l8.729-.252c2.565-8.844 2.883-8.501 4.104-13.604.241-1.008 0-1 0-1z"/><path fill="#66757F" d="M28.958 21.103c.354.145-2.921 1.378-7.479 1.458-4.771.084-6.234.39-5.146 1.459 1.146 1.125 2.977 2.892 2.896 3.416-.081.524-4.172 1.918-4.333 2.562-.161.645 1.229 5.961 1.229 5.961l8.657.01c2.565-8.844 2.955-8.763 4.177-13.866.24-1.008-.001-1-.001-1z"/></svg>
  )
}

export default ManDetectiveMediumLightSkinTone
