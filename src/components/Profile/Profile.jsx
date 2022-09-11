import React from 'react'
import Header from '../Menu/Header';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const Profile = ({userLoggin , userPass , userFirstName , userLastName , auth , setAuth}) => {

  return (
    <CenterContent>
        <Header auth={auth} setAuth={setAuth}/>
        <UserData>
          <h5>logg-in :<span>{` ${userLoggin}`}</span></h5>
          <h5>password :<span>{` ${userPass}`}</span>
            <Link 
              to="/pass"
              type="button"
              >Сменить пароль</Link>
          </h5>
          <h5>Name :<span>{` ${userFirstName}`}</span>
            <Link 
                to="/settings"
                type="button"
                >Сменить Имя</Link>
          </h5>
          <h5>Last Name:<span>{` ${userLastName}`}</span>
            <Link 
                to="/settings"
                type="button"
                >Сменить Фамилию</Link>
          </h5>


          

        </UserData>
    </CenterContent>
  )
}
const CenterContent = styled.div`
  margin: 0 auto;
`

const UserData = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a{
    display: block !important;
  }

`
export {CenterContent};

export default Profile