import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addData } from "../reducers/anecdoteReducer"
import {notifyADD, notifyERROR, notifyRemove} from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {
  const [anecdote, setAnecdote] = useState('')
  const updateAnecodte = (event) =>{
    setAnecdote(event.target.value)
  }
  const addAnecodte = async (event) => {
    event.preventDefault();
    try{
      props.addData({content: anecdote, votes: 0})

      props.notifyADD(anecdote)
      setAnecdote('')
    }
    catch{
      props.notifyERROR(anecdote)
    }
  }
  return (
    <form onSubmit={addAnecodte}>
      <div>
        <input type='text' value={anecdote} onChange={updateAnecodte}/>
      </div>
      <button>create</button>
    </form>
  )
}

const mapDispatchToProps = {
    addData, notifyADD, notifyRemove, notifyERROR
}
export default connect(null, mapDispatchToProps)(AnecdoteForm)