import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import 'react-day-picker/lib/style.css';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import ReactTable from "react-table";
//deploye
import ReactPaginate from 'react-paginate';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import PatientCard from "./../../comman/PatientCard"


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

export default class Patientview extends React.Component {


  state = { Show: false, Showing: false };
  show = () => {
    if (this.state.Showing) return;

    this.setState({ Show: true, Showing: true });
    setTimeout(() => {
      this.setState({ Show: false, Showing: false });
    }, 3000);
  };

  state = { searchString: '' }
  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  }
  render() {
    var libraries = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      libraries = libraries.filter(function (i) {
        return i.name.toLowerCase().match(searchString);
      });
    }
  }

  constructor(props) {
    super(props);
    this.data = [
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Third", "last": "John Doe", "dob": "10/02/1993", "gender": "male", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Fourth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Fifth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Seventh", "last": "John Doe", "dob": "10/02/1993", "gender": "male", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", "address": "10 Downing Street", "city": "test", "zip": "10001" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", "address": "10 Downing Street", "city": "test", "zip": "10001" },

    ]
    this.state = {
      checked: false,
      email: '',
      password: '',
      users: [],
      email_error: '',
      email_color: 'black',
      pass_error: '',
      pass_color: 'black',
      redirect: false,
      message: '',
      pop: '',
      selectedDay: undefined,
      userlist: this.data
    };

  }
  handleChange = (e) => {
    const { checked } = e.target
    this.setState({ checked: checked })
  }

  submitCreate = ev => {
    ev.preventDefault();
    console.log(this.state.firstname);
    console.log(this.data);
    this.state.userlist = this.data.filter(data => data.first == this.state.firstname)
    console.log(this.state.userlist);
  }

  goto = () => {
    this.props.history.push({
      pathname: `/patients/patientsummary`,
      search: '?',
      state: {
        listId: 0,
        vueId: 0,
      }
    });
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  render() {


    return (
      <>
        <div>
          <div class="kt-subheader   kt-grid__item" id="kt_subheader">
            <div class="kt-container  kt-container--fluid ">
              <div class="kt-subheader__main">
                <span class="kt-subheader__separator kt-hidden">   </span>
                <h3 class="kt-subheader__title">
                  <NavLink
                    style={{ disply: "contents", color: "#fff" }}
                    class="kt-link kt-login__signup-link"
                    to="/user/patient"
                    tag={Link} >   Patient  </NavLink>
                </h3>
                <div class="kt-subheader__breadcrumbs">
                  <a class="kt-subheader__breadcrumbs-home"><i class="flaticon2-shelter"></i>
                  </a> <span class="kt-subheader__breadcrumbs-separator"></span>
                  <a class="kt-subheader__breadcrumbs-link">
                    <NavLink
                      style={{ disply: "contents", color: "#fff" }}
                      class="kt-link kt-login__signup-link"
                      to="/user/patientview"
                      tag={Link} >   Patient View </NavLink>
                  </a>
                </div>
              </div>
              <div class="kt-subheader__toolbar">
              </div>
            </div>
          </div>


          <PatientCard />
          <button
            type="reset" class="btn btn-primary"
            style={{ "padding-left": "41%", "padding-right": "41%" }}
            onClick={this.goto}
          > CONTINUE TO PATIENT SUMMARY </button>
          <br></br>
          <br></br>
          <div class="row">
          </div>
        </div>


      </>
    );
  }
}




