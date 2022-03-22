package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.assertEquals;

public class LoginTwo {
    WebDriver driver;
    @Given("^browser is open$")
    public void browserIsOpen() {
        System.out.println("Abriu o chrome");
        System.setProperty("webdriver.chrome.driver",".\\driver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @And("^user is in login page$")
    public void userIsInLoginPage() {
        System.out.println("user is in login page");
        driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    @When("^user enters with ([^\"]*) and ([^\"]*)$")
    public void userEntersWithEmailAndPassword(String email, String password) {
        System.out.println("email: "+email+"password: "+password);
        driver.findElement(By.xpath("//input[@id='email']")).click();
        driver.findElement(By.xpath("//input[@id='email']")).sendKeys(email);
        driver.findElement(By.xpath("//input[@id='passwd']")).click();
        driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys(password);

    }

    @And("^user click on login button$")
    public void userClickOnLoginButton() {
        System.out.println("Clicou no btn login");
        driver.findElement(By.xpath("//button[@id='SubmitLogin']")).click();
    }

    @Then("^user is logged$")
    public void userIsLogged() {
        System.out.println("User logged");
        String user = driver.findElement(By.xpath("//a[@class='account']")).getText();
        assertEquals("Diogo Santos", user);
        driver.close();
        driver.quit();
    }
}
