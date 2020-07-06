import React, { useState } from 'react';
import '../css/AddToDocss.css';
import add from '../img/add.png';
import Modals from './Modal';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';

function AddToDo(props) {
      const [NewList] = useState("MMONN")
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      return (
            <>
                  <div className="addTodo">
                        <form onSubmit={props.onSubmit}>
                              <input value={props.value}
                                    onChange={props.onChange}
                                    placeholder="add a new todo..." />
                        </form>
                        <button type="submit" className="add" onClick={props.onSubmit} >
                              <img src={add} />
                              <p>Add to do</p>
                        </button>
                  </div>


                  {/* <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                              <Modal.Title>Add new to do list</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                              <form onSubmit={props.onSubmit}>
                                    <input value={props.value}
                                          onChange={props.onChange}
                                          placeholder="add a new todo..." />
                              </form>
                        </Modal.Body>

                        <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                    Close
                               </Button>
                              <Button variant="primary" onClick={props.onSubmit}>
                                    Save Changes
                              </Button>
                        </Modal.Footer>
                  </Modal> */}
            </>
      )
}
export default AddToDo;
