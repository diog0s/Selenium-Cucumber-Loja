package pages;

import core.BasePage;

public class LoginPage extends BasePage {

    public void insertEmail(String email){
        clickOn("//input[@id='email']");
        writeOn("//input[@id='email']", email);
    }

    public void insertPassword(String password){
        clickOn("//input[@id='passwd']");
        writeOn("//input[@id='passwd']", password);
    }

    public void clickOnLoginBtn(){
        clickOn("//button[@id='SubmitLogin']");
    }
}
