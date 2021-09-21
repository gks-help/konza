




import React from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';


export default class Footers extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data: "Hello World"
        }
    }

    render() {



        return (
            <>
                <div class="kt-footer  kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop" id="kt_footer " style={{ "position": " fixed", "bottom": " 0", "width": "100%", "padding": "10px" }}>
                    <div class="kt-container  kt-container--fluid ">
                        <div class="kt-footer__copyright">
                            &nbsp;&copy;&nbsp;<a href="https://www.konza.org" target="_blank" class="kt-link">  KONZA, Incorporated 2019 - All Rights Reserved.</a>
                        </div>
                        <div class="kt-footer__menu">
                            <a href="https://www.konza.org/about" target="_blank" class="kt-footer__menu-link kt-link">About</a>
                            <a href="https://www.konza.org/about" target="_blank" class="kt-footer__menu-link kt-link">Team</a>
                            <a href="https://www.konza.org/contact" target="_blank" class="kt-footer__menu-link kt-link">Contact</a>
                        </div>


                    </div>
                </div>



            </>
        )

    }
}

