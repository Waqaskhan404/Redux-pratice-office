import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from "./redux/index"
function Shop() {
  const dispatch=useDispatch();
  const action=bindActionCreators(actionCreators,dispatch);
  return (

    <>
    <div className='mt-5'>
      {/* <button className='btn btn-primary me-3' onClick={()=>dispatch(actionCreators.AddAmount(100))}>+</button>
      Click + to Add and - to reduce
      <button className='btn btn-primary ms-3'onClick={()=>dispatch(actionCreators.SubtractAmount(100))} >-</button> */}



      <button className='btn btn-primary me-3' onClick={()=>action.AddAmount(100)}>+</button>
      Click + to Add and - to reduce
      <button className='btn btn-primary ms-3'onClick={()=>action.SubtractAmount(100)} >-</button>
      
      </div>

    </>
  )
}

export default Shop