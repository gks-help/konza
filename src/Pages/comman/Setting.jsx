import React from "react";

export default class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    new = ev => {
        ev.preventDefault();
        this.props.history.push({
            pathname: `/user/SecureAdd`,
            search: '',
            state: { listId: 0, vueId: 0, }
        });
    }
    render() {
        return (
            <>
                <div class="col-xl-12">
                    <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
                        <b> General</b>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Address Name:</div>
                            <div class="col-md-3"> Laura McCrary  </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Address:</div>
                            <div class="col-md-3"> laura.mccrary@khindirect.org  </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Receive Message Notification? :</div>
                            <div class="col-md-3">        <div class="kt-widget2__checkbox">
                                <label class="kt-checkbox kt-checkbox--solid kt-checkbox--single">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div> </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}>  Notification Email:</div>
                            <div class="col-md-3">
                                <input type="email"
                                    style={{ "height": "30px", "padding": "1px" }}
                                    class="form-control" aria-describedby="emailHelp"
                                    onChange={e => {
                                        this.setState({ lastname: e.target.value })
                                    }}
                                /> </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}>  Shared Users:</div>
                            <div class="col-md-3"> Laura McCrary (owner), Laura McCrary  </div>
                        </div>
                        <br></br>
                        <hr></hr>


                        <b> User Setting</b>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Default Mailbox:</div>
                            <div class="col-md-3">      <div class="kt-widget2__checkbox">
                                <label class="kt-checkbox kt-checkbox--solid kt-checkbox--single">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div> </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Message Signature:</div>
                            <div class="col-md-3"> 
                            
                                <textarea class="form-control" id="w3review" name="w3review" rows="4" cols="50">
                                    Laura McCrary EdD
                                    Executive Director, KHIN
                                    President & CEO, KONZA
                                    Imccrary@konza.org
                                    785-409-5200
                                </textarea>
                            </div>
                        </div>

                        <br></br>
                        <hr></hr>

                        <b> Provider Directory</b>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Publish ?:</div>
                            <div class="col-md-3">     <div class="kt-widget2__checkbox">
                                <label class="kt-checkbox kt-checkbox--solid kt-checkbox--single">
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                            </div>  </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> First Name:</div>
                            <div class="col-md-3">  
                             <input type="email"
                                style={{ "height": "30px", "padding": "1px" }}
                                class="form-control" aria-describedby="emailHelp"
                                onChange={e => {
                                    this.setState({ lastname: e.target.value })
                                }}
                            />  </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Last Name:</div>
                            <div class="col-md-3">  
                             <input type="email"
                                style={{ "height": "30px", "padding": "1px" }}
                                class="form-control" aria-describedby="emailHelp"
                                onChange={e => {
                                    this.setState({ lastname: e.target.value })
                                }}
                            /> </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Address 1:</div>
                            <div class="col-md-3">  
                            <input type="email"
                                style={{ "height": "30px", "padding": "1px" }}
                                class="form-control" aria-describedby="emailHelp"
                                onChange={e => {
                                    this.setState({ lastname: e.target.value })
                                }}
                            />
                            </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Address 2:</div>
                            <div class="col-md-3">  
                            <input type="email"
                                style={{ "height": "30px", "padding": "1px" }}
                                class="form-control" aria-describedby="emailHelp"
                                onChange={e => {
                                    this.setState({ lastname: e.target.value })
                                }}
                            />
                            </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> City & State:</div>
                            <div class="col-md-2">  
                                <input type="email"
                                    style={{ "height": "30px", "padding": "1px" }}
                                    class="form-control" aria-describedby="emailHelp"
                                    onChange={e => {
                                        this.setState({ lastname: e.target.value })
                                    }}
                                />
                            </div>
                            <div class="col-md-1">  
                                <input type="email"
                                    style={{ "height": "30px", "padding": "1px" }}
                                    class="form-control" aria-describedby="emailHelp"
                                    onChange={e => {
                                        this.setState({ lastname: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Zip:</div>
                            <div class="col-md-3">  
                            <input type="email"
                                style={{ "height": "30px", "padding": "1px" }}
                                class="form-control" aria-describedby="emailHelp"
                                onChange={e => {
                                    this.setState({ lastname: e.target.value })
                                }}
                            />
                            </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Phone Number:</div>
                            <div class="col-md-3">  
                            <input type="email"
                                style={{ "height": "30px", "padding": "1px" }}
                                class="form-control" aria-describedby="emailHelp"
                                onChange={e => {
                                    this.setState({ lastname: e.target.value })
                                }}
                            />
                            </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> NPI:</div>
                            <div class="col-md-3">  
                            <input type="email"
                                style={{ "height": "30px", "padding": "1px" }}
                                class="form-control" aria-describedby="emailHelp"
                                onChange={e => {
                                    this.setState({ lastname: e.target.value })
                                }}
                            />
                            </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Title:</div>
                            <div class="col-md-3">  
                            <input type="email"
                                style={{ "height": "30px", "padding": "1px" }}
                                class="form-control" aria-describedby="emailHelp"
                                onChange={e => {
                                    this.setState({ lastname: e.target.value })
                                }}
                            />
                            </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> DEA Number:</div>
                            <div class="col-md-3">  
                            <input type="email"
                                style={{ "height": "30px", "padding": "1px" }}
                                class="form-control" aria-describedby="emailHelp"
                                onChange={e => {
                                    this.setState({ lastname: e.target.value })
                                }}
                            />
                            </div>
                        </div>
                        <div class="row" style={{ "padding": "10px" }}>
                            <div class="col-md-3" style={{ "text-align": "end" }}> Specialties:</div>
                            <div class="col-md-3">  
                            <input type="email"
                                style={{ "height": "30px", "padding": "1px" }}
                                class="form-control" aria-describedby="emailHelp"
                                onChange={e => {
                                    this.setState({ lastname: e.target.value })
                                }}
                            />
                            </div>
                        </div>

                        <br></br>
                        <hr></hr>
                        <div class="kt-portlet__foot">
                  <div class="kt-form__actions">
                    <button type="reset" class="btn btn-primary"   onClick={this.submitCreate} > Save </button> &nbsp;
                    <button type="reset" class="btn btn-secondary">Cancel</button>
                  </div>
                </div>



                    </div>
                </div>
            </>
        );
    }
}




