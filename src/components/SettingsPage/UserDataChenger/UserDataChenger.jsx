import React ,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { WrapForm } from '../../MainPage/MainPage';
import styled from 'styled-components';
import ModalComplate from './ModalComplate/ModalComplate';

const UserDataChenger = ({firstName, secondName, chengeFunc}) => {

    const [newName , setNewName] = useState('');
    const [newSecondName , setNewSecondName] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function submitChengeUserData(){
        if(newName.length >=1){
            handleOpen();
            chengeFunc((actual) => {
                return {
                    ...actual , firstName: actual.firstName = newName
                }
            });
        }
        if(newSecondName.length >=1){
            handleOpen();
            chengeFunc((actual) => {
                return {
                    ...actual , secondName: actual.secondName = newSecondName
                }
            });
        }
    }


  return (
    <div>    

    <WrapForm>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword1">
                <Form.Label>Ваше имя: <ColorizedData>{firstName}</ColorizedData> / введите новое имя (max 10 символов)</Form.Label>
                <Form.Control
                    onChange={(e) => setNewName(newName => newName = e.target.value)}
                    type="text" 
                    placeholder="Name"
                    maxLength="10"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Ваша фамилия: <ColorizedData>{secondName}</ColorizedData> / введите новую фамилию (max 10 символов)</Form.Label>
                <Form.Control 
                    onChange={(e) => setNewSecondName(newSecondName => newSecondName = e.target.value)}
                    type="text" 
                    placeholder="LastName"
                    maxLength="10"/>
            </Form.Group>
            
            <ModalComplate keepMounted open={open} handleClose={handleClose} submitChengeUserData={submitChengeUserData}/>

        </Form>
    </WrapForm>
    </div>
  )
}

const ColorizedData = styled.span`
    color:red;
`




export default UserDataChenger