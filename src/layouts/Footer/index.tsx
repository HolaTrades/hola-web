import React from 'react'

import holaLogo from '../../assets/hola.svg'

export default function Footer() {
  return (
    <div className="mt-12 bg-gray-100">
      <div className="flex items-center p-6 md:py-10 md:px-8 max-w-6xl m-auto">
        <div>
          <a href="/" className="block p-1" target="_blank" rel="noreferrer">
            <img className="h-8 w-auto" src={holaLogo} alt="Hola Trades" />
          </a>
        </div>
      </div>
    </div>
  )
}
