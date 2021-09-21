import React from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';


export default class MobileheaderLogo extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data : "Hello World" 
        }
    }

    render() {

       

            return (
                <>
                   
                <div id="kt_header_mobile" class="kt-header-mobile  kt-header-mobile--fixed " >
                <div class="kt-header-mobile__logo">
                    <a >
                    {/* <img alt="Logo" src="/assets/konza-logo-wht.png"/> */}
                    <img alt="Logo" src="http://clienttesting.cc/konza/assets/thumbnail_konza_logo_RGB.png" style={{"width":"150px"}}/>
                    </a>
                </div>
                <div class="kt-header-mobile__toolbar">
                    <button class="kt-header-mobile__toggler kt-header-mobile__toggler--left" id="kt_aside_mobile_toggler"><span></span></button>
                    <button class="kt-header-mobile__toggler" id="kt_header_mobile_toggler"><span></span></button>
                    <button class="kt-header-mobile__topbar-toggler" id="kt_header_mobile_topbar_toggler"><i class="flaticon-more"></i></button>
                </div>
                </div>
                </>
            )
        
    }
}

