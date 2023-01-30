import React from 'react'

function Element({className, children}) {
  return (
    <div className={className}>{children}</div>
  )
}

export default Element