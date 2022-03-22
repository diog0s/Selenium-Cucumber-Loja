package steps;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features",
glue = {"steps"},
monochrome = true, junit = {"--filename-compatible-names"})
//        , plugin = {"pretty","html:target/HtmlReports"})
public class TestRunner {
}
