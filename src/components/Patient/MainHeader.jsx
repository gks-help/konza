

import React from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';


export default class MainHeader extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data : "Hello World" 
        }
    }

    render() {

       

            return (
                <>
                   <div class="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
                            <div id="kt_header_menu" class="kt-header-menu kt-header-menu-mobile  kt-header-menu--layout-default ">
                            
                            </div>
                            </div> 

                </>
            )
        
    }
}

