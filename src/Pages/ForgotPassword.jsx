import React from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import ReactSnackBar from "react-js-snackbar";
import LoginBaner from "../../src/Pages/comman/Login/LoginBaner";
export default class ForgotPassword extends React.Component {
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
		};

		this.email_KeyPre = () => {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
				this.setState({
					email_error: '',
					email_color: 'green'
				});
			}
			else {
				this.setState({
					email_error: 'Please Enter Valid Email Id',
					email_color: 'red'
				});

			}
		}
		this.pass_KeyPre = () => {
			if (this.state.password.length < 4) {
				this.setState({
					pass_error: ' Please Enter Valid  Password Min 5 Charater ',
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
	}

	componentDidMount() { }
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
	LoginSend = ev => {
		ev.preventDefault();
		console.log("hi")
		this.username = this.state.email;
		this.password = this.state.password;
		this.setState({ loading: true });
		this.email_KeyPre();
		this.pass_KeyPre();


		if (this.state.email_color != 'red') {
			console.log("true");

			this.state.pop = "Check Your Email Id  ";
			this.show();

			setTimeout(
				function () {
					this.props.history.push({
						pathname: `/auth/login`,
						search: '?login=true',
						state: { listId: 0, vueId: 0, }
					});

				}.bind(this), 3000
			);


		} else {
			console.log("false");
			this.state.pop = "Please Enter Username ";
			this.show();
		}

	}

	render() {
		return (
			<>
				<ReactSnackBar Icon={<span ><i className="flaticon2-notification"></i></span>} Show={this.state.Show}> {this.state.pop} </ReactSnackBar>
				<div class="kt-grid kt-grid--ver kt-grid--root" style={{ "overflow-y": "hidden" }}>
					<div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
						<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile" style={{ "height": "800px" }}>
							<LoginBaner />
							<div class="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
								<div class="kt-login__head "></div>
								<div class="kt-login__body">
									<div class="kt-login__form">
										<div class="kt-login__title">
											<h3>Forgot Password</h3>
										</div>
										<form class="kt-form" action="" novalidate="novalidate">
											<div class="form-group">
												<input
													style={{ color: this.state.email_color }}
													class="form-control"
													type="text"
													placeholder="Enter Username"
													name="email"
													autocomplete="off"
													onChange={ev => this.setState({ email: ev.target.value })}
													onKeyPress={this.email_KeyPre}
												/>
												<b><font color='red'>{this.state.email_error}</font></b>
											</div>
											<div class="kt-login__actions">
												<button id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary"
													onClick={this.LoginSend}>Submit</button>
												<button id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary"
													onClick={this.back}>Cancel</button>
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





