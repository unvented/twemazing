import React from 'react'

const Horse = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M28.721 12.849s3.809 1.643 5.532.449c1.723-1.193 2.11-2.773 1.159-4.736-.951-1.961-3.623-2.732-3.712-5.292 0 0-.298 4.141 1.513 5.505 2.562 1.933-.446 4.21-3.522 3.828-3.078-.382-.97.246-.97.246z"/><path fill="#8A4B38" d="M23.875 19.375s-.628 2.542.187 5.03c.145.341.049.556-.208.678-.256.122-4.294 1.542-4.729 1.771-.396.208-1.142 1.78-1.208 2.854.844.218 1.625.104 1.625.104s.025-1.915.208-2.042c.183-.127 5.686-1.048 6.062-1.771s1.611-3.888.812-5.292c-.225-.395-.637-1.15-.637-1.15l-2.112-.182z"/><path fill="#292F33" d="M17.917 29.708s-.616 1.993.008 2.138c.605.141 1.694-.388 1.755-.646.081-.343.216-1.179.098-1.366-.118-.186-1.861-.126-1.861-.126z"/><path fill="#8A4B38" d="M11.812 21.875l-.75-2.562s-2.766 2.105-3.938 3.594c-.344.437-1.847 3.198-1.722 4.413.05.488.474 2.583.474 2.583l1.651-.465s-1.312-1.896-1.021-2.562c1.428-3.263 5.306-5.001 5.306-5.001z"/><path fill="#292F33" d="M7.679 29.424c-.172-.139-1.803.479-1.803.479s.057 2.085.695 2.022c.618-.061 1.48-.912 1.455-1.175-.034-.351-.175-1.187-.347-1.326z"/><path fill="#C1694F" d="M27.188 11.188c-3.437.156-7.207.438-9.5.438-3.655 0-5.219-1.428-6.562-2.625C8.838 6.964 8.167 4.779 6 5.501c0 0-.632-.411-1.247-.778l-.261-.152c-.256-.148-.492-.276-.656-.347-.164-.072-.258-.087-.228-.01.019.051.093.143.236.286.472.472.675.95.728 1.395-2.01 1.202-2.093 2.276-2.871 3.552-.492.807-1.36 2.054-1.56 2.515-.412.948 1.024 2.052 1.706 1.407.893-.845.961-1.122 2.032-1.744.983-.016 1.975-.416 2.308-1.02 0 0 .938 2.083 1.938 3.583s2.5 3.125 2.5 3.125c-.131 1.227.12 2.176.549 2.922-.385.757-.924 1.807-1.417 2.745-.656 1.245-1.473 3.224-1.208 3.618.534.798 2.719 2.926 4.137 3.311 1.03.28 2.14.437 2.14.437l-.193-1.574s-1.343.213-1.875-.083c-1.427-.795-2.666-2.248-2.708-2.542-.07-.487 3.841-2.868 5.14-3.645 2.266.097 6.022-.369 8.626-1.702.958 1.86 2.978 2.513 2.978 2.513s.667 2.208 1.375 4.125c-1.017.533-4.468 3.254-4.975 3.854-.456.54-.856 2.49-.856 2.49.82.375 1.57.187 1.57.187s.039-1.562.385-2.073c.346-.511 4.701-2.559 5.958-3.458.492-.352.404-.903.262-1.552-.321-1.471-.97-4.781-.971-4.782 5.146-2.979 6.458-11.316-2.354-10.916z"/><path fill="#292F33" d="M22.336 33.782s-.616 1.993.008 2.138c.605.141 1.694-.388 1.755-.646.081-.343.216-1.179.098-1.366-.118-.187-1.861-.126-1.861-.126zm-7.676-5.296c-.167.146.164 1.859.164 1.859s2.064.299 2.111-.34c.045-.62-.647-1.614-.91-1.634-.351-.027-1.198-.031-1.365.115z"/><circle fill="#292F33" cx="4.25" cy="8.047" r=".349"/><path fill="#292F33" d="M12.655 9.07c1.773 1.446 3.147.322 3.147.322-1.295-.271-2.056-.867-2.708-1.562.835-.131 1.287-.666 1.287-.666-1.061-.013-1.824-.3-2.485-.699-.565-.614-1.233-1.202-2.254-1.631-.294-.125-.606-.21-.922-.276-.086-.025-.178-.063-.258-.073-.906-.114-1.845.051-2.737.603-.322.2-.214.639.117.623 1.741-.085 2.866.582 3.47 1.633 2.169 3.772 5.344 3.875 5.344 3.875s-1.29-.688-2.001-2.149z"/></svg>
  )
}

export default Horse
