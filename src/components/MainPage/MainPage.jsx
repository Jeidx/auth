import React , {useState, useEffect} from 'react';
import styled from 'styled-components';
import ModalError from './ModalError';

const MainPage = ({loggin , password , auth , setAuth}) => {
    const [mail , setMail] = useState('');
    const [pass , setPass] = useState('');

    useEffect(() => {
        mail === loggin  && pass === password ? setAuth(true) : setAuth(false);
    },[mail , pass])

  return (
    <WrapForm>
        <form>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input 
                placeholder={loggin}
                onChange={(e) => setMail(mail => mail = e.target.value)}
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                maxLength="15" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input 
                placeholder={password}
                onChange={(e) => setPass(pass => pass = e.target.value)}
                className="form-control" 
                id="exampleInputPassword1"
                maxLength="15" />
        </div>

        <ModalError data={auth} mail={mail} pass={pass}/>
        </form>

    </WrapForm>
  )
}

const WrapForm = styled.div`
    margin:0 auto;
    max-width: 500px;
`
export { WrapForm };
export default MainPage;
