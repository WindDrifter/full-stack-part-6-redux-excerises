import React, { useEffect } from 'react';
import {boundVote, loadData} from "../reducers/anecdoteReducer"
import {notifyVote, notifyRemove} from "../reducers/notificationReducer"
import { connect } from 'react-redux'
const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes
  const vote = (id, content, votes) => {
    const data = {id, content, votes: votes+1}
    props.boundVote(data)
    props.notifyVote(content)
  }
  useEffect(()=>{
    props.loadData()
  },[])

  const sortAnecdotes = () =>{
    return anecdotes.length > 0 ? anecdotes.sort((a,b) => b.votes - a.votes) : anecdotes
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.length > 0 && sortAnecdotes().map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content, anecdote.votes)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
  }
const mapDispatchToProps = {
    boundVote, notifyVote, notifyRemove, loadData
}
export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)