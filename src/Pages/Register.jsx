import React from "react";
import { Button, Card, CardHeader, CardBody, CardTitle, Collapse, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Media, NavbarBrand, Navbar, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";

import { userService } from './userService';
import ReactSnackBar from "react-js-snackbar";
import LoginBaner from "../../src/Pages/comman/Login/LoginBaner";

export default class Register extends React.Component {
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
			name: '', email: '', phone: '', username: '', password: '', phone: '', cpassword: '', users: [],
			u_error: '', u_color: 'black', email_error: '', email_color: 'black', phone_error: '', phone_color: 'black', phone_error: '', phone_color: 'black',
			user_error: '', user_color: 'black', pass_error: '', pass_color: 'black', cpass_error: '', cpass_color: 'black', redirect: false, message: '', bread: ''
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
					pass_error: ' password must be more than 6 Characters ',
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

			this.pass_KeyPre()
			this.name_KeyPre()
			this.email_KeyPre()
			this.users_KeyPre();
			if (this.state.email_color == 'green' && this.state.user_color == 'green' && this.state.pass_color == 'green' && this.state.u_color == 'green') {
				var data = {
					"profile": {
						"firstName": this.state.name,
						"lastName": this.state.username,
						"email": this.state.email,
						"login": this.state.email
					},
					"credentials": {
						"password": { "value": this.state.password }
					}
				}
				userService.register(data)
					.then(
						user => {
							console.log(user);

							if (user.errorCode == "E0000001") {
								this.state.pop = user.errorSummary;
								this.show();
							}
							if (user.status == "STAGED") {
								this.state.pop = "Created Successfully ";
								this.show();

								this.users = user;
								if (user._links) {
									userService.active(user.id)
										.then(
											db => {

											}
										)
								}
								setTimeout(
									function () {
										this.state.pop = "Please Check Mail Account ";
										this.show();
									}.bind(this), 3000);
							}


						}
					)

				// this.state.pop= "Created Successfully ";
				// this.show();
				//  setTimeout(
				// 	function() {
				// 		this.props.history.push({
				// 			pathname: `/auth/login`,
				// 			search: '?login=true',
				// 			state: { listId:0,	vueId:0,} });					  
				// 	}.bind(this),3000
				// );




			} else {

			}
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
						<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">


							<LoginBaner />


							<div class="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">





								<div class="kt-login__body">


									<div class="kt-login__form">
										<div class="kt-login__title">
											<h3>Sign Up</h3>
										</div>


										<form class="kt-form" action="" novalidate="novalidate">
											<div class="form-group">
												<input class="form-control" type="text" placeholder="Fist Name" name="email" autocomplete="off"
													style={{ color: this.state.u_color }}
													value={this.state.name}
													onChange={ev => this.setState({ name: ev.target.value })}
													onKeyPress={this.name_KeyPre}
												/>
												<b><font color='red'>{this.state.u_error}</font></b>
											</div>
											<div class="form-group">
												<input class="form-control" type="text" placeholder="Last Name" name="email" autocomplete="off"
													style={{ color: this.state.user_color }}
													value={this.state.username}
													onChange={ev => this.setState({ username: ev.target.value })}
													onKeyPress={this.users_KeyPre} />
												<b><font color='red'>{this.state.user_error}</font></b>
											</div>
											<div class="form-group">
												<input class="form-control" type="text" placeholder="Phone Number" name="phone" autocomplete="off"
													style={{ color: this.state.phone_color }}
													onChange={ev => this.setState({ phone: ev.target.value })}
													onKeyPress={this.phone_KeyPre} />
												<b><font color='red'>{this.state.phone_error}</font></b>
											</div>
											<div class="form-group">
												<input class="form-control" type="text" placeholder="Email" name="email" autocomplete="off"
													style={{ color: this.state.email_color }}
													onChange={ev => this.setState({ email: ev.target.value })}
													onKeyPress={this.email_KeyPre} />
												<b><font color='red'>{this.state.email_error}</font></b>
											</div>

											<div class="form-group">
												<input class="form-control" type="password" placeholder="Password" name="password"
													style={{ color: this.state.pass_color }}
													value={this.state.password}
													onChange={ev => this.setState({ password: ev.target.value })}
													onKeyPress={this.pass_KeyPre}
												/>
												<b> <font color='red'>{this.state.pass_error}</font></b>
											</div>
											<div class="form-group">
												<input class="form-control" type="password" placeholder="Confirm Password" name="password"
													style={{ color: this.state.cpass_color }}
													value={this.state.cpassword}
													onChange={ev => {
														this.setState({ cpassword: ev.target.value })
														if (this.state.password == ev.target.value) {
															this.setState({
																cpass_error: '',
																cpass_color: 'green'
															});
														} else {
															this.setState({
																cpass_error: ' Mismatch password',
																cpass_color: 'red'
															});

														}
													}
													}
													onKeyPress={this.cpass_KeyPre}
												/>
												<b> <font color='red'>{this.state.cpass_error}</font></b>
											</div>
											<div class="form-group">
												<br></br>
												<b> Your custom security question</b>
												<select class="form-control" name="securityQuestion" id="forgot_pwd.securityQuestion">
													<optgroup label="Stock questions">
														<option value="disliked_food" selected="">What is the food you least liked as a child?</option>
														<option value="name_of_first_plush_toy">What is the name of your first stuffed animal?</option>
														<option value="first_award">What did you earn your first medal or award for?</option>
														<option value="favorite_security_question">What is your favorite security question?</option>
														<option value="favorite_toy">What is the toy/stuffed animal you liked the most as a kid?</option>
														<option value="first_computer_game">What was the first computer game you played?</option>
														<option value="favorite_movie_quote">What is your favorite movie quote?</option>
														<option value="first_sports_team_mascot">What was the mascot of the first sports team you played on?</option>
														<option value="first_music_purchase">What music album or song did you first purchase?</option>
														<option value="favorite_art_piece">What is your favorite piece of art?</option>
														<option value="grandmother_favorite_desert">What was your grandmother's favorite dessert?</option>
														<option value="first_thing_cooked">What was the first thing you learned to cook?</option>
														<option value="childhood_dream_job">What was your dream job as a child?</option>
														<option value="place_where_significant_other_was_met">Where did you meet your spouse/significant other?</option>
														<option value="favorite_vacation_location">Where did you go for your favorite vacation?</option>
														<option value="new_years_two_thousand">Where were you on New Year's Eve in the year 2000?</option>
														<option value="favorite_speaker_actor">Who is your favorite speaker/orator?</option>
														<option value="favorite_book_movie_character">Who is your favorite book/movie character?</option>
														<option value="favorite_sports_player">Who is your favorite sports player?</option>
													</optgroup>
													<optgroup label="Custom question">
														<option value="custom">Create your own security question</option>
													</optgroup>
												</select>

												<br></br>
												<b>  Answer</b>
												<input class="form-control" type="text" placeholder="Answer" name="email" autocomplete="off"
													style={{ color: this.state.answer_color }}
													value={this.state.answer}
													onChange={ev => this.setState({ answer: ev.target.value })}
													onKeyPress={this.answer_KeyPre} />


											</div>

											<div class="form-group">
												<br></br>

												<b> 	Select your MFA type</b>
												<br></br>
												<br></br>
												<input
													onClick={ev => {
														this.setState({ bread: 'email' })
													}}
													type="radio" id="html" name="fav_language" value="HTML" style={{ "width": "18px", display: "inline", "height": " 15px" }} /> <label for="html" >Email</label> &nbsp;&nbsp;
												<input
													onClick={ev => {
														this.setState({ bread: 'sms' })
													}}
													type="radio" id="css" name="fav_language" value="CSS" style={{ "width": "18px", display: "inline", "height": " 15px" }} /> <a for="css" >SMS</a>
												&nbsp;&nbsp;

												<input
													onClick={ev => {
														this.setState({ bread: 'both' })
													}}
													type="radio" id="css" name="fav_language" value="CSS" style={{ "width": "18px", display: "inline", "height": " 15px" }} /> <a for="css" >Both</a>

											</div>




											{this.state.bread == "email" &&


												<div class="form-group">
													<input class="form-control" type="text" placeholder="Email" name="email" autocomplete="off"
														value={this.state.email}
														style={{ color: this.state.email_color }}
														onChange={ev => this.setState({ email: ev.target.value })}
														onKeyPress={this.email_KeyPre} />
													<b><font color='red'>{this.state.email_error}</font></b>
												</div>
											}
											{this.state.bread == "sms" &&

												<div class="form-group">
													<input class="form-control" type="text" placeholder="Phone Number" name="phone" autocomplete="off"
														value={this.state.phone}
														style={{ color: this.state.phone_color }}
														onChange={ev => this.setState({ phone: ev.target.value })}
														onKeyPress={this.phone_KeyPre} />
													<b><font color='red'>{this.state.phone_error}</font></b>
												</div>
											}
											{this.state.bread == "both" &&
												<>
													<div class="form-group">
														<input class="form-control" type="text" placeholder="Email" name="email" autocomplete="off"
															value={this.state.email}
															style={{ color: this.state.email_color }}
															onChange={ev => this.setState({ email: ev.target.value })}
															onKeyPress={this.email_KeyPre} />
														<b><font color='red'>{this.state.email_error}</font></b>
													</div>
													<div class="form-group">
														<input class="form-control" type="text" placeholder="Phone Number" name="phone" autocomplete="off"
															value={this.state.phone}
															style={{ color: this.state.phone_color }}
															onChange={ev => this.setState({ phone: ev.target.value })}
															onKeyPress={this.phone_KeyPre} />
														<b><font color='red'>{this.state.phone_error}</font></b>
													</div>
												</>
											}





											<div class="kt-login__actions">


												<NavLink
													style={{ disply: "contents" }}
													class="kt-link kt-login__signup-link"
													to="/auth/login"
													tag={Link} >   <span class="kt-menu__link-text"> <b>  Sign in instead </b> </span>
												</NavLink>

												<button id="kt_login_signin_submit" class="btn btn-primary btn-elevate kt-login__btn-primary" onClick={this.reg}> Sign Up</button>

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





