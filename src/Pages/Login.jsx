import React from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import ReactSnackBar from "react-js-snackbar";
import { userService } from './userService';
import { instanceOf } from 'prop-types';
import LoginBaner from "../../src/Pages/comman/Login/LoginBaner";

export default class Login extends React.Component {

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
			pop: '', other: '',
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

	Enroll = async () => {
		var emailData = {
			stateToken: this.state.stateToken,
			factorId: this.state.factorId,
		}
		var smsData = {
			stateToken: this.state.stateToken,
			factorId: this.state.factorIdSMS,
		}
		if (this.state.bread == "email") {
			localStorage.setItem(this.state.email, "1");
			const { data } = await userService.factorsEmail(emailData);
		} else if (this.state.bread == "sms") {
			localStorage.setItem(this.state.email, "2");
			const { data } = await userService.factorsSMS(smsData);
		} else if (this.state.bread == "both") {
			localStorage.setItem(this.state.email, "3");
			const { data } = await userService.factorsEmail(emailData);
			const { datas } = await userService.factorsSMS(smsData);
		}
		this.setState({ other: 2 })
	}
	EnrollCode = async (ev) => {
		ev.preventDefault();
		var emailData = {
			stateToken: this.state.stateToken,
			factorId: this.state.factorId,
			passCode: this.state.passCode
		}
		const { factorResult, status, errorSummary, errorCauses, _embedded } = await userService.factorsVerify(emailData);
		console.log(status, errorSummary, errorCauses, _embedded)
		if (status == "SUCCESS") {
			sessionStorage.setItem('userDB', JSON.stringify(_embedded));
			this.props.history.push({ pathname: `/user/patient` });
		} else {
			console.log(errorSummary)
			this.state.pop = "Invalide Passcode";
			this.show();
		}

	}
	EnrollCodeSMS = async (ev) => {
		ev.preventDefault();
		var emailData = {
			stateToken: this.state.stateToken,
			factorId: this.state.factorIdSMS,
			passCode: this.state.passCode
		}
		try {
			const { factorResult, status, errorSummary, errorCauses, _embedded } = await userService.factorsVerify(emailData);
			console.log(status, errorSummary, errorCauses, _embedded)
			if (status == "SUCCESS") {
				sessionStorage.setItem('userDB', JSON.stringify(_embedded));
				this.props.history.push({ pathname: `/user/patient` });
			} else {
				console.log(errorSummary)
				this.state.pop = "Invalide Passcode";
				this.show();
			}
		} catch (error) {
			this.state.pop = "Invalide Passcode";
			this.show();
		}
	}

