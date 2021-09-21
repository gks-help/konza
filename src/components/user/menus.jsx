import React from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import 'react-day-picker/lib/style.css';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import ReactTable from "react-table";

import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import $ from "jquery";

function parseDate(str, format, locale) {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
        return parsed;
    }
    return undefined;
}
function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
}



class menus extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            patientShow: 0,
        }
    }
    handleChange = (e) => {
        const { checked } = e.target
        this.setState({ checked: checked })
    }

    render() {

        if (this.state.patientShow == 0) {
            return (
                <>

                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#kt_tabs_1_1">
                                <i class="flaticon-grid-menu-v2" ></i> Menu
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#kt_tabs_1_3">
                                <i class="flaticon-search"></i> Search
                            </a>
                        </li>

                    </ul>
                    <div class="tab-content " >

                        <div class="tab-pane active" id="kt_tabs_1_1" role="tabpanel">


                            <div class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
                                <div id="kt_aside_menu" class="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500">
                                    <ul class="kt-menu__nav " style={{ "height": "700px" }}>


                                        <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                            <a href="javascript:;" class="kt-menu__link kt-menu__toggle"><i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                                                <NavLink
                                                    class="kt-menu__link kt-menu__toggle"
                                                    to="/user/patient"
                                                    // onClick={ev => this.setState({patientShow: 1})} 
                                                    tag={Link} >   <span class="kt-menu__link-text">Patient Search </span>
                                                </NavLink>
                                            </span>
                                                {/* <i class="kt-menu__ver-arrow la la-angle-right"></i> */}
                                            </a>
                                            {/* <div class="kt-menu__submenu "><span class="kt-menu__arrow"></span>
                                            <ul class="kt-menu__subnav">
                                                <li class="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span class="kt-menu__link"><span class="kt-menu__link-text">Subheaders</span></span></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Inpatient List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">My Inpatient List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Rounding List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Additional Patient List </span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Manage List</span></a></li>
                                            </ul>
                                        </div> */}
                                        </li>

                                        <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" class="kt-menu__link kt-menu__toggle"><i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                                            <NavLink
                                                class="kt-menu__link kt-menu__toggle"
                                                // to="/user/SecureMessage"
                                                // onClick={ev => this.setState({patientShow: 1})} 
                                                tag={Link}
                                            // target="_blank" 
                                            >   <span class="kt-menu__link-text">Secure Messaging </span>
                                            </NavLink>
                                        </span>
                                            {/* <i class="kt-menu__ver-arrow la la-angle-right"></i> */}
                                        </a>
                                            {/* <div class="kt-menu__submenu "><span class="kt-menu__arrow"></span>
                                            <ul class="kt-menu__subnav">
                                                <li class="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span class="kt-menu__link"><span class="kt-menu__link-text">Subheaders</span></span></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Inpatient List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">My Inpatient List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Rounding List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Additional Patient List </span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Manage List</span></a></li>
                                            </ul>
                                        </div> */}
                                        </li>
                                        {/* <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" class="kt-menu__link kt-menu__toggle"><i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Links</span><i class="kt-menu__ver-arrow la la-angle-right"></i></a>
                                        <div class="kt-menu__submenu "><span class="kt-menu__arrow"></span>
                                            <ul class="kt-menu__subnav">
                                                <li class="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span class="kt-menu__link"><span class="kt-menu__link-text">Subheaders</span></span></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Inpatient List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">My Inpatient List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Rounding List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Additional Patient List </span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Manage List</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" class="kt-menu__link kt-menu__toggle"><i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Customize</span></a>
                                        <div class="kt-menu__submenu "><span class="kt-menu__arrow"></span>
                                            <ul class="kt-menu__subnav">
                                                <li class="kt-menu__item  kt-menu__item--parent" aria-haspopup="true"><span class="kt-menu__link"><span class="kt-menu__link-text">Subheaders</span></span></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Inpatient List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">My Inpatient List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Rounding List</span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Additional Patient List </span></a></li>
                                                <li class="kt-menu__item " aria-haspopup="true"><a class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i><span class="kt-menu__link-text">Manage List</span></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"><a href="javascript:;" class="kt-menu__link kt-menu__toggle"><i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Tools </span></a>

                                    </li> */}



                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div class="tab-pane" id="kt_tabs_1_3" role="tabpanel">


                            <div class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
                                <div id="kt_aside_menu" class="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500">
                                    <ul class="kt-menu__nav" style={{ "overflow": "auto" }} >

                                        <form class="kt-form">
                                            <div class="kt-portlet__body element">

                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="col-md-12" style={{ "padding-bottom": "10px" }}>
                                                            <div class="kt-login__divider">
                                                                <div class="kt-divider">
                                                                    <span></span>
                                                                    <span><b style={{ "color": "#fff" }}> Patient Demographics </b> </span>
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}>Last Name  <span class="redClass" > * </span> </label>
                                                                <input type="email"
                                                                    class="form-control" aria-describedby="emailHelp" placeholder="Enter Last Name"
                                                                    onChange={e => {
                                                                        this.setState({ lastname: e.target.value })
                                                                    }}
                                                                />

                                                            </div>
                                                        </div>

                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}>First Name  <span class="redClass" > * </span>  </label>
                                                                <input
                                                                    type="email"
                                                                    class="form-control"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder="Enter First Name"
                                                                    onChange={e => {
                                                                        this.setState({ firstname: e.target.value })
                                                                    }} />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}>D.O.B <span class="redClass" > * </span>   </label>

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

                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}>Gender  <span class="redClass" > * </span>  </label>
                                                                <div class="kt-radio-inline" style={{ "padding-top": "10px" }}>
                                                                    <label class="kt-radio kt-radio--bold kt-radio--success" style={{ "color": "#fff" }}>
                                                                        <input type="radio" name="radio6" /> Male
                                                                        <span></span>
                                                                    </label>
                                                                    <label class="kt-radio kt-radio--bold kt-radio--brand" style={{ "color": "#fff" }}>
                                                                        <input type="radio" name="radio6" /> Female
                                                                        <span></span>
                                                                    </label>

                                                                    <label class="kt-radio kt-radio--bold " style={{ "color": "#fff" }}>
                                                                        <input type="radio" name="radio6" /> Other
                                                                        <span></span>
                                                                    </label>
                                                                </div>

                                                            </div>
                                                        </div>


                                                        <div class="kt-login__divider">
                                                            <div class="kt-divider">
                                                                <span></span>
                                                                <span><b class="row" style={{ "color": "#fff" }}> Additional Demographics  </b>  </span>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <br></br>



                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}> Address </label>
                                                                <input
                                                                    type="email"
                                                                    class="form-control"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder="Enter Address"
                                                                    onChange={e => {
                                                                        this.setState({ firstname: e.target.value })
                                                                    }} />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}>City </label>
                                                                <input
                                                                    type="email"
                                                                    class="form-control"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder="Enter City"
                                                                    onChange={e => {
                                                                        this.setState({ city: e.target.value })
                                                                    }} />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}>State </label>
                                                                <input
                                                                    type="email"
                                                                    class="form-control"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder="Enter State"
                                                                    onChange={e => {
                                                                        this.setState({ city: e.target.value })
                                                                    }} />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}>Zip </label>
                                                                <input
                                                                    type="email"
                                                                    class="form-control"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder="Enter Zip"
                                                                    onChange={e => {
                                                                        this.setState({ city: e.target.value })
                                                                    }} />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}>Phone </label>
                                                                <input
                                                                    type="email"
                                                                    class="form-control"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder="Enter Phone"
                                                                    onChange={e => {
                                                                        this.setState({ city: e.target.value })
                                                                    }} />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}>Email </label>
                                                                <input
                                                                    type="email"
                                                                    class="form-control"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder="Enter Email"
                                                                    onChange={e => {
                                                                        this.setState({ city: e.target.value })
                                                                    }} />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}>  Social Security Number </label>
                                                                <input
                                                                    type="email"
                                                                    class="form-control"
                                                                    aria-describedby="emailHelp"
                                                                    placeholder="Enter Social Security Number"
                                                                    minlength={9}
                                                                    maxlength={9}
                                                                    pattern="[0-9]*"
                                                                    onChange={e => {
                                                                        this.setState({ city: e.target.value })
                                                                    }} />
                                                            </div>
                                                        </div>

                                                        <div class="kt-login__divider">
                                                            <div class="kt-divider">
                                                                <span></span>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <br></br>


                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "1rem" }}>
                                                                <label style={{ "color": "#fff" }}>eHealth Exchange </label>
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




                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ " padding-bottom": "20px" }}>
                                                                <label style={{ "color": "#fff" }}></label>
                                                                <div class="kt-radio-inline" style={{ "padding-top": "10px", " padding-bottom": "100px" }}>
                                                                    <button type="reset" class="btn btn-primary" onClick={this.submitCreate} style={{ "background-color": "#ffffff", "color": " #000" }}> Search </button> &nbsp;
                                                                    <button type="reset" class="btn btn-secondary" style={{ "background-color": "#ffffff", "color": " #000" }}>Cancel</button>

                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="col-md-12">
                                                            <div class="form-group" style={{ "margin-bottom": "20rem" }}>

                                                            </div>
                                                        </div>







                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div>

                                                        <div class="kt-portlet__foot">
                                                            <div class="kt-form__actions" style={{ "padding-left": " 78px", " padding-bottom": "20px" }}>
                                                            </div>
                                                        </div>


                                                    </div>


                                                </div>
                                            </div>
                                        </form>


                                    </ul>
                                </div>
                            </div>




                        </div>

                    </div>





                </>
            );
        } else {

            return (
                <>
                    <div class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
                        <div id="kt_aside_menu" class="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500">
                            <ul class="kt-menu__nav ">

                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">

                                    <a href="javascript:;"
                                        class="kt-menu__link kt-menu__toggle">

                                        <input type="checkbox" name="vehicle1" value="Bike" style={{ "width": "16px" }} />
                                        <NavLink
                                            style={{ "padding-top": "10px" }}
                                            for="vehicle1"
                                            class="kt-menu__link kt-menu__toggle"
                                            to="/user/dashboard"
                                            tag={Link} >   <span class="kt-menu__link-text">Select All </span>
                                        </NavLink> </a>


                                </li>

                                <div class="col-md-12" style={{ "padding-bottom": "10px" }}>
                                    <div class="kt-login__divider">
                                        <div class="kt-divider">
                                            <span></span>
                                        </div>
                                    </div>
                                </div>




                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Allergies</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Assessments</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Encounters</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Equipment</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Goals</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Immunizations</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Interventions</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Medications</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Payers</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Plan of Care</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Problems</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Procedures</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Results</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Social History</span>
                                    </a>
                                </li>
                                <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                                        <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text"> &nbsp; &nbsp;  Vital Signs</span>
                                    </a>
                                </li>



                            </ul>
                        </div>
                    </div>
                </>
            )
        }
    }
}

export default menus;
const top100Films = [
    { title: 'Advent Health System', id: 1 },
    { title: 'CareAlign Exchange', id: 2 },
];
