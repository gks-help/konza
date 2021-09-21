import React from "react";

export default class PatientCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>

                <div class="row">
                    <div class="col-md-12">
                        <div class="kt-portlet">
                            <table style={{ "margin": " 22px" }}>
                                <tr>
                                    <td> Last Name </td> <td> Previous Name </td> <td> Gender</td>  <td>MRN</td> <td> Address</td>
                                </tr>
                                <tr style={{ "font-weight": "bold" }}>
                                    <td style={{ "padding-bottom": "15px"}}> Doe </td>
                                    <td style={{ "padding-bottom": "15px"}}>  </td>
                                    <td style={{ "padding-bottom": "15px"}}>Male</td>
                                    <td style={{ "padding-bottom": "15px"}}>MRN 154967</td>
                                    <td style={{ "padding-bottom": "15px"}}> 1234 1st Street South</td>
                                </tr>
                                <tr >

                                </tr>
                                <tr>
                                    <td> First Name  </td> <td> Date of Birth </td> <td> Gender Identity</td>  <td>Email Address</td> <td> City </td>
                                </tr>
                                <tr style={{ "font-weight": "bold" }}>
                                    <td style={{ "padding-bottom": "15px"}}> John </td>
                                    <td style={{ "padding-bottom": "15px"}}> 6/14/2010 (10 Years-Old) </td>
                                    <td style={{"padding-bottom": "15px"}}></td>
                                    <td style={{ "padding-bottom": "15px"}}>test@gmail.com</td>
                                    <td style={{ "padding-bottom": "15px"}}> Kansas City</td>
                                </tr>
                                <tr>

                                </tr>
                                <tr>
                                    <td> Middle Name  </td> <td> Race </td> <td> Sexual Orientation</td>  <td>Phone Number </td> <td> State </td>
                                </tr>
                                <tr style={{ "font-weight": "bold" }}>
                                    <td style={{ "padding-bottom": "15px"}}>  </td>
                                    <td style={{ "padding-bottom": "15px"}}> White </td>
                                    <td style={{ "padding-bottom": "15px"}}></td>
                                    <td style={{ "padding-bottom": "15px"}}>(620) 870 1300</td>
                                    <td style={{ "padding-bottom": "15px"}}> Missouri</td>
                                </tr>
                                <tr>

                                </tr>
                                <tr>
                                    <td> Suffix </td> <td> Preferred Language </td> <td> Sex (Assigned at Birth)</td>  <td>Phone Number Type</td> <td> Zip </td>
                                </tr>
                                <tr style={{ "font-weight": "bold" }}>
                                    <td>  </td>
                                    <td>  </td>
                                    <td></td>
                                    <td> </td>
                                    <td style={{ "padding-bottom": "15px"}}> 66118</td>
                                </tr>
                                <tr>

                                </tr>

                            </table>
                            {/* <div class="row" style={{ "padding": "5px", "padding-bottom": "10px" }}>
                                <div class="col-md-2">

                                    <div class="form-group">
                                        <label>  Last Name : </label> <br></br>
                                        <label>   <b>  Doe </b> </label> <br></br>
                                    </div>
                                    <div class="form-group">
                                        <label>  First Name : </label> <br></br>
                                        <label>   <b> John </b> </label> <br></br>
                                    </div>
                                    <div class="form-group">
                                        <label>  Middle Name  : </label> <br></br>
                                        <label>   <b>  </b> </label> <br></br>
                                    </div>
                                    <div class="form-group">
                                        <label>  Suffix  : </label> <br></br>
                                        <label>   <b>  </b> </label> <br></br>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label>  Previous Name : </label> <br></br>
                                        <label>   <b> </b> </label> <br></br>
                                    </div>
                                    <div class="form-group">
                                        <label>  Date of Birth : </label> <br></br>
                                        <label>   <b>  6/14/2010 (10 Years-Old)  </b> </label> <br></br>
                                    </div>
                                    <div class="form-group">
                                        <label> Race : </label> <br></br>
                                        <label>   <b>  White  </b> </label> <br></br>
                                    </div>
                                    <div class="form-group">
                                        <label> Preferred Language : </label> <br></br>
                                        <label>   <b>    </b> </label> <br></br>
                                    </div>

                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label> Gender : </label> <br></br>
                                        <label>   <b> Male</b> </label> <br></br>
                                    </div>

                                    <div class="form-group">
                                        <label> Gender Identity : </label> <br></br>
                                        <label>   <b> </b> </label> <br></br>
                                    </div>
                                    <div class="form-group">
                                        <label> Sexual Orientation : </label> <br></br>
                                        <label>   <b>  </b> </label> <br></br>
                                    </div>
                                    <div class="form-group">
                                        <label> Sex (Assigned at Birth) : </label> <br></br>
                                        <label>   <b>  </b> </label> <br></br>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label>  MRN: </label> <br></br>
                                        <label>   <b> MRN 154967  </b> </label> <br></br>
                                    </div>
                                    <div class="form-group">
                                        <label>  Email Address : </label> <br></br>
                                        <label>   <b> test@gmail.com</b> </label> <br></br>
                                    </div>
                                    <div class="form-group">
                                        <label> Phone Number : </label> <br></br>
                                        <label>   <b>(620) 870 1300 </b> </label> <br></br>
                                    </div>
                                    <div class="form-group">
                                        <label>  Phone Number Type : </label> <br></br>
                                        <label>   <b>  </b> </label> <br></br>
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                        <label style={{ "margin-bottom": " 0px" }}>  Address : </label> <br></br>
                                        <label style={{ "margin-bottom": " 0px" }} >   <b> 1234 1st Street South </b> </label> <br></br>
                                    </div>
                                    <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                        <label style={{ "margin-bottom": " 0px" }}>  City : </label> <br></br>
                                        <label style={{ "margin-bottom": " 0px" }} >   <b> Kansas City </b> </label> <br></br>
                                    </div>
                                    <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                        <label style={{ "margin-bottom": " 0px" }}>  State : </label> <br></br>
                                        <label style={{ "margin-bottom": " 0px" }} >   <b> Missouri </b> </label> <br></br>
                                    </div>
                                    <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                        <label style={{ "margin-bottom": " 0px" }}>  Zip : </label> <br></br>
                                        <label style={{ "margin-bottom": " 0px" }} >   <b> 66118 </b> </label> <br></br>
                                    </div>


                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>





            </>
        );
    }
}




