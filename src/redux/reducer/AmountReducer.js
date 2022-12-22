const   reducer=(state=0,action)=>{
    if(action.type==="ADD"){
       return state+action.payload
    }
    else if(action.type==="SUBTRACT"){
       return state-action.payload
    }
    else{
       return state
    }

}

export default reducer