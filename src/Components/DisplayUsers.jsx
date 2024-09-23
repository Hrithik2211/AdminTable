// in this component we try to get the data and display it on admin panel
import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { useSelector,useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice'
function DisplayUsers() {
    // getting the data from store
    const data = useSelector((state) => {
        return state.users
    })
    const dispatch = useDispatch()
  const deleteUser = (id) => {
      dispatch(removeUser(id))
    }
    return (
      <Wrapper>
            {
                // display the data 
          data.map((user, id) => <li key={id}>
            {user}
            <button className="btn-delete" onClick={()=>deleteUser(id)}>
              <MdDeleteForever className='delete-icon'/>
            </button>
          </li>)
            }
    </Wrapper>
  )
}
import styled from 'styled-components'

const Wrapper = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .btn-delete {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .delete-icon {
    font-size: 1.5em;
    margin-left: 5px;
  }
`

export default DisplayUsers