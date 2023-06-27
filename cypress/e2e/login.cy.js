import { LoginHelper } from "../pages/login_page";
import { HomePageHelper } from "../pages/home_page";

describe('Create Project', () => {
    
    let username = "abcd@exmp.com";
    let password = "Admin123";
    let errorMessage = "email or password is invalid";

    before(function() {
        cy.visit(`https://react-redux.realworld.io/ `)
    })


    it('User cannot log in when entering a wrong email address or password', () => {

        //Navigate to Sign In Page
        HomePageHelper.navigateToSignIn();

        //Input wrong login data and click submit
        LoginHelper.inputLoginData(username, password);
        LoginHelper.clickSubmit();

        //Verify error message is shown
        LoginHelper.assertErrorMsg(errorMessage);
    });
});