import React from 'react';
import Header from './Header';
import ListBtn from './ListBtn';
import styled from 'styled-components';
import { WrapMenu } from '../Dashboard/Dashboard';

const Menu = ({auth , setAuth}) => {
  return (
    <>
        <Header auth={auth} setAuth={setAuth}/>
        <WrapMenu> 
          <ListBtn />
        </WrapMenu>
    </>
  )
}

const WrapMenuItems = styled.div`
  display: flex;
`
const WrapSettingsValue = styled.div`
  padding: 10px;
`
export {WrapMenuItems , WrapSettingsValue};
export default Menu