import React, { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Container,Button ,Modal,Form } from 'react-bootstrap'
import './_profile.scss'

const Profile = () => {
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
                                    <label className="form-control-label" for="input-username">Username</label>
                                    <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value=""/>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label className="form-control-label" for="input-email">Email address</label>
                                    <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="Email"/>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label" for="input-first-name">First name</label>
                                    <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value=""/>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label" for="input-last-name">Last name</label>
                                    <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value=""/>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group focused">
                                    <label className="form-control-label" for="input-profile-photo">Profile Photo</label>
                                    <input type="file" id="profileImg" className=""  value=""/>
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
                                    <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value="" type="text"/>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="form-group focused">
                                    <label className="form-control-label" for="input-city">City</label>
                                    <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value=""/>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="form-group focused">
                                    <label className="form-control-label" for="input-country">Country</label>
                                    <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value=""/>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="form-group">
                                    <label className="form-control-label" for="input-country">Postal code</label>
                                    <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr className="my-4"/>
                          
                            <h6 className="heading-small text-muted mb-4">About me</h6>
                            <div className="pl-lg-4">
                              <div className="form-group focused">
                                <label>About Me</label>
                                <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ..."></textarea>
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
                        <label className="form-control-label" for="input-username">Username</label>
                        <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value=""/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label" for="input-email">Email address</label>
                        <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="Email"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-first-name">First name</label>
                        <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value=""/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-last-name">Last name</label>
                        <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value=""/>
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
                        <input id="input-address" className="form-control form-control-alternative" placeholder="Home Address" value="" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-city">City</label>
                        <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value=""/>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group focused">
                        <label className="form-control-label" for="input-country">Country</label>
                        <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" value=""/>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" for="input-country">Postal code</label>
                        <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code"/>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4"/>
               
                <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <div className="form-group focused">
                    <label>About Me</label>
                    <textarea rows="4" class="form-control form-control-alternative" placeholder="A few words about you ..."></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}

export default Profile
