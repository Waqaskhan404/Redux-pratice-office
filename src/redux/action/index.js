export const AddAmount=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"ADD",
            payload:amount
        })
    }
}

export const SubtractAmount=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"SUBTRACT",
            payload:amount
        })
    }
}