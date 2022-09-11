import React ,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { WrapForm } from '../MainPage/MainPage';
import {Link} from "react-router-dom";
import Header from '../Menu/Header';
import PassChangeModal from './PassChangeModal/PassChangeModal';

const Pass = ({loggin , password , newPass , auth , setAuth}) => {

    const [oldPass , setOldPass] = useState('');
    const [createNewPass , setCreateNewPassNewPass] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function checkOldPassIsTrue(e){
        e.preventDefault();
        if(password === oldPass){
            handleOpen();
            newPass((actual) => {
                return {
                    ...actual , password: actual.password = createNewPass
                }
            });
        }
    }

  return (
    <div>    
        {
            auth ? <Header auth={auth} setAuth={setAuth}/> : null
        }
    
    <WrapForm>
        <Form>
            {
               auth ?  null : <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address :</Form.Label>
                 <Form.Control 
                     placeholder="Enter email" 
                     readOnly
                     value={loggin}/>
             </Form.Group>
                
            }


            <Form.Group className="mb-3" controlId="formBasicPassword1">
                <Form.Label>Enter your Password :</Form.Label>
                <Form.Control
                    onChange={(e) => setOldPass(oldPass => oldPass = e.target.value)}
                    type="password" 
                    placeholder="Password"
                    maxLength="15" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Enter your New Password (max 15 символов):</Form.Label>
                <Form.Control 
                    onChange={(e) => setCreateNewPassNewPass(createNewPass => createNewPass = e.target.value)}
                    type="password" 
                    placeholder="Password"
                    maxLength="15" />
            </Form.Group>

            <Button 
                onClick={checkOldPassIsTrue}>Submit 
            </Button>
            {
                auth ? null : <Link to="/" className="btn btn-warning" >Back to Loggin</Link>
            }
            <p>props пас: {password}</p>

            <PassChangeModal handleOpen={handleOpen} open={open} handleClose={handleClose}/>
        </Form>
    </WrapForm>
    </div>
  )
}

export default Pass;
