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

export default class SecureAdd extends React.Component {


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
      { "first": "Anil", "last": "Amie Worthington", "dob": "Amie Worthington", "gender": "Topeka, KS", "address": "amie.worthington@khindirect.org", "city": "test", "zip": "" },
      { "first": "Hardik", "last": "Anna Kumru", "dob": "Anna Kumru", "gender": "Topeka, KS", "address": "anna.kumru@khindirect.org", "city": "test", "zip": "" },
      { "first": "Third", "last": "Bobbi Gray", "dob": "Bobbi Gray", "gender": "Topeka, KS", "address": "bobbi.gray@khindirect.org", "city": "test", "zip": "lawrence Memorial Hospital" },
      { "first": "Fourth", "last": "Lass Slaughter", "dob": "Lass Slaughter", "gender": "Topeka, KS", "address": "lassslaughter@khindirect.org", "city": "test", "zip": "" },
      { "first": "Fourth", "last": "Joe Davison", "dob": "Joe Davison", "gender": "Topeka, KS", "address": "joedavison@khindirect.org", "city": "test", "zip": "" },

    ]
    this.state = {
      checked: false,
      toCard: false,
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



  new = ev => {
    ev.preventDefault();
    this.props.history.push({
      pathname: `/user/patient`,
      search: '',
      state: { listId: 0, vueId: 0, }
    });
  }

  toCardChang = ev => {
    ev.preventDefault();
    this.setState({ toCard: !this.state.toCard });
  }
  componentDidMount() { }
  render() {
    if (this.state.userlist) {
      var commentNodes = this.state.userlist.map((list, i) => {
        return (
          <tr key={i}>
            <td style={{ "padding": "0px" }}>
                 {list.last}
            </td>
            <td>{list.dob}</td>
            <td>{list.gender}</td>
            <td>{list.address}</td>
            <td>{ }</td>
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
              <h3 class="kt-subheader__title">  </h3>
              <span class="kt-subheader__separator kt-hidden"> Secure Message  </span>
              <div class="kt-subheader__breadcrumbs">

                <a class="kt-subheader__breadcrumbs-home"><i class="flaticon2-shelter"></i></a> <span class="kt-subheader__breadcrumbs-separator"></span>
                <a class="kt-subheader__breadcrumbs-link">
                  <NavLink
                    style={{ disply: "contents", color: "#fff" }}
                    class="kt-link kt-login__signup-link"
                    to="/user/SecureMessage"
                    tag={Link} >   Secure Message </NavLink>
                </a>
                <a class="kt-subheader__breadcrumbs-home"></a> <span class="kt-subheader__breadcrumbs-separator"></span>
                <a class="kt-subheader__breadcrumbs-link">
                  <NavLink
                    style={{ disply: "contents", color: "#fff" }}
                    class="kt-link kt-login__signup-link"
                    to="/user/SecureAdd"
                    tag={Link} >   Secure Add </NavLink>
                </a>



              </div>
            </div>
            <div class="kt-subheader__toolbar">

            </div>
          </div>
        </div>






        <div class="row">
          <div class="kt-portlet kt-portlet--mobile  col-md-12">
            <div class="kt-portlet__body kt-portlet__body--fit">
              <div class="kt-portlet__body" style={{ "padding": "10px" }}>

                <div class="row" style={{ "padding": "10px" }}>
                  <div class="col-md-1" style={{ "text-align": "end" }}> From:</div>
                  <div class="col-md-9">  "Test" test@gmail.com  </div>
                </div>

                <div class="row" style={{ "padding": "2px" }}>
                  <div class="col-md-1" style={{ "text-align": "end" }}> To:  </div>
                  <div class="col-md-9">
                    <div class="form-group">
                      <input type="email"
                        style={{ "height": "30px", "padding": "1px" }}
                        class="form-control" aria-describedby="emailHelp"
                        onChange={e => {
                          this.setState({ lastname: e.target.value })
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-md-1">
                    <button type="reset" class="btn btn-primary" onClick={this.toCardChang} style={{ "border-color": "#fff", "background-color": "#fff", "padding": "0", "color": "#000" }} >   <i class="flaticon2-browser"></i>   </button>
                  </div>
                </div>

                <div class="row" style={{ "padding": "2px" }}>
                  <div class="col-md-1" style={{ "text-align": "end" }}> CC:</div>
                  <div class="col-md-9">
                    <div class="form-group">
                      <input type="email"
                        style={{ "height": "30px", "padding": "1px" }}
                        class="form-control" aria-describedby="emailHelp"
                        onChange={e => {
                          this.setState({ lastname: e.target.value })
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-md-1" > 
                  
                  <button type="reset" class="btn btn-primary" onClick={this.toCardChang} style={{ "border-color": "#fff", "background-color": "#fff", "padding": "0", "color": "#000" }} >   <i class="flaticon2-browser"></i>   </button>
                    
                    </div>
                </div>

                <div class="row " style={{ "padding": "2px" }}>
                  <div class="col-md-1" style={{ "text-align": "end" }}> Subject:</div>
                  <div class="col-md-9">
                    <div class="form-group">
                      <input type="email"
                        style={{ "height": "30px", "padding": "1px" }}
                        class="form-control" aria-describedby="emailHelp"
                        onChange={e => {
                          this.setState({ lastname: e.target.value })
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-md-1"> </div>
                </div>

              </div>
            </div>
          </div>

        </div>




        {this.state.toCard == false &&
          <>

            <div class="row">
              <div class="kt-portlet kt-portlet--mobile  col-md-12">
                <div class="kt-portlet__body kt-portlet__body--fit">
                  <div class="kt-portlet__body" style={{ "padding": "10px" }}>

                    <div class="row" style={{ "padding": "10px" }}>
                      <div class="col-md-1" style={{ "text-align": "end" }}> <b>  Attachments </b> </div>
                      <div class="col-md-9"> </div>
                      <div class="col-md-2">
                        <select
                          class="form-control kt-select2"
                          id="kt_select2_1"
                          onChange={e => {
                            this.setState({ attach: e.target.value })
                          }}
                        >
                          <option value="0" selected >Attachment</option>
                          <option value="1" > Upload  </option>
                          <option value="2" > Patient Summary </option>
                        </select>
                        {this.state.attach == 1 &&
                          <>
                            <input type="file" id="myFile" name="filename"/>
                          </>
                        }
                      </div>
                    </div>

                    <div class="row" style={{ "padding": "15px" }}>
                      Laura McCrary EdD<br></br>
                      Executive Director, KHIN<br></br>
                      President & CEO, KONZA<br></br>
                      Imccrary@konza.org<br></br>
                      785-409-5200<br></br>
                    </div>


                  </div>
                </div>
              </div>

            </div>
          </>
        }
        {this.state.toCard == true &&
          <div class="row" >
            <div class="kt-portlet kt-portlet--mobile  col-md-12">
              <div class="kt-portlet__body kt-portlet__body--fit">
                <div class="kt-portlet__body" style={{ "padding": "10px" }}>
                  <div class="row" style={{ "padding": "10px" }}>
                    <div class="col-md-8 row" >

                      <div class="col-md-2" > Address Book </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <input type="email"
                            style={{ "height": "30px", "padding": "1px" }}
                            class="form-control" aria-describedby="emailHelp"
                            onChange={e => {
                              this.setState({ lastname: e.target.value })
                            }}
                          />
                        </div>
                      </div>
                      <div class="col-md-2">    <button type="reset" class="btn btn-primary" style={{ "background-color": "#fff", "color": "#000", "padding": " 5px 1rem" }} >  Search </button>  </div>



                    </div>
                    <div class="col-md-4" style={{ "text-align": "end" }}>
                      <button type="reset" class="btn btn-primary" style={{ "background-color": "#fff", "color": "#000", "padding": " 5px 1rem" }} > Create </button> &nbsp;
                      <button type="reset" class="btn btn-primary" style={{ "background-color": "#fff", "color": "#000", "padding": " 5px 1rem" }} > Close </button> &nbsp;
                    </div>
                  </div>


                  <div class="row" style={{ "padding": "10px" }}>

                  </div>




                  <div class="kt-portlet kt-portlet--mobile">
                    <div class="kt-portlet__body kt-portlet__body--fit">
                      <div >
                        <div class="kt-portlet__body">
                          <table class="table table-striped- table-bordered table-hover table-checkable" >
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Mailbox Name</th>
                                <th>City State</th>
                                <th>Address</th>
                                <th>Specialty</th>
                                <th>Organization</th>
                              </tr>
                            </thead>
                            <tbody>
                              {commentNodes}
                            </tbody>
                          </table>
                        </div>
                        <div class="row">
                          <div class="col-md-10"> </div>
                          <div class="col-md-2 " style={{ "text-align": "center" }} >

                            <div class="center">
                              <div class="pagination">
                                <a >&laquo;</a>
                                <a class="active">1</a>

                                <a >&raquo;</a>
                              </div>
                            </div>
                          </div>
                        </div>



                        <br></br>


                      </div>

                    </div>
                  </div>





                </div>
              </div>
            </div>
          </div>
        }













































      </>
    );
  }
}




