import React from 'react'

export const Container = (props) => {
  return (
    <div className = {`${props.classname}`}>{props.children}</div>
  )
}
