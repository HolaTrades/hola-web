import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>Uh oh... Hola Trades</title>
      </Helmet>
      <div>
        Uh oh... Page Not Found!
      </div>
    </>
  )
}
