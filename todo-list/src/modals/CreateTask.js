import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const CreateTaskPopup = ({modal,toggle,save}) => {
    const [taskName, setTaskName]=useState('');
    const [description, setDescription]=useState('');

    const handlechange=(e)=>{
      const name = e.target.name
      const value = e.target.value

      if(name === "taskName"){
        setTaskName(value)
      }else{
        setDescription(value)
      }
    }

      const handleSave=()=>{
         let taskObj = {}
         taskObj["Name"] = taskName
         taskObj["Description"] = description
         save(taskObj )
      }
        return (
        <div>
               <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
         
            <div className = "form-group">
                <label>Task Name</label>
                <input type='text' className = "form-control" value={taskName} onChange={handlechange} name="taskName"/>
            </div>
            <div className = "form-group mt-2">
                <label>Description</label>
                <textarea rows= "5" className = "form-control" value={description} onChange={handlechange} name="description"></textarea>
            </div>
        
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        </div>
    );
};

export default CreateTaskPopup;
