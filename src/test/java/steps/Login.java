package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login {
    @Given("^User is on home page$")
    public void user_is_on_home_page()  {
        System.out.println("on home page");
    }

    @When("^User click on login link$")
    public void user_click_on_login_link() {
        System.out.println("click on login");
    }

    @When("^User insert your email and your password$")
    public void user_insert_your_email_and_your_password() {
        System.out.println("enters email and pwd");
    }

    @When("^User click in signIn button$")
    public void user_click_in_signIn_button() {
        System.out.println("click on signin button");
    }

    @Then("^User is will logged$")
    public void user_is_will_logged() {
        System.out.println("user is logged");
    }

    @When("^User insert your email(\\d+) and your pwd(\\d+)$")
    public void user_insert_your_email_and_your_pwd(int arg1, int arg2) {
        System.out.println(arg1+arg2);
    }


}
