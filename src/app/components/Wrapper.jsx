import React from 'react'

export default function Wrapper({children , className = ""}) {
  return (
    <div className={`max-w-screen-xl mx-auto md:px-0 px-5 py-16  ${className}`} >{children}</div>
  )
}
