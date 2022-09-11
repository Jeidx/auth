import React,{useState} from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import Dashboard from './components/Dashboard/Dashboard';
import Faq from './components/FAQ/Faq';
import MainPage from './components/MainPage/MainPage'
import Menu from './components/Menu/Menu';
import Pass from './components/Pass/Pass';
import Profile from './components/Profile/Profile';
import Settings from './components/SettingsPage/Settings';

const DataApp = ({setAppTheme , appTheme}) => {
  const [userData , setUsetData] = useState({loggin:'admin' , password : '123' , firstName : 'Гена' , secondName : 'Букин'});
  const [auth , setAuth] = useState(false);

  return (
      <Routes>
        <Route path='/' element={<MainPage auth={auth} setAuth={setAuth} loggin={userData.loggin} password={userData.password}/>}/>
        <Route path='/pass' element={<Pass auth={auth} setAuth={setAuth} newPass={setUsetData} loggin={userData.loggin} password={userData.password}/>}/>
        <Route path='menu' element={<Menu setAuth={setAuth} auth={auth}/>} />
        <Route path="/dashboard" element={<Dashboard 
            setAuth={setAuth}
            auth={auth}/>}/>
        <Route path="/settings" element={<Settings 
            firstName={userData.firstName} 
            secondName={userData.secondName} 
            chengeFunc={setUsetData}
            setAuth={setAuth}
            auth={auth}
            setAppTheme={setAppTheme}
            appTheme={appTheme}
            />}/>
        <Route path="/faq"element={<Faq
            setAuth={setAuth}
            auth={auth}
         />}/>
        <Route path="/profile" 
            element={<Profile 
            userLoggin={userData.loggin} 
            userPass={userData.password} 
            userFirstName={userData.firstName}
            userLastName={userData.secondName}
            setAuth={setAuth}
            auth={auth}
            />}/>
      </Routes>
  );
}

function App() {
  const [appTheme , setAppTheme] = useState(false);

  return(
      <GlobalStyled dayNightTheme={appTheme}>
        <DataApp
        setAppTheme={setAppTheme} 
        appTheme={appTheme}/>
      </GlobalStyled> 
  )
}
const DisplayFlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
const GlobalStyled = styled.div`
  min-height: 100vh;
  color: ${props => props.dayNightTheme === true ? "#fff" : "#000"};
  background-color : ${props => props.dayNightTheme === true ? "#000" : "#fff"};
`

export {DisplayFlexContainer};
export default App;
