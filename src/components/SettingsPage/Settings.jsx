import React from 'react'
import { WrapMenuItems , WrapSettingsValue} from '../Menu/Menu';
import Header from '../Menu/Header';
import ListBtn from '../Menu/ListBtn';
import ThemeSwitch from './ThemeSwitcher/ThemeSwitch';
import UserDataChenger from './UserDataChenger/UserDataChenger';
import { WrapMenu } from '../Dashboard/Dashboard';

const Settings = ({firstName , secondName , chengeFunc , setAuth , auth , setAppTheme , appTheme}) => {
  return (
    <>

    <Header
      setAuth={setAuth}
      auth={auth} />
      <WrapMenu>
            <ListBtn />
              <WrapSettingsValue>
                  <ThemeSwitch setAppTheme={setAppTheme} appTheme={appTheme}/>
                  <p>Смена Данных пользователя :</p>
                  <UserDataChenger firstName={firstName} secondName={secondName} chengeFunc={chengeFunc}/>
              </WrapSettingsValue>
      </WrapMenu>
 </>
  )
}

// const WrapSettingsValue = stad.div`
//   padding: 10px;
// `


export default Settings