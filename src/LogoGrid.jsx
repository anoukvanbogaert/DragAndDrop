import React, {useState} from 'react'

const LogoGrid = () => {
    const [isPressed, setIsPressed] = useState(false);
  console.log('isPressed', isPressed)

  // Handlers for mouse down and up
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false)
  return (
    <>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
           
              <div className="group cursor-pointer">
      <img
        src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
        alt="Transistor"
        width="158"
        height="48"
        className={`col-span-2 max-h-24 w-full object-contain lg:col-span-1 border-2 border-gray-200 rounded-lg transition-transform duration-300 py-4 ${isPressed ? 'scale-120' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      />
    </div>
           
          <img
            alt="Reform"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
        </div>
    </>
  )
}

export default LogoGrid