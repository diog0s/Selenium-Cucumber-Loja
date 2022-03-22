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

public class LoginThree extends LoginPage {
    //WebDriver driver;
    @Given("^browser is open$")
    public void browserIsOpen() {
        System.out.println("Abriu o chrome");
        //System.setProperty("webdriver.chrome.driver",".\\driver\\chromedriver.exe");
        //driver = new ChromeDriver();
        //driver.manage().window().maximize();
    }

    @And("^user is in login page$")
    public void userIsInLoginPage() {
        System.out.println("user is in login page");
        getDriver().get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    @When("^user enters with ([^\"]*) and ([^\"]*)$")
    public void userEntersWithEmailAndPassword(String email, String password) {
        System.out.println("email: "+email+"password: "+password);
        insertEmail(email);
        insertPassword(password);

    }

    @And("^user click on login button$")
    public void userClickOnLoginButton() {
        System.out.println("Clicou no btn login");
        clickOnLoginBtn();
    }

    @Then("^user is logged$")
    public void userIsLogged() {
        System.out.println("User logged");
        String user = getDriver().findElement(By.xpath("//a[@class='account']")).getText();
        assertEquals("Diogo Santos", user);
        killDriver();
    }
}
