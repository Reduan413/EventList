import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import RichTextEditor from "react-rte";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const PageProfile = (props) => {
  const [description, setDescription] = useState(
    RichTextEditor.createEmptyValue()
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [pageData, setPageData] = useState([]);
  const [singlePageData, setSinglePageData] = useState({});

  const handleInput = (e) => {
    setSinglePageData({ ...singlePageData, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    const newdata = { ...singlePageData };
    newdata["img"] = e.target.files[0];
    setSinglePageData(newdata);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:3001/page/${props.data._id}`, {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        })
        .then((res) => {
          {
            console.log(res.data, "helo...................");
          }
          setPageData(res.data.result);
        });
    };
    fetchData();
  }, []);

  function editPageSubmit(e, id) {
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append("name", singlePageData.name);
    // formData.append("description", singlePageData.description);
    // formData.append("img", singlePageData.img);
    // axios
    //   .put(`http://localhost:3001/page/${props.data._id}`, formData, {
    //     headers: {
    //       Authorization: `Bearer ${props.token}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
  }
  console.log(props.data._id);
  console.log(pageData);
  console.log(singlePageData);
  return (
    <div className="col-xl-12 order-xl-1">
      <div className="card shadow">
        <div className="card-header bg-white border-0">
          <div className="row align-items-center">
            <div className="col-8">
              <h3 className="mb-0">My account</h3>
            </div>
            <div className="col-4 text-right">
              <a
                href="#!"
                className="btn btn-sm btn-primary"
                onClick={handleShow}
              >
                Settings
              </a>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="modal-title">Edit Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="card-body">
                  <form onSubmit={editPageSubmit} encType="multipart/form-data">
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              for="input-pagename"
                            >
                              Page Name
                            </label>
                            <input
                              type="text"
                              value={singlePageData.title}
                              className="form-control form-control-alternative"
                              id="input-pagename"
                              onChange={handleInput}
                              name="name"
                              placeholder="Page Name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              for="input-profilephoto"
                            >
                              Profile Photo
                            </label>
                            <input
                              type="file"
                              className=""
                              id="input-profilephoto"
                              name="profilephoto"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                        {/* <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-coverphoto">Cover Photo</label>
                                <input type="file" className="" id="input-coverphoto" name="coverphoto"  placeholder="Username" />
                              </div>
                            </div> */}
                      </div>
                    </div>
                    <hr className="my-4" />

                    {/* <h6 className="heading-small text-muted mb-4">Contact information</h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-address">Address</label>
                                <input type="text" className="form-control form-control-alternative" id="input-address" name="address"  placeholder="Address" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4"/> */}

                    <h6 className="heading-small text-muted mb-4">
                      About Page
                    </h6>
                    <div className="pl-lg-4">
                      <RichTextEditor
                        value={description}
                        toolbarConfig={toolbarConfig}
                        onChange={setDescription}
                      />
                    </div>
                    <div className="text-center">
                      <Button onClick={handleClose}>Update</Button>
                    </div>
                  </form>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div className="card-body">
          <form>
            <h6 className="heading-small text-muted mb-4">User information</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group focused">
                    <label className="form-control-label" for="input-username">
                      Page Name:{" "}
                    </label>
                    <h6 style={{ marginLeft: "50px" }}>{pageData[0]?.name}</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" for="input-email">
                      Admin :
                    </label>
                    <h6 style={{ marginLeft: "30px" }}>
                      {pageData[0]?.admin.username}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <hr className="my-4" />

            <h6 className="heading-small text-muted mb-4">
              Contact information
            </h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group focused">
                    <label className="form-control-label" for="input-address">
                      Address :
                    </label>
                    <h6 style={{ marginLeft: "30px" }}>Hello Style!</h6>
                  </div>
                </div>
              </div>
            </div> */}
            <hr className="my-4" />

            <h6 className="heading-small text-muted mb-4">About me</h6>
            <div className="pl-lg-4">
              <div className="form-group focused">
                <label>About Page : </label>
                <p style={{ marginLeft: "30px" }}>{pageData[0]?.discription}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token,
  };
};
export default connect(mapStateToProps)(PageProfile);

const toolbarConfig = {
  display: [
    "INLINE_STYLE_BUTTONS",
    "BLOCK_TYPE_BUTTONS",
    "BLOCK_TYPE_DROPDOWN",
    "HISTORY_BUTTONS",
  ],
  INLINE_STYLE_BUTTONS: [
    { label: "Bold", style: "BOLD", className: "custom-css-class" },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" },
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: "Normal", style: "unstyled" },
    { label: "Heading Large", style: "header-one" },
    { label: "Heading Medium", style: "header-two" },
    { label: "Heading Small", style: "header-three" },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: "UL", style: "unordered-list-item" },
    { label: "OL", style: "ordered-list-item" },
  ],
};
