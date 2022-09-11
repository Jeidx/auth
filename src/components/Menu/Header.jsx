import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Header = ({auth , setAuth}) => {
  const logOut = () => {
    setAuth(auth => auth = false);
  }
  return (
    <SvgMargin>
        <div className="card text-center">
            <div className="card-header d-flex justify-content-between">
                <ul className="nav nav-pills card-header-pills d-flex justify-content-start">
                <li className="nav-item">
                    <Link 
                      to='/menu' 
                      className="nav-link active">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                      </svg>
                      Home</Link>
                </li>
                <li className="nav-item">
                    <Link 
                      onClick={logOut}
                      to='/' 
                      className="btn btn-danger">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                      </svg>
                      Logout</Link>
                </li>
                </ul>
                <UserBtnIcon className="rounded-circle">
                  <Link to="/profile">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                  </Link>
                </UserBtnIcon>

            </div>
            </div>
    </SvgMargin>
  )
}

const SvgMargin = styled.div`
  svg{
    margin: 0 5px 0 0;
  }
`
const UserBtnIcon = styled.div`
  align-self: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  a{
    border-radius: 50%;
    text-decoration: none;
  }
`


export default Header