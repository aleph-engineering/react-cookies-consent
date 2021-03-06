import React from 'react';
import { mount } from 'enzyme';
import {
    COOKIES_CONSENT_DEFAULT_MESSAGE,
    COOKIES_CONSENT_BUTTON_MESSAGE,
    COOKIES_ID,
    COOKIES_EXPIRES,
} from './constants';
import CookiesConsent from '.';

describe('Suite of tests for the CookiesConsent component', () => {
    test('CookiesConsent component should render correctly with default messages', () => {
        const wrapper = mount(<CookiesConsent />);
        expect(wrapper.find('div.cookies-consent')).toBeDefined();
        expect(wrapper.find('div.cookies-consent')).toHaveLength(1);

        expect(wrapper.find('span.cookies-consent-text')).toBeDefined();
        expect(wrapper.find('span.cookies-consent-text')).toHaveLength(1);
        expect(wrapper.props().message).toBe(COOKIES_CONSENT_DEFAULT_MESSAGE);
        expect(wrapper.find('span.cookies-consent-text').get(0).props.children).toBe(
            COOKIES_CONSENT_DEFAULT_MESSAGE
        );

        expect(wrapper.find('button.cookies-consent-button')).toBeDefined();
        expect(wrapper.find('button.cookies-consent-button')).toHaveLength(1);
        expect(wrapper.props().buttonMessage).toBe(COOKIES_CONSENT_BUTTON_MESSAGE);
        expect(wrapper.find('button.cookies-consent-button').get(0).props.children).toBe(
            COOKIES_CONSENT_BUTTON_MESSAGE
        );

        expect(wrapper.props().cookieId).toBe(COOKIES_ID);
        expect(wrapper.props().expiresIn).toBe(COOKIES_EXPIRES);
    });

    test('CookiesConsent component should render messages passed as a prop', () => {
        const cookieIdText = 'my-unique-id';
        const cookiesConsentText = 'We use cookies';
        const cookiesConsentButtonText = 'Accept';
        const cookiesConsentExpiresIn = 7;
        const wrapper = mount(
            <CookiesConsent
                message={cookiesConsentText}
                buttonMessage={cookiesConsentButtonText}
                cookieId={cookieIdText}
                expiresIn={cookiesConsentExpiresIn}
            />
        );

        expect(wrapper.find('span.cookies-consent-text')).toBeDefined();
        expect(wrapper.find('span.cookies-consent-text')).toHaveLength(1);
        expect(wrapper.props().message).toBe(cookiesConsentText);
        expect(wrapper.find('span.cookies-consent-text').get(0).props.children).toBe(
            cookiesConsentText
        );

        expect(wrapper.find('button.cookies-consent-button')).toBeDefined();
        expect(wrapper.find('button.cookies-consent-button')).toHaveLength(1);
        expect(wrapper.props().buttonMessage).toBe(cookiesConsentButtonText);
        expect(wrapper.find('button.cookies-consent-button').get(0).props.children).toBe(
            cookiesConsentButtonText
        );

        expect(wrapper.props().cookieId).toBe(cookieIdText);
        expect(wrapper.props().expiresIn).toBe(cookiesConsentExpiresIn);
    });
});
