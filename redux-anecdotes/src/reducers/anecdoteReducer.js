import { getAll, addNew, upVote } from '../services/anecdote'
// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

const loadData = () => {
  return async dispatch => {
    const anecdote = await getAll()
    dispatch({
      type: 'LOAD',
      data: anecdote,
    })
  }
}

const addData = (data) => {
  return async dispatch => {
    const anecdote = await addNew(data)
    dispatch({
      type: 'ADD',
      data: anecdote,
    })
  }
}

// const initialState = anecdotesAtStart.map(asObject)
const initialState = []
const boundVote = (data) => {
  return async dispatch => { 
    const response = await upVote(data.id, data)
    const newObject = {...response, id: data.id}
    return dispatch({type: "VOTE", data: newObject })
  }
}

const anecdotesReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  const stateCopy = [...state]
  switch(action.type){
    case 'VOTE':
      const data = action.data
      const id = data.id
      return stateCopy.map(anecdote => anecdote.id!==id? anecdote: data)
    case 'ADD':
      const anecdoteToAdd = action.data
      return [...state, anecdoteToAdd]
    case 'LOAD':
      return action.data
    default:
      return state
  }
}

export {anecdotesReducer, boundVote, loadData, addData}