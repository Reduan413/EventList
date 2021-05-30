import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import RichTextEditor from "react-rte";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./_profile.scss";

const Profile = () => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(
    RichTextEditor.createEmptyValue()
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                  <form>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              for="input-username"
                            >
                              Username
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-alternative"
                              id="input-username"
                              name="userName"
                              placeholder="Username"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              for="input-email"
                            >
                              Email address
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-alternative"
                              id="input-email"
                              name="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              for="input-name"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-alternative"
                              id="input-name"
                              name="Name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
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
                      </div>
                    </div>
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              for="input-address"
                            >
                              Address
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-alternative"
                              id="input-address"
                              name="address"
                              placeholder="Address"
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className="row">
                                <div className="col-lg-4">
                                  <div className="form-group focused">
                                    <label className="form-control-label" for="input-city">City</label>
                                    <input type="text" className="form-control form-control-alternative" id="input-city" name="city"  placeholder="City" />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="form-group focused">
                                    <label className="form-control-label" for="input-country">Country</label>
                                    <input type="text" className="form-control form-control-alternative" id="input-country" name="country"  placeholder="Country" />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="form-group">
                                    <label className="form-control-label" for="input-country">Postal code</label>
                                    <input type="text" className="form-control form-control-alternative" id="input-postalcode" name="postalcode"  placeholder="Postal code" />
                                  </div>
                                </div>
                              </div> */}
                    </div>
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">About You</h6>
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
                      Username :{" "}
                    </label>
                    <h6 style={{ marginLeft: "50px" }}>Hello Style!</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" for="input-email">
                      Email :
                    </label>
                    <h6 style={{ marginLeft: "30px" }}>Hello Style!</h6>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4" />

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
              {/* <div className="row">
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label className="form-control-label" for="input-city">
                      City :
                    </label>
                    <h6 style={{ marginLeft: "30px" }}>Hello Style!</h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label className="form-control-label" for="input-country">
                      Country :
                    </label>
                    <h6 style={{ marginLeft: "30px" }}>Hello Style!</h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="form-control-label" for="input-country">
                      Postal Code :
                    </label>
                    <h6 style={{ marginLeft: "30px" }}>Hello Style!</h6>
                  </div>
                </div>
              </div> */}
            </div>
            <hr className="my-4" />

            <h6 className="heading-small text-muted mb-4">About me</h6>
            <div className="pl-lg-4">
              <div className="form-group focused">
                <label>About Me : </label>
                <p style={{ marginLeft: "30px" }}>Hello Style!</p>
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
export default connect(mapStateToProps)(Profile);
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
