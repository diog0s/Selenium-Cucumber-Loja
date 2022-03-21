package steps;

import cucumber.api.java.en.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.assertEquals;


public class LoginTwo {
    WebDriver driver = null;
    @Given("^browser is open$")
    public void browser_is_open() {
        System.setProperty("webdriver.chrome.driver",".\\driver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
    }

    @And("^user is in login page$")
    public void user_is_in_login_page() {
        driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
    }

    @When("^user enters with (.*) and (.*)$")
    public void user_enters_with_username_and_password(String username, String password) {
        driver.findElement(By.xpath("//input[@id='email']")).click();
        driver.findElement(By.xpath("//input[@id='email']")).sendKeys(username);
        driver.findElement(By.xpath("//input[@id='passwd']")).click();
        driver.findElement(By.xpath("//input[@id='passwd']")).sendKeys(password);
    }

    @And("^user click on login button$")
    public void user_click_on_login_button() {
        driver.findElement(By.xpath("//button[@id='SubmitLogin']")).click();
    }

    @Then("^user is logged$")
    public void user_is_logged() {
        String user = driver.findElement(By.xpath("//a[@class='account']")).getText();
        assertEquals("Diogo Santos", user);
        driver.close();
        driver.quit();
    }

}
