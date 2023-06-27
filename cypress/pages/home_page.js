import { BaseHelper } from "../pages/base_page";

const TXT_SIGN_UP_LOCATOR = "a[href*='#register']"
const TXT_SIGN_IN_LOCATOR = "a[href*='#login']"


export const HomePageHelper = {

    navigateToSignUp() {
        BaseHelper.clickButton(TXT_SIGN_UP_LOCATOR);
    },

    navigateToSignIn() {
        BaseHelper.clickButton(TXT_SIGN_IN_LOCATOR);
    },

    assertUsernameIsVisible(username) {
        BaseHelper.assertElementIsVisible(`a[href*='#@${username}']`);
    }
}