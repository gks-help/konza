import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
export default class DashboardCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>

                <form class="kt-form">
                    <div class="kt-portlet__body">

                        <div class="row">
                            <div class="col-md-12" style={{ "padding-bottom": "10px" }}>
                                <div class="kt-login__divider">
                                    <div class="kt-divider">
                                        <span></span>
                                        <span><b> Patient Demographics </b> </span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Last Name <span class="redClass" > * </span>  </label>
                                    <input type="email"
                                        class="form-control" aria-describedby="emailHelp" placeholder="Enter Last Name"
                                        onChange={e => {
                                            this.setState({ lastname: e.target.value })
                                        }} />
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>First Name  <span class="redClass" > * </span> </label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter First Name"
                                        onChange={e => {
                                            this.setState({ firstname: e.target.value })
                                        }}
                                    />

                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>D.O.B <span class="redClass" > * </span>  </label>

                                    <div class="input-group date">


                                        <input type="email"
                                            class="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="MM"
                                            onChange={e => {
                                                this.setState({ mm: e.target.value })
                                            }}
                                        />
                                        <input type="email"
                                            class="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="DD"
                                            onChange={e => {
                                                this.setState({ dd: e.target.value })
                                            }}
                                        />
                                        <input type="email"
                                            class="form-control"
                                            aria-describedby="emailHelp"
                                            placeholder="YYYY"
                                            onChange={e => {
                                                this.setState({ yyyy: e.target.value })
                                            }}
                                        />


                                    </div>





                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Gender <span class="redClass" > * </span>  </label>
                                    <div class="kt-radio-inline" style={{ "padding-top": "10px" }}>
                                        <label class="kt-radio kt-radio--bold kt-radio--success">
                                            <input type="radio" name="radio6" /> Male
                                            <span></span>
                                        </label>
                                        <label class="kt-radio kt-radio--bold kt-radio--brand">
                                            <input type="radio" name="radio6" /> Female
                                            <span></span>
                                        </label>

                                        <label class="kt-radio kt-radio--bold ">
                                            <input type="radio" name="radio6" /> Other
                                            <span></span>
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div class="col-md-12" style={{ "padding-bottom": "10px", "padding-top": "10px" }}>
                                <div class="kt-login__divider">
                                    <div class="kt-divider">
                                        <span></span>
                                        <span><b class="row" > Additional Demographics  </b>  </span>
                                        <span></span>
                                    </div>
                                </div>

                            </div>


                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="email"
                                        class="form-control" aria-describedby="emailHelp" placeholder="Enter Address"
                                        onChange={e => {
                                            this.setState({ lastname: e.target.value })
                                        }}
                                    />

                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>City</label>
                                    <input type="email"
                                        class="form-control" aria-describedby="emailHelp" placeholder="Enter City"
                                        onChange={e => {
                                            this.setState({ lastname: e.target.value })
                                        }}
                                    />

                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>State</label>
                                    <input type="email"
                                        class="form-control" aria-describedby="emailHelp" placeholder="Enter State"
                                        onChange={e => {
                                            this.setState({ lastname: e.target.value })
                                        }}
                                    />

                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Zip</label>
                                    <input type="email"
                                        class="form-control" aria-describedby="emailHelp" placeholder="Enter Zip"
                                        onChange={e => {
                                            this.setState({ lastname: e.target.value })
                                        }}
                                    />





                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input type="email"
                                        class="form-control" aria-describedby="emailHelp" placeholder="Enter Phone"
                                        onChange={e => {
                                            this.setState({ lastname: e.target.value })
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email"
                                        class="form-control" aria-describedby="emailHelp" placeholder="Enter Email"
                                        onChange={e => {
                                            this.setState({ lastname: e.target.value })
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>Social Security Number </label>
                                    <input type="email"
                                        minlength={9}
                                        maxlength={9}
                                        pattern="[0-9]*"
                                        class="form-control" aria-describedby="emailHelp" placeholder="Enter SSN"
                                        onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
                                        onChange={e => {
                                            this.setState({ lastname: e.target.value })
                                        }}
                                    />
                                </div>
                            </div>


                            <br></br>
                            <br></br>
                            <div class="col-md-12" style={{ "padding-bottom": "10px", "padding-top": "10px" }}>
                                <div class="kt-login__divider">
                                    <div class="kt-divider">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label>eHealth Exchange</label>

                                    <Autocomplete
                                        size="small"
                                        multiple
                                        limitTags={2}
                                        id="multiple-limit-tags"
                                        options={top100Films}
                                        getOptionLabel={(option) => option.title}
                                        defaultValue={[]}
                                        renderInput={(params) => (
                                            <TextField {...params} variant="outlined" label="" placeholder=" Please Select   Facility" />
                                        )}
                                    />



                                </div>
                            </div>


                        </div>

                        <div class="row">
                            {/* <div class="col-md-6 row">
                   <div class="col-md-12" style={{"padding-bottom":"10px"}}>
                              <div class="kt-login__divider">
                                    <div class="kt-divider">
                                    <span></span>
                                    <span><b> MRN </b> </span>
                                    <span></span>
                                  </div>
                              </div>
                    </div> 
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>MRN Root</label>
                        <input type="name" 
                        class="form-control"
                         aria-describedby="emailHelp" placeholder="Enter MRN Root" 
                         onChange={e =>{
                          this.setState({mrnRoot: e.target.value})
                         }}
                         />
                        
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label> MRN Extension</label>
                        <input type="email" 
                        class="form-control" aria-describedby="emailHelp" placeholder="Enter MRN Extension" 
                        onChange={e =>{
                          this.setState({mrnExt: e.target.value})
                         }}/>
                        
                      </div>
                    </div>

                    
                    </div> */}


                            {/* <div class="col-md-6 row">

                    <div class="col-md-12" style={{"padding-bottom":"10px"}}>
                              <div class="kt-login__divider">
                                    <div class="kt-divider">
                                    <span></span>
                                    <span> <b> Encounted With in Date Range </b> </span>
                                    <span></span>
                                  </div>
                              </div>
                    </div>


                     
                 
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Start Date</label>
                        <div class="input-group date">
                          <DayPickerInput
                            style={{ "width": "250px" }}
                            class="form-control"
                            onChange={this.myChangeHandler}
                            formatDate={formatDate}
                            format='dd/MM/yyyy'
                            placeholder="DD/MM/YYYY"
                            onDayChange={e => {
                              var date = new Date(e);
                              let mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                                day = ("0" + date.getDate()).slice(-2);
                              let dob = [day, mnth, date.getFullYear()].join("/");
                              this.setState({ startdate: dob })
                            }}
                          />
                        </div>
                        
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label>End Date</label>
                        <div class="input-group date">
                          <DayPickerInput
                            style={{ "width": "250px" }}
                            class="form-control"
                            onChange={this.myChangeHandler}
                            formatDate={formatDate}
                            format='dd/MM/yyyy'
                            placeholder="DD/MM/YYYY"
                            onDayChange={e => {
                              var date = new Date(e);
                              let mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                                day = ("0" + date.getDate()).slice(-2);
                              let dob = [day, mnth, date.getFullYear()].join("/");
                              this.setState({ enddate: dob })
                            }}
                          />
                        </div>
                        
                      </div>
                    </div>
                    </div> */}
                        </div>


                    </div>
                    <div class="kt-portlet__foot">
                        <div class="kt-form__actions">
                            <button type="reset" class="btn btn-primary" onClick={this.submitCreate} > Search </button> &nbsp;
                            <button type="reset" class="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </form>




            </>
        );
    }
}



// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'Advent Health System', id: 1 },
    { title: 'CareAlign Exchange', id: 2 },
  
  ];
  
