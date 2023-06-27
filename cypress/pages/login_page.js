import { BaseHelper } from "../pages/base_page";

const INPUT_EMAIL_LOCATOR = "input[type='email']";
const INPUT_PASSWORD_LOCATOR = "input[type='password']";
const BTN_LOGIN_LOCATOR = "button[type='submit']";
const TXT_ERROR_MSG_LOCATOR = ".error-messages";

export const LoginHelper = {

    inputLoginData(username, password) {
        BaseHelper.inputText(INPUT_EMAIL_LOCATOR, username);
        BaseHelper.inputText(INPUT_PASSWORD_LOCATOR, password);
    },

    clickSubmit() {
        BaseHelper.clickButton(BTN_LOGIN_LOCATOR)
    },

    assertErrorMsg(message){
        BaseHelper.assertElementTextShouldBe(TXT_ERROR_MSG_LOCATOR, message)
    }
}