import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
import 'react-day-picker/lib/style.css';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import ReactTable from "react-table";
import ReactPaginate from 'react-paginate';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";

import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DashboardCard from "../../Pages/comman/Dashboard/DashboardCard";
import DashboardTables from "../../Pages/comman/Dashboard/DashboardTables";

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

export default class Dashboard extends React.Component {

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
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Third", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Fourth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Fifth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Seventh", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Third", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Fourth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Fifth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Seventh", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Third", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Fourth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Fifth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Seventh", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Third", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Fourth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Fifth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Seventh", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Third", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Fourth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Fifth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Seventh", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Sixth", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Anil", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { "first": "Hardik", "last": "John Doe", "dob": "10/02/1993", "gender": "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
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




    this.columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'last', headerName: 'Last name', width: 150, editable: false,
        renderCell: (params) => (
          <strong>
            <u> <a
              class="kt-menu__link kt-menu__toggle"
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16, cursor: "pointer", color: "#05339b" }}
              onClick={() => {
                this.props.history.push({
                  pathname: `/user/patientview`,
                  search: '?query=abc',
                  state: {
                    listId: 0,
                    vueId: 0,
                    title: this.state.title,
                    titleIcon: this.state.titleIcon,
                    Limit: this.state.Limit, PageNumber: this.state.PageNumber
                  }
                })
              }}
            >
              {params.value}
            </a></u>
          </strong>
        ),
      },
      { field: 'first', headerName: 'First Name', width: 150 },
      { field: 'dob', headerName: 'DOB', width: 120, editable: false, },
      { field: 'gender', headerName: 'Gender', width: 120, editable: false, },
      { field: 'address', headerName: 'Address', width: 120 },
      { field: 'city', headerName: 'city', width: 120 },
      { field: 'State', headerName: 'State', width: 120 },
      { field: 'zip', headerName: 'Zipcode', width: 120 },
    ];
    this.rows = [
      { id: 1, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 2, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 3, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 4, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 5, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 6, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 7, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 8, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 9, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 10, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 11, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 12, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 13, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 14, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 15, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 16, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 17, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 18, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 19, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 20, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 21, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 22, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 23, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 24, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 25, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 26, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 27, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 28, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 29, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 30, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 31, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 32, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 33, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 34, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 35, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 36, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 37, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 38, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 39, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
      { id: 40, "first": "John", last: "Doe", dob: "10/02/1993", gender: "male", address: "1234 1st Street South", city: "Kansas City", State: "Missouri", zip: "66118" },
    ];
  }


  handleChange = (e) => {
    const { checked } = e.target
    this.setState({ checked: checked })
  }

  submitCreate = ev => {
    ev.preventDefault();
    this.state.userlist = this.data.filter(data => data.first == this.state.firstname)
    console.log(this.state.userlist);
  }


  componentDidMount() { }
  render() {

    if (this.state.userlist) {
      var commentNodes = this.state.userlist.map((list, i) => {
        return (
          <tr key={i}>
            <td>
              <NavLink
                class="kt-menu__link kt-menu__toggle"
                to="/user/patientview"
                tag={Link} >   <span class="kt-menu__link-text">{list.last} </span>
              </NavLink>
            </td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.city}</td>
            <td>{list.zip}</td>
          </tr>
        );
      });
    }

    return (
      <>
        <div class="kt-subheader   kt-grid__item" id="kt_subheader">
          <div class="kt-container  kt-container--fluid ">
            <div class="kt-subheader__main">
              <h3 class="kt-subheader__title">
                <NavLink
                  style={{ disply: "contents", color: "#fff" }}
                  class="kt-link kt-login__signup-link"
                  to="/user/patient"
                  tag={Link} >   Patient  </NavLink>
              </h3>
              <span class="kt-subheader__separator kt-hidden">   </span>
              <div class="kt-subheader__breadcrumbs">
                <a class="kt-subheader__breadcrumbs-home"><i class="flaticon2-shelter"></i></a> <span class="kt-subheader__breadcrumbs-separator"></span>
                <a class="kt-subheader__breadcrumbs-link">
                  <NavLink
                    style={{ disply: "contents", color: "#fff" }}
                    class="kt-link kt-login__signup-link"
                    to="/user/patient"
                    tag={Link} >   Patient Search </NavLink>
                </a>
              </div>
            </div>
            <div class="kt-subheader__toolbar">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="kt-portlet">
              <DashboardCard  />
            </div>
          </div>
        </div>


        <div class="kt-portlet kt-portlet--mobile">
          <div class="kt-portlet__body kt-portlet__body--fit">
            <div >
              <div class="kt-portlet__body">
                <div style={{ height: "auto", width: '100%' }}>
                  <DashboardTables  history={this.props.history} />
                </div>
              </div>
              <br></br>
            </div>
          </div>
        </div>


      </>
    );
  }
}





