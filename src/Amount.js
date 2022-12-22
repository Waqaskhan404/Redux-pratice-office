import React from 'react'
import { useSelector } from 'react-redux'

function Amount() {
  const state=useSelector(state=>state.amount)
  return (
    <div className='container'><h1>Amount {state}</h1></div>
  )
}

export default Amount