import React, { useState } from 'react'
import { Container,Button ,Modal,Form } from 'react-bootstrap'
import './_screen.scss'


const PagesScreen = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="pages">
            <Container>
                <div className="pages__header">
                    <Button onClick={handleShow}>Create New Page</Button>    
                </div>
                {console.log(show)}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create New Page</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="pageName">Page Information</label>
                                <input type="text" name="pageName" placeholder="Page Name (required)" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <input type="text" name="category" placeholder="Category (required)" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea rows={3} type="text" name="description" placeholder="Description" />
                            </div>
                            <Button onClick={handleClose}>
                            Create
                            </Button>
                        </form>
                    </div>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    )
}

export default PagesScreen
