package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;


public class GoogleSearch {
    WebDriver driver = null;

    @Given("^browser is opened$")
    public void browser_is_opened(){
        System.setProperty("webdriver.chrome.driver",".\\driver\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    @When("^user is on home page$")
    public void user_is_on_home_page()  {
        driver.get("https://www.google.com/");
    }

    @And("^user type a txt in search box$")
    public void user_type_a_txt_in_search_box() {
        driver.findElement(By.xpath("//input[@title='Pesquisar']")).click();
        driver.findElement(By.xpath("//input[@title='Pesquisar']")).sendKeys("Test de software");
    }

    @And("^tap in enter$")
    public void tap_in_enter() {
        driver.findElement(By.xpath("//input[@title='Pesquisar']")).sendKeys(Keys.ENTER);
    }

    @Then("^user get your search results$")
    public void user_get_your_search_results() {
        String result = driver.findElement(By.xpath("(//span[@class='q8U8x'])[1]")).getText();
        driver.close();
        driver.quit();
        assertTrue(result.contains("As pessoas"));
    }


}
