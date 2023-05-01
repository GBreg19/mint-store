import React from 'react'

const Card = (props) => {
  return (
    <div className='m-auto 2xl:w-[1400px] lg:w-[1150px] lg:px-30 md:px-20 px-5 py-20 bg-gray-200 flex items-center justify-between'>{props.children}</div>
  )
}

export default Card