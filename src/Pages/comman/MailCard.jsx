import React from "react";

export default class MailCard extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
        };

    }
    
  new = ev => {
    ev.preventDefault();
    this.props.history.push({
      pathname: `/user/SecureAdd`,
      search: '',
      state: { listId: 0, vueId: 0, }
    });
  }
    render() {


        return (
            <>

             


                <div class="col-xl-12">


                    <div class="kt-portlet kt-portlet--tabs kt-portlet--height-fluid">
                       
                        <div class="kt-portlet__head" styel={{}}>

                            <div class="kt-portlet__body" style={{ "padding": "1px","padding-top": "10px" }}>
                                <div class="row">
                                    <div class="col-md-6">
                                        <select
                                            style={{ "height": "30px", "padding": "1px" }}
                                            class="form-control kt-select2"
                                            id="kt_select2_1"
                                        >
                                            <option value="0" disabled selected >Select Folder </option>
                                            <option value="1" > Index </option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="email"
                                            style={{ "height": "30px", "padding": "1px" }}
                                            class="form-control" aria-describedby="emailHelp" placeholder="Search "
                                            onChange={e => {
                                                this.setState({ lastname: e.target.value })
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div class="kt-portlet__body" style={{"padding":"1px"}}>
                            <div class="tab-content">
                                <div class="tab-pane active" id="kt_widget2_tab1_content">
                                    <div class="kt-widget2">
                                        <div class="kt-widget2__item kt-widget2__item--primary">
                                            <div class="kt-widget2__checkbox">
                                                <label class="kt-checkbox kt-checkbox--solid kt-checkbox--single">
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                            <div class="kt-widget2__info">
                                                <a  class="kt-widget2__title">
                                                    test@gmail.com
                                                    GAU2131565401
                                                </a>
                                                <a  class="kt-widget2__username">
                                                02/08/2021 12:05
                                                </a>
                                            </div>
                                            <div class="kt-widget2__actions">
                                                <a  class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="false">
                                                    <i class="flaticon-more-1"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right" x-placement="bottom-end" style={{ "position": " absolute", "will-change": " transform", " top": " 0px", " left": "0px", " transform": "translate3d(330px, 43px, 0px);" }}>
                                                    <ul class="kt-nav">
                                                        {/* <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-line-chart"></i>
                                                                <span class="kt-nav__link-text">Reports</span>
                                                            </a>
                                                        </li> */}
                                                        <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-send"></i>
                                                                <span class="kt-nav__link-text">Messages</span>
                                                            </a>
                                                        </li>
                                                        {/* <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                                                                <span class="kt-nav__link-text">Charts</span>
                                                            </a>
                                                        </li>
                                                        <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-avatar"></i>
                                                                <span class="kt-nav__link-text">Members</span>
                                                            </a>
                                                        </li>
                                                        <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-settings"></i>
                                                                <span class="kt-nav__link-text">Settings</span>
                                                            </a>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kt-widget2__item kt-widget2__item--warning">
                                            <div class="kt-widget2__checkbox">
                                                <label class="kt-checkbox kt-checkbox--solid kt-checkbox--single">
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                            <div class="kt-widget2__info">
                                                <a  class="kt-widget2__title">
                                                    test@gmail.com
                                                    GAU2131565401
                                                </a>
                                                <a  class="kt-widget2__username">
                                                02/08/2021 12:05
                                                </a>
                                            </div>
                                            <div class="kt-widget2__actions">
                                                <a  class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown">
                                                    <i class="flaticon-more-1"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right">
                                                    <ul class="kt-nav">
                                                        {/* <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-line-chart"></i>
                                                                <span class="kt-nav__link-text">Reports</span>
                                                            </a>
                                                        </li> */}
                                                         <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-send"></i>
                                                                <span class="kt-nav__link-text">Messages</span>
                                                            </a>
                                                        </li>
                                                        {/*<li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                                                                <span class="kt-nav__link-text">Charts</span>
                                                            </a>
                                                        </li>
                                                        <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-avatar"></i>
                                                                <span class="kt-nav__link-text">Members</span>
                                                            </a>
                                                        </li>
                                                        <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-settings"></i>
                                                                <span class="kt-nav__link-text">Settings</span>
                                                            </a>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kt-widget2__item kt-widget2__item--brand">
                                            <div class="kt-widget2__checkbox">
                                                <label class="kt-checkbox kt-checkbox--solid kt-checkbox--single">
                                                    <input type="checkbox" />
                                                    <span></span>
                                                </label>
                                            </div>
                                            <div class="kt-widget2__info">
                                                <a  class="kt-widget2__title">
                                                    test@gmail.com
                                                    GAU2131565401
                                                </a>
                                                <a  class="kt-widget2__username">
                                                02/08/2021 12:05
                                                </a>
                                            </div>
                                            <div class="kt-widget2__actions">
                                                <a  class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown">
                                                    <i class="flaticon-more-1"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right">
                                                    <ul class="kt-nav">
                                                     {/* <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-line-chart"></i>
                                                                <span class="kt-nav__link-text">Reports</span>
                                                            </a>
                                                        </li> */}
                                                         <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-send"></i>
                                                                <span class="kt-nav__link-text">Messages</span>
                                                            </a>
                                                        </li>
                                                        {/*<li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-pie-chart-1"></i>
                                                                <span class="kt-nav__link-text">Charts</span>
                                                            </a>
                                                        </li>
                                                        <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-avatar"></i>
                                                                <span class="kt-nav__link-text">Members</span>
                                                            </a>
                                                        </li>
                                                        <li class="kt-nav__item">
                                                            <a  class="kt-nav__link">
                                                                <i class="kt-nav__link-icon flaticon2-settings"></i>
                                                                <span class="kt-nav__link-text">Settings</span>
                                                            </a>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>


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




