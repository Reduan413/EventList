import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container,Button ,Modal,Form } from 'react-bootstrap'

const PageProfile = () => {
  const [show, setShow] = useState(false);

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
              <a href="#!" className="btn btn-sm btn-primary" onClick={handleShow}>Settings</a>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title className="modal-title">Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="card-body">
                      <form>
                        <h6 className="heading-small text-muted mb-4">User information</h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-pagename">Page Name</label>
                                <input type="text" className="form-control form-control-alternative" id="input-pagename" name="pagename"  placeholder="Page Name" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-control-label" for="input-admin">Admin</label>
                                <input type="text" className="form-control form-control-alternative" id="input-admin" name="admin"  placeholder="Admin" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                          <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-profilephoto">Profile Photo</label>
                                <input type="file" className="" id="input-profilephoto" name="profilephoto"  placeholder="Username" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-coverphoto">Cover Photo</label>
                                <input type="file" className="" id="input-coverphoto" name="coverphoto"  placeholder="Username" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4"/>

                        <h6 className="heading-small text-muted mb-4">Contact information</h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group focused">
                                <label className="form-control-label" for="input-address">Address</label>
                                <input type="text" className="form-control form-control-alternative" id="input-address" name="address"  placeholder="Address" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
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
                          </div>
                        </div>
                        <hr className="my-4"/>
                      
                        <h6 className="heading-small text-muted mb-4">About Page</h6>
                        <div className="pl-lg-4">
                          <div className="form-group focused">
                            <label>About Me</label>
                            <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about page ..."></textarea>
                          </div>
                        </div>
                        <div className="text-center">
                          <Button onClick={handleClose} >
                          Update
                          </Button>
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
                    <label className="form-control-label" for="input-username">Page Name: </label>
                    <h6 style={{marginLeft: "50px"}}>Hello Style!</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-control-label" for="input-email">Admin :</label>
                    <h6 style={{marginLeft: "30px"}}>Hello Style!</h6>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4"/>

            <h6 className="heading-small text-muted mb-4">Contact information</h6>
            <div className="pl-lg-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group focused">
                    <label className="form-control-label" for="input-address">Address :</label>
                      <h6 style={{marginLeft: "30px"}}>Hello Style!</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label className="form-control-label" for="input-city">City :</label>
                    <h6 style={{marginLeft: "30px"}}>Hello Style!</h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group focused">
                    <label className="form-control-label" for="input-country">Country :</label>
                    <h6 style={{marginLeft: "30px"}}>Hello Style!</h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="form-group">
                    <label className="form-control-label" for="input-country">Postal Code :</label>
                    <h6 style={{marginLeft: "30px"}}>Hello Style!</h6>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-4"/>
           
            <h6 className="heading-small text-muted mb-4">About me</h6>
            <div className="pl-lg-4">
              <div className="form-group focused">
                <label>About Page : </label>
                <p style={{marginLeft: "30px"}}>Hello Style!</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default PageProfile
