import { COOKIES_CONSENT_DEFAULT_MESSAGE, COOKIES_CONSENT_BUTTON_MESSAGE } from '.';

describe('Suite of tests for the CookiesConsent component constants', () => {
    test('CookiesConsent component should render correctly with default messages', () => {
        expect(COOKIES_CONSENT_DEFAULT_MESSAGE).toBe(
            'Cookies help us deliver our services. By using our services, you agree to our use of cookies.'
        );
        expect(COOKIES_CONSENT_BUTTON_MESSAGE).toBe('OK');
    });
});
