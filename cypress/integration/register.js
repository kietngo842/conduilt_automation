import { RegisterHelper } from "../pages/register_page";
import { HomePageHelper } from "../pages/home_page";

describe('Create Project', () => {

    let randomUsername, randomEmail;
    let password = "Admin123";

    before(function() {
        // Generate a random string
        function generateRandomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        
        // Generate a random username
        randomUsername = generateRandomString(8);
        randomEmail = `${generateRandomString(8)}@example.com`;

        cy.visit(`https://react-redux.realworld.io/ `);
    })

    it('Register New User Successfully', () => {
        //Go To Register Page
        HomePageHelper.navigateToSignUp();

        //Input required fields and click submit button
        RegisterHelper.inputRequireInformation(randomUsername, randomEmail, password)
        RegisterHelper.clickSubmit();

        //Verify username is shown in the nav bar
        HomePageHelper.assertUsernameIsVisible(randomUsername);
    });
});