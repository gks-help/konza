import React from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";

import { userService } from './userService';
import ReactSnackBar from "react-js-snackbar";
import LoginBaner from "../../src/Pages/comman/Login/LoginBaner";
export default class Otp extends React.Component {
    state = { Show: false, Showing: false };
    show = () => {
        if (this.state.Showing) return;
        this.setState({ Show: true, Showing: true });
        setTimeout(() => {
            this.setState({ Show: false, Showing: false });
        }, 3000);
    };


    constructor(props) {
        super(props);

        this.state = {
            name: '',email: '',phone: '',username: '',password: '',phone: '',cpassword: '',users: [],u_error: '',u_color: 'black',email_error: '', email_color: 'black', phone_error: '', phone_color: 'black',
            phone_error: '', phone_color: 'black',user_error: '',user_color: 'black',pass_error: '',pass_color: 'black',cpass_error: '',cpass_color: 'black',redirect: false, message: '',  bread: ''
        };


        this.name_KeyPre = () => {
            if (this.state.name.length < 1) {
                this.setState({
                    u_error: 'Full Name Required',
                    u_color: 'red'
                });
            } else {
                this.setState({
                    u_error: '',
                    u_color: 'green'
                });
            }
        }
        this.email_KeyPre = () => {

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
                this.setState({
                    email_error: '',
                    email_color: 'green'
                });
            }
            else {
                this.setState({
                    email_error: 'You have entered an invalid email address!',
                    email_color: 'red'
                });
            }
        }
        this.phone_KeyPre = () => {
            console.log(this.state.phone.length === 9);
            if (this.state.phone.length == 9) {
                this.setState({
                    phone_error: '',
                    phone_color: 'green'
                });
            } else {
                this.setState({
                    phone_error: 'Invalid  Number',
                    phone_color: 'red'
                });
            }
            if (isNaN(this.state.phone)) {
                this.setState({
                    phone_error: 'This is not number',
                    phone_color: 'red'
                });
            }
        }
        this.users_KeyPre = () => {
            if (this.state.username.length < 1) {
                this.setState({
                    user_error: ' Username Required',
                    user_color: 'red'
                });
            }
            else {
                this.setState({
                    user_error: '',
                    user_color: 'green'
                });
            }
        }

        this.pass_KeyPre = () => {
            if (this.state.password.length < 5) {
                this.setState({
                    pass_error: ' OTP must be more than 6 Characters ',
                    pass_color: 'red'
                });
            }
            else {
                this.setState({
                    pass_error: '',
                    pass_color: 'green'
                });
            }
        }

        this.reg = ev => {



            ev.preventDefault();
            this.password = this.state.password;
            this.setState({ loading: true });
            this.email_KeyPre();
            this.pass_KeyPre();


            this.props.history.push({
                pathname: `/user/patient`,
                search: '?login=true',
                state: {
                    listId: 0,
                    vueId: 0,
                }
            });
        }


    }
    back = ev => {
        ev.preventDefault();
        this.props.history.push({
            pathname: `/auth/login`,
            search: '?login=true',
            state: {
                listId: 0,
                vueId: 0,
            }
        });
    }
    componentDidMount() { }
    render() {
        return (
            <>
                <ReactSnackBar Icon={<span ><i className="flaticon2-notification"></i></span>} Show={this.state.Show}> {this.state.pop} </ReactSnackBar>
                <div class="kt-grid kt-grid--ver kt-grid--root">
                    <div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
                        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile" style={{ "height": "800px" }}>
                            <LoginBaner />
                            <div class="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
                                <div class="kt-login__body">
                                    <div class="kt-login__form">
                                        <div class="kt-login__title">
                                            <h3>OTP</h3>
                                        </div>
                                        <form class="kt-form" action="" novalidate="novalidate">
                                            <div class="form-group">
                                                <input
                                                    style={{ color: this.state.pass_color }}
                                                    class="form-control"
                                                    type="password"
                                                    placeholder="OTP"
                                                    name="password"
                                                    onChange={ev => this.setState({ password: ev.target.value })}
                                                    onKeyPress={this.pass_KeyPre}
                                                />
                                                <b> <font color='red'>{this.state.pass_error}</font></b>
                                            </div>
                                            <div class="kt-login__actions">


                                                <NavLink
                                                    style={{ disply: "contents" }}
                                                    class="kt-link kt-login__signup-link"
                                                    to="/auth/login"
                                                    tag={Link} >   <span class="kt-menu__link-text"> <b>   </b> </span>
                                                </NavLink>

                                                <button id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary" onClick={this.reg}> Submit </button>

                                            </div>

                                        </form>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}





