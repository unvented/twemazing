import React from 'react'

const RingedPlanet = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#FFCC4D" cx="18" cy="18" r="10.694"/><path fill="#F4900C" d="M10.229 22.751c-.985.067-1.689-.308-2.203-.917.214.557.487 1.081.788 1.588.771.289 1.591.41 2.54-.272-.463-.227-.88-.415-1.125-.399zM23.086 8.608c.045.328-.187.5-.75.363-.955-.232-1.793.776-2.274 1.619-.947 1.657-4.854 3.524-4.857 2.087-.001-.679-3.452.843-3.893.161-.417-.644-1.663-.396-1.921-1.168-1.135 1.544-1.869 3.402-2.04 5.422.377.718.864 1.282 1.352 1.526.66.33 3.726 1.528 4.174.763.747-1.276 5.229-.373 5.122-1.044-.205-1.285 2.427-.23 3.373-1.886.482-.843 1.533-1.49 2.489-1.258 1.116.271 2.493-1.643 2.389-3.996-.871-1.057-1.951-1.931-3.164-2.589zm3.181 16.175c-.338.166-.671.293-.975.326-2.248.243-2.734 2.005-4.242 1.703-.777-.156-1.837 1.214-3.05 1.297-.611.042-1.489.141-2.386.308.768.175 1.565.277 2.386.277 3.331 0 6.305-1.523 8.267-3.911z"/><path fill="#E85E00" d="M23.225 8.674c.953.535 1.811 1.213 2.554 2.003 2.491-.157 4.01.429 3.883 1.777-.066.705-.585 1.542-1.431 2.435-2.108 2.221-6.309 4.796-11.07 6.602-3.309 1.255-6.258 1.9-8.366 1.934-2.145.035-3.418-.563-3.302-1.803.076-.815.752-1.806 1.852-2.857-.019-.255-.039-.507-.039-.765 0-.848.109-1.669.296-2.461C3.3 18.522.5 21.807.5 24.369c0 3.487 5.162 4.558 12.275 2.957 1.65-.371 3.405-.886 5.225-1.549 3.9-1.419 7.489-3.3 10.399-5.317 4.301-2.983 7.101-6.268 7.101-8.83 0-3.486-5.162-4.558-12.275-2.956z"/><path fill="#F4900C" d="M6.356 18.051c-.742.711-1.369 1.524-1.88 2.382-.49.852-.907 1.811-.844 2.671.035.856.682 1.366 1.558 1.602.874.227 1.845.287 2.834.229 1.962-.089 3.93-.415 5.841-.965 1.924-.505 3.791-1.225 5.615-2.036 3.648-1.628 7.068-3.789 10.132-6.382.368-.333.771-.649 1.124-.986.333-.337.647-.713.91-1.097.522-.768.826-1.667.335-2.352-.49-.696-1.495-1.075-2.453-1.271-.981-.187-2.01-.23-3.03-.111.992-.265 2.037-.395 3.088-.316 1.03.092 2.172.3 3.008 1.221.41.457.599 1.145.524 1.746-.057.611-.293 1.15-.563 1.635-.278.485-.59.925-.945 1.348-.352.404-.709.777-1.072 1.163-2.932 2.994-6.44 5.414-10.261 7.159-3.816 1.72-7.974 2.911-12.261 2.754-1.056-.04-2.157-.133-3.236-.548-.534-.209-1.082-.517-1.5-1.016-.429-.49-.635-1.171-.589-1.774.098-1.213.704-2.152 1.349-2.976.664-.819 1.447-1.525 2.316-2.08z"/></svg>
  )
}

export default RingedPlanet
