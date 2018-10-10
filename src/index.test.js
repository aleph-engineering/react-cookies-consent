import React from 'react';
import { mount } from 'enzyme';
import { COOKIES_CONSENT_DEFAULT_MESSAGE, COOKIES_CONSENT_BUTTON_MESSAGE } from './constants';
import CookiesConsent from '.';

describe('Suite of tests for the CookiesConsent component', () => {
    test('CookiesConsent component should render correctly with default messages', () => {
        const wrapper = mount(<CookiesConsent />);
        expect(wrapper.find('div.cookies-consent')).toBeDefined();
        expect(wrapper.find('div.cookies-consent')).toHaveLength(1);

        expect(wrapper.find('span.cookies-consent-text')).toBeDefined();
        expect(wrapper.find('span.cookies-consent-text')).toHaveLength(1);
        expect(wrapper.find('span.cookies-consent-text').get(0).props.children).toBe(
            COOKIES_CONSENT_DEFAULT_MESSAGE
        );

        expect(wrapper.find('button.cookies-consent-button')).toBeDefined();
        expect(wrapper.find('button.cookies-consent-button')).toHaveLength(1);
        expect(wrapper.find('button.cookies-consent-button').get(0).props.children).toBe(
            COOKIES_CONSENT_BUTTON_MESSAGE
        );
    });

    test('CookiesConsent component should render messages passed as a prop', () => {
        const cookiesConsentText = 'We use cookies';
        const cookiesConsentButtonText = 'Accept';
        const wrapper = mount(
            <CookiesConsent message={cookiesConsentText} buttonMessage={cookiesConsentButtonText} />
        );

        expect(wrapper.find('span.cookies-consent-text')).toBeDefined();
        expect(wrapper.find('span.cookies-consent-text')).toHaveLength(1);
        expect(wrapper.find('span.cookies-consent-text').get(0).props.children).toBe(
            cookiesConsentText
        );

        expect(wrapper.find('button.cookies-consent-button')).toBeDefined();
        expect(wrapper.find('button.cookies-consent-button')).toHaveLength(1);
        expect(wrapper.find('button.cookies-consent-button').get(0).props.children).toBe(
            cookiesConsentButtonText
        );
    });
});
