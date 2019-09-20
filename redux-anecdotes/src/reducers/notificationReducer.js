const initialState = ''

const notifyVote = (anecdote, timeout=5000) => {
  return async dispatch => {
    const type = "VOTENOTIFY"
    dispatch({
      type: type,
      data: anecdote
    })
    setTimeout(()=>{dispatch({type:"REMOVE"})}, timeout)
  }
}

const notifyADD = (anecdote, timeout=5000) => {
  return async dispatch => {
    const type = "ADDNOTIFY"
    dispatch({
      type: type,
      data: anecdote
    })
    setTimeout(()=>{dispatch({type:"REMOVE"})}, timeout)
  }
}

const notifyERROR = (anecdote, timeout=5000) => {
  return async dispatch => {
    const type = "ERROR"
    dispatch({
      type: type,
      data: anecdote
    })
    setTimeout(()=>{dispatch({type:"REMOVE"})}, timeout)
  }
}
const notifyRemove = () =>{return {type: "REMOVE"}}
const notificationReducer = (state = initialState, action) => {
    switch(action.type){
      case 'VOTENOTIFY':
        return `You have voted for ${action.data}`
      case 'ADDNOTIFY':
        return `You have added ${action.data}`
      case 'ERROR':
        return `Opps! Looks like something wrong`
      case 'REMOVE':
        return ''
      default:
        return state
    }
  }
  
  export {notificationReducer, notifyVote, notifyADD, notifyRemove, notifyERROR}