import React from 'react'

export default function Button({children,className = ""}) {
  return (
    <button className={`${className} py-3 px-5 box-border hover:border-white  hover:shadow-lg bg-gray-50 border-black border rounded mt-6 `}>{children}</button>
  )
}
