import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import "./_createpage.scss";

const CreatePage = (props) => {
  const [data, setData] = useState({
    pageName: "",
    description: "",
  });
  const handleInput = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };
  function createPageSubmit(e) {
    e.preventDefault();
    axios
      .post(
        `http://localhost:3001/page/`,
        {
          name: data.pageName,
          description: data.description,
        },
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      )
      .then((res) => {
        setShow(false);
        console.log(res.data);
      });
  }

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
              <form onSubmit={createPageSubmit}>
                <div className="form-group">
                  <label htmlFor="pageName">Page Information</label>
                  <input
                    type="text"
                    id="pageName"
                    value={data.pageName}
                    onChange={(e) => handleInput(e)}
                    placeholder="Page Name (required)"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    rows={3}
                    type="text"
                    id="description"
                    value={data.description}
                    onChange={(e) => handleInput(e)}
                    placeholder="Description"
                  />
                </div>
                <Button type="submit" onClick={handleClose}>
                  Create
                </Button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  };
};

export default connect(mapStateToProps)(CreatePage);
