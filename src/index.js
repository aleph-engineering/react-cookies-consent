import React from 'react';
import PropTypes from 'prop-types';
import { COOKIES_CONSENT_DEFAULT_MESSAGE, COOKIES_CONSENT_BUTTON_MESSAGE } from './constants';
import './styles.css';

const CookiesConsent = ({ message, buttonMessage }) => (
    <div className="cookies-consent">
        <span className="cookies-consent-text">{message}</span>
        <span>
            <button type="button" className="cookies-consent-button">
                {buttonMessage}
            </button>
        </span>
    </div>
);

CookiesConsent.propTypes = {
    message: PropTypes.string,
    buttonMessage: PropTypes.string,
};

CookiesConsent.defaultProps = {
    message: COOKIES_CONSENT_DEFAULT_MESSAGE,
    buttonMessage: COOKIES_CONSENT_BUTTON_MESSAGE,
};

export default CookiesConsent;