	LoginSend = ev => {
		ev.preventDefault();
		console.log("hi")
		this.username = this.state.email;
		this.password = this.state.password;
		this.setState({ loading: true });
		this.email_KeyPre();
		this.pass_KeyPre();

		userService.login(this.username, this.password)
			.then(
				user => {
					if (user.status == 'MFA_REQUIRED') {

						sessionStorage.setItem('userDB', JSON.stringify(user._embedded));
						this.setState({ stateToken: user.stateToken })
						var data = user._embedded.factors;
						const emailLocal = data.filter(res => res.factorType.toLowerCase() == 'email')
						const smsLocal = data.filter(res => res.factorType.toLowerCase() == 'sms')
						if (emailLocal[0]) this.setState({ factorId: emailLocal[0].id })
						if (smsLocal[0]) this.setState({ factorIdSMS: smsLocal[0].id })
						sessionStorage.setItem('userDB', JSON.stringify(user._embedded));

						if (emailLocal[0]) {
							this.setState({ other: 2 });
							this.setState({ bread: emailLocal[0].factorType == "email" ? "email" : emailLocal[0].factorType == "sms" ? "sms" : emailLocal[0].factorType == 3 ? "both" : "" });
							this.Enroll();
						} else this.setState({ other: 1 });
						this.props.history.push({
							pathname: `/user/patient`,
							search: '?login=true',
							state: {
								listId: 0,
								vueId: 0,
							}
						});

					} else {
						console.log("false");
						this.state.pop = "Invalide Username / Password";
						this.show();
					}
				},
				error => {
					console.log("false");
					this.state.pop = "Please Enter Valid Credentials ";
					this.show();
				}
			);


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
								{/* <div class="kt-login__head ">
									<span class="kt-login__signup-label">Don't have an account yet?
										<NavLink
											style={{ disply: "contents" }}
											class="kt-link kt-login__signup-link"
											to="/auth/Register"
											tag={Link} >   <span class="kt-menu__link-text">Sign Up! </span>
										</NavLink>  </span>&nbsp;&nbsp;
								</div> */}


								<div class="kt-login__body">


									<div class="kt-login__form">
										<div class="kt-login__title">
											<h3>Sign In</h3>
										</div>


										<form class="kt-form" action="" novalidate="novalidate">
											<div class="form-group">
												<input
													style={{ color: this.state.email_color }}
													class="form-control"
													type="text"
													placeholder="Email"
													name="email"
													autocomplete="off"
													onChange={ev => this.setState({ email: ev.target.value })}
													onKeyPress={this.email_KeyPre}
												/>
												<b><font color='red'>{this.state.email_error}</font></b>
											</div>
											<div class="form-group">
												<input
													style={{ color: this.state.pass_color }}
													class="form-control"
													type="password"
													placeholder="Password"
													name="password"
													onChange={ev => this.setState({ password: ev.target.value })}
													onKeyPress={this.pass_KeyPre}
												/>
												<b> <font color='red'>{this.state.pass_error}</font></b>
											</div>


											{this.state.other == '' &&
												<div class="kt-login__actions" >
													<NavLink
														style={{ disply: "contents" }}
														class="kt-link kt-login__signup-link"
														to="/auth/forgot"
														tag={Link} >   <span class="kt-menu__link-text"> <b>Forgot Password</b> </span>
													</NavLink>
													<button id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary"
														onClick={this.LoginSend}
													>Sign In</button>
												</div>
											}
										</form>






										{this.state.other == 1 &&
											<>

												<div class="kt-login__title" style={{ "margin-bottom": " 1rem" }}>
													<h3> Secondary Verification  Enrollment</h3>
												</div>
												<h3> 	</h3>
												<div class="form-group">
													<div class="row">
														<div class="col-md-3"><input
															onClick={ev => {
																this.setState({ bread: 'email' })
															}}
															type="radio" id="html" name="fav_language" value="HTML" style={{ "width": "18px", display: "inline", "height": " 15px" }} /> <label for="html" >Email</label> </div>
														<div class="col-md-5">
															{this.state.bread == 'email' &&
																<input
																	style={{ color: this.state.pass_color }}
																	class="form-control"
																	type="text"
																	placeholder="Enter Email Address"
																	name="email"
																	value={this.state.email}

																/>
															}
														</div>
														<div class="col-md-4"> </div>
													</div>
													<br></br>
													<div class="row">
														<div class="col-md-3">
															<input
																onClick={ev => {
																	this.setState({ bread: 'sms' })
																}}
																type="radio" id="css" name="fav_language" value="CSS" style={{ "width": "18px", display: "inline", "height": " 15px" }} /> <a for="css" >SMS</a>
														</div>
														<div class="col-md-5">
															{this.state.bread == 'sms' &&
																<input
																	style={{ color: this.state.pass_color }}
																	class="form-control"
																	type="text"
																	placeholder="Enter Mobile Number"
																	name="text"
																/>
															}
														</div>
														<div class="col-md-4">  {this.state.bread == 'sms' && <> * U.S Number Only Ex, 555-555-5555 </>} </div>
													</div>
													<br></br>
													<div class="row">
														<div class="col-md-3">
															<input
																onClick={ev => {
																	this.setState({ bread: 'both' })
																}}
																type="radio" id="css" name="fav_language" value="CSS" style={{ "width": "18px", display: "inline", "height": " 15px" }} /> <a for="css" >Both</a>
														</div>
														<div class="col-md-5">
															{this.state.bread == 'both' &&
																<>
																	<input
																		style={{ color: this.state.pass_color }}
																		class="form-control"
																		type="text"
																		placeholder="Enter Email Address"
																		name="password"
																		value={this.state.email}
																	/>
																	<br></br>
																	<input
																		style={{ color: this.state.pass_color }}
																		class="form-control"
																		type="text"
																		placeholder="Enter Mobile Number"

																	/>
																</>
															}

														</div>
														<div class="col-md-4" style={{ "padding-top": "56px" }}>	{this.state.bread == 'both' && <> * U.S Number Only Ex, 555-555-5555 </>} </div>
													</div>
													<div class="kt-login__actions">
														<NavLink
															style={{ disply: "contents" }}
															class="kt-link kt-login__signup-link"
															to="/auth/forgot"
															tag={Link} >   <span class="kt-menu__link-text"> <b> </b> </span>
														</NavLink>
														<button id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary"
															onClick={this.Enroll}
														>Enroll</button>
													</div>



												</div>
											</>}


										{this.state.other == 2 &&
											<>
												<div class="kt-login__title" style={{ "margin-bottom": " 1rem" }}>
													<h3> Secondary Verification  </h3>
												</div>
												<div class="form-group">
													{this.state.bread == 'email' &&
														<>
															<div class="kt-login__title" style={{ "margin-bottom": " 2rem" }}>
																<h5> A Verification Code has been sent to your Email  </h5>
															</div>


															<div class="row">
																<div class="col-md-1"> </div>
																<div class="col-md-3" style={{ "padding-top": "8px" }}>
																	Email Code
																</div>
																<div class="col-md-7">
																	<input
																		style={{ color: this.state.pass_color }}
																		class="form-control"
																		type="text"
																		placeholder="Enter Verificaton Code"
																		name="password"
																		onChange={ev => this.setState({ passCode: ev.target.value })}
																	/>
																</div>
																<div class="col-md-1"> </div>
															</div>
															<div class="kt-login__actions">
																<NavLink
																	style={{ disply: "contents" }}
																	class="kt-link kt-login__signup-link"
																	to="/auth/forgot"
																	tag={Link} >   <span class="kt-menu__link-text"> <b> </b> </span>
																</NavLink>
																<button
																	id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary"
																	onClick={this.EnrollCode}>Verify Code</button>
															</div>


														</>
													}

													{this.state.bread == 'sms' &&
														<>
															<div class="kt-login__title" style={{ "margin-bottom": " 2rem" }}>
																<h5> A Verification Code has been sent to your Mobile Number  </h5>
															</div>
															<div class="row">
																<div class="col-md-1"> </div>
																<div class="col-md-3" style={{ "padding-top": "8px" }}>
																	SMS Code
																</div>
																<div class="col-md-7">

																	<input
																		style={{ color: this.state.pass_color }}
																		class="form-control"
																		type="text"
																		placeholder="Enter Verificaton Code"
																		name="password"
																		onChange={ev => this.setState({ passCode: ev.target.value })}
																	/>

																</div>
																<div class="col-md-1"> </div>

															</div>
															<div class="kt-login__actions">
																<NavLink
																	style={{ disply: "contents" }}
																	class="kt-link kt-login__signup-link"
																	to="/auth/forgot"
																	tag={Link} >   <span class="kt-menu__link-text"> <b> </b> </span>
																</NavLink>
																<button
																	id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary"
																	onClick={this.EnrollCodeSMS}>Verify Code</button>
															</div>
														</>
													}
													{this.state.bread == 'both' &&
														<>
															<div class="kt-login__title" style={{ "margin-bottom": " 2rem" }}>
																<h5> A Verification Code has been sent to your Email  </h5>
															</div>
															<div class="row">
																<div class="col-md-1"> </div>
																<div class="col-md-3" style={{ "padding-top": "8px" }}>
																	Email Code
																</div>
																<div class="col-md-7">
																	<input
																		style={{ color: this.state.pass_color }}
																		class="form-control"
																		type="text"
																		placeholder="Enter Verificaton Code"
																		name="password"
																		onChange={ev => this.setState({ passCode: ev.target.value })}
																	/>
																</div>
																<div class="col-md-1"> </div>
															</div>
															<div class="kt-login__actions" style={{ "margin": "1rem 0" }}>
																<NavLink
																	style={{ disply: "contents" }}
																	class="kt-link kt-login__signup-link"
																	to="/auth/forgot"
																	tag={Link} >   <span class="kt-menu__link-text"> <b> </b> </span>
																</NavLink>
																<button
																	id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary"
																	onClick={this.EnrollCode}>Verify Code</button>
															</div>

															<br></br>

															<div class="kt-login__title" style={{ "margin-bottom": " 2rem" }}>
																<h5> A Verification Code has been sent to your Mobile Number  </h5>
															</div>
															<div class="row">
																<div class="col-md-1"> </div>
																<div class="col-md-3" style={{ "padding-top": "8px" }}>
																	SMS Code
																</div>
																<div class="col-md-7">
																	<input
																		class="form-control"
																		type="text"
																		placeholder="Enter Verificaton Code"
																		name="text"
																		onChange={ev => this.setState({ passCode: ev.target.value })}

																	/>
																</div>
																<div class="col-md-1"> </div>

															</div>

															<div class="kt-login__actions" style={{ "margin": "1rem 0" }}>
																<NavLink
																	style={{ disply: "contents" }}
																	class="kt-link kt-login__signup-link"
																	to="/auth/forgot"
																	tag={Link} >   <span class="kt-menu__link-text"> <b> </b> </span>
																</NavLink>
																<button
																	id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary"
																	onClick={this.EnrollCodeSMS}>Verify Code</button>
															</div>

															<br />
															<br />													</>
													}





												</div>

											</>
										}

									
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





