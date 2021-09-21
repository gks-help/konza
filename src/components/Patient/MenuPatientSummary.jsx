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




export default class MenuPatientSummary extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      Allergies: true,
      Assessments: true,
      Encounters: true,
      Equipment: true,
      Goals: true,
      Immunizations: true,
      Interventions: true,
      Medications: true,
      Payers: true,
      PlanofCare: true,
      Problems: true,
      Procedures: true,
      Results: true,
      SocialHistory: true,
      VitalSigns: true,
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    if (val.length > 0) {
      if (nam === 'Allergies') {
        console.log("1");
        this.Wall.dsc = event.target.value;
      }
    } else {

    }
  }


  render() {



    return (
      <>
        <div class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid " id="kt_aside_menu_wrapper">
          <div id="kt_aside_menu " class="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1" data-ktmenu-dropdown-timeout="500">
            <div class="outer-container">
              <div class="inner-container">
                <ul class="kt-menu__nav element ">
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
                      <input type="checkbox" name="vehicle1" value="Bike" style={{ "width": "16px" }} />
                      <NavLink
                        style={{ "padding-top": "10px" }}
                        for="vehicle1"
                        class="kt-menu__link kt-menu__toggle"
                        to="patients/patientsummery"
                        tag={Link}   >   <span class="kt-menu__link-text">Select All </span>
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
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle"
                    >
                      <i class="kt-menu__link-icon flaticon-layers"></i>

                      <NavLink
                        class="kt-menu__link kt-menu__toggle"
                        onClick={ev =>
                          this.setState({ Allergies: !this.state.Allergies })
                        }
                        to={{
                          pathname: `/patients/patientsummery`,
                          search: '?1',
                          state: { data: this.state }
                        }}
                        tag={Link} >   <span class="kt-menu__link-text">Allergies </span>
                      </NavLink>


                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i>
                      <span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ Assessments: !this.state.Assessments })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Assessments </span>
                        </NavLink></span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i>
                      <span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ Encounters: !this.state.Encounters })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Encounters </span>
                        </NavLink>
                      </span>

                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ Equipment: !this.state.Equipment })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Equipment </span>
                        </NavLink>
                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ Goals: !this.state.Goals })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Goals </span>
                        </NavLink>

                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ Immunizations: !this.state.Immunizations })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Immunizations </span>
                        </NavLink>

                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ Interventions: !this.state.Interventions })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Interventions </span>
                        </NavLink>

                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ Medications: !this.state.Medications })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Medications </span>
                        </NavLink>

                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ Payers: !this.state.Payers })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Payers </span>
                        </NavLink>

                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ PlanofCare: !this.state.PlanofCare })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Plan of Care </span>
                        </NavLink>

                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ Problems: !this.state.Problems })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Problems </span>
                        </NavLink>

                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">

                        <NavLink
                          onClick={ev => this.setState({ Procedures: !this.state.Procedures })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Procedures </span>
                        </NavLink>
                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ Results: !this.state.Results })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">Results </span>
                        </NavLink>

                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ SocialHistory: !this.state.SocialHistory })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">SocialHistory </span>
                        </NavLink>

                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
                    <a href="javascript:;" class="kt-menu__link kt-menu__toggle" >
                      <i class="kt-menu__link-icon flaticon-layers"></i><span class="kt-menu__link-text">
                        <NavLink
                          onClick={ev => this.setState({ VitalSigns: !this.state.VitalSigns })}
                          class="kt-menu__link kt-menu__toggle"
                          to={{
                            pathname: `/patients/patientsummery`,
                            search: '?2',
                            state: { data: this.state }
                          }} tag={Link}

                          tag={Link} >   <span class="kt-menu__link-text">VitalSigns </span>
                        </NavLink>

                      </span>
                    </a>
                  </li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"></li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"></li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"></li>
                  <li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover"></li>



                </ul>

              </div>
            </div>
          </div>
        </div>
      </>
    )

  }
}

