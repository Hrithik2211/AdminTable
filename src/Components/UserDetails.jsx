import React from 'react'
import DeleteAllUser from './DeleteAllUser'
import styled from "styled-components";
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';

function UserDetails() {
// using dispatch from react-redux to dispatch the type of action to take here it is addUser() dispatched
    const dispatch = useDispatch()
    // here payload = fakeUserData() function which will return a fake userName
    const addNewUser = (payload) => {
        // console.log(payload);
        // addUser will update the state after accessing the data from store
        dispatch(addUser(payload))
    }

    return (
        <Wrapper>
            <div className="content">
                <div className="admin-table">
                    <div className="admin-subtitle">List of all users</div>
                    <button className='btn add-btn' onClick={()=>addNewUser(fakeUserData())}>Add new User</button>
                </div>
                <ul>
                    {/* getting the data from store */}
                    <DisplayUsers/>
                </ul>
                <hr />
                <DeleteAllUser />
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
    .content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .admin-table {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .admin-subtitle {
        font-size: 1.5rem;
        font-weight: bold;
    }

    button {
        padding: 10px 20px;
        font-size: 1.5rem;
        font-weight:bold;
        cursor: pointer;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
    }

    hr {
        margin: 20px 0;
    }

    @media (max-width: 768px) {
        .admin-table {
            flex-direction: column;
            align-items: flex-start;
        }

        .admin-subtitle {
            margin-bottom: 10px;
        }

        button {
            width: 100%;
            text-align: center;
        }
    }
`;

export default UserDetails  