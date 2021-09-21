import React from "react";

export default class LoginBaner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>

                <div class="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside" style={{ "background-image": " url(http://clienttesting.cc/konza/assets/media//bg/bg-4.png)", "height": " 800px !important" }}>
                    <div class="kt-grid__item">
                        <a class="kt-login__logo">
                            <img src="http://clienttesting.cc/konza/assets/konza-logo-wht.png" />
                        </a>
                    </div>
                    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
                        <div class="kt-grid__item kt-grid__item--middle">
                            <h3 class="kt-login__title">Welcome to KONZA!</h3>
                            <h4 class="kt-login__subtitle">KONZA builds upon a proven model for the development of the technical infrastructure necessary to enable the sharing of clinical information at the point of care, while supporting transformative value-based payment models, care management, and data analytics. Patients, physicians, healthcare facilities, and other healthcare providers from across the country benefit from KONZA's delivery of unequaled actionable intelligence.</h4>
                        </div>
                    </div>
                    <div class="kt-grid__item">
                        <div class="kt-login__info">
                            <div class="kt-login__copyright">
                                @ KONZA, Incorporated 2019 - All Rights Reserved.
                            </div>

                        </div>
                    </div>
                </div>





            </>
        );
    }
}




