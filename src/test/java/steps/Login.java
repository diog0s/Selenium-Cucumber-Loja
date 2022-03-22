package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import pages.LoginPage;

import static core.DriverFactory.getDriver;
import static core.DriverFactory.killDriver;
import static org.junit.Assert.assertEquals;

public class Login extends LoginPage {
    //WebDriver driver;
    @Given("^browser is open$")
    public void browserIsOpen() {
        System.out.println("Open the Chrome");
    }

    @And("^user is in login page$")
    public void userIsInLoginPage() {
        getDriver().get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    @When("^user enters with ([^\"]*) and ([^\"]*)$")
    public void userEntersWithEmailAndPassword(String email, String password) {
        insertEmail(email);
        insertPassword(password);

    }

    @And("^user click on login button$")
    public void userClickOnLoginButton() {
        clickOnLoginBtn();
    }

    @Then("^user is logged$")
    public void userIsLogged() {
        String user = getDriver().findElement(By.xpath("//a[@class='account']")).getText();
        assertEquals("Diogo Santos", user);
        killDriver();
    }

    @Then("^user is not logged$")
    public void userIsNotLogged() {
        String alert = getDriver().findElement(By.xpath("//div[@class='alert alert-danger']/p")).getText();
        assertEquals("There is 1 error", alert);
        killDriver();
    }
}
