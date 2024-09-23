import React from 'react'
import styled from 'styled-components'
import { deleteUsers } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'
function DeleteAllUser() {
  const dispatch = useDispatch()
  const delUsers = () => {
    dispatch(deleteUsers())
  }
  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={()=>delUsers()}>Clear All users</button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .clear-btn {
    font-size:1.5rem;
    font-weight:bold;
    text-transform: capitalize;
    background: linear-gradient(to right, orange, red);
    margin-top: 2rem;
  }
`
export default DeleteAllUser