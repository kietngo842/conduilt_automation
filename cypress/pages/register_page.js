import { BaseHelper } from "./base_page";

const INPUT_USERNAME_LOCATOR = "input[type='text']";
const INPUT_EMAIL_LOCATOR = "input[type='email']";
const INPUT_PASSWORD_LOCATOR = "input[type='password']";
const BTN_REGISTER_LOCATOR = "button[type='submit']";


export const RegisterHelper = {

    inputRequireInformation(username, email, password) {
        BaseHelper.inputText(INPUT_USERNAME_LOCATOR, username);
        BaseHelper.inputText(INPUT_EMAIL_LOCATOR, email);
        BaseHelper.inputText(INPUT_PASSWORD_LOCATOR, password);
    },

    clickSubmit() {
        BaseHelper.clickButton(BTN_REGISTER_LOCATOR)
    }
}