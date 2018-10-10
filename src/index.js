import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import {
    COOKIES_CONSENT_BUTTON_MESSAGE,
    COOKIES_CONSENT_DEFAULT_MESSAGE,
    COOKIES_ID,
} from './constants';
import './styles.css';

export default class CookiesConsent extends Component {
    state = {
        cookiesConsent: false,
    };

    componentWillMount() {
        const { cookieId } = this.props;
        const cookiesConsent = Cookies.get(cookieId);
        if (cookiesConsent === 'true') {
            this.enableCookiesConsent();
        }
    }

    enableCookiesConsent = () => {
        this.setState(prevState => ({
            ...prevState,
            cookiesConsent: true,
        }));
    };

    handleConsentAccepted = () => {
        const { cookieId } = this.props;
        Cookies.set(cookieId, 'true');
        this.enableCookiesConsent();
    };

    render() {
        const { message, buttonMessage } = this.props;
        const { cookiesConsent } = this.state;
        return (
            <div>
                {cookiesConsent === false && (
                    <div className="cookies-consent">
                        <span className="cookies-consent-text">{message}</span>
                        <span>
                            <button
                                type="button"
                                className="cookies-consent-button"
                                onClick={this.handleConsentAccepted}>
                                {buttonMessage}
                            </button>
                        </span>
                    </div>
                )}
            </div>
        );
    }
}

CookiesConsent.propTypes = {
    cookieId: PropTypes.string,
    message: PropTypes.string,
    buttonMessage: PropTypes.string,
};

CookiesConsent.defaultProps = {
    cookieId: COOKIES_ID,
    message: COOKIES_CONSENT_DEFAULT_MESSAGE,
    buttonMessage: COOKIES_CONSENT_BUTTON_MESSAGE,
};
