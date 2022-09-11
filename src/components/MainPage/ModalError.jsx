import React, { useState , useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

function ModalError({data , mail , pass}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [btnRedShow , setBtnRedShow] = useState("none");
  // const [redirect , setRedirect] = useState(false);
  // function redirected(){
  //   setRedirect(redirect => redirect = true)
  // }

  function createRedBtnPlusErrorModal(){
      handleShow();
      setBtnRedShow(btnRedShow => btnRedShow = "inline-block")
  }

  return (
    <>
      {
        data ? <Link className="btn btn-primary" to='/menu'>Ввести</Link> : <Link to="/" onClick={createRedBtnPlusErrorModal} className="btn btn-primary" >Ввести</Link>
      }
        <Link style={{"display":`${btnRedShow}`}} to="/pass" className="btn btn-danger">забыл пароль</Link>
      
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              Имя пользователя или пароль введены не верно
          </Modal.Header>
          
        </Modal>
    </>
  );
}

export default ModalError;