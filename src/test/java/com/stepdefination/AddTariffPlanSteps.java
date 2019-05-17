package com.stepdefination;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddTariffPlanSteps {
	static WebDriver driver;
	@Given("User should open the webbrowser")
	public void user_should_open_the_webbrowser() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Bhanu\\eclipse-workspace\\Cucumber\\drivers\\chromedriver.exe");
		 driver=new ChromeDriver();
		 driver.get("http://demo.guru99.com/telecom/");
	}

	@Given("User should cick on the add tariff")
	public void user_should_cick_on_the_add_tariff() {
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	}

	@When("user will fill all the details depend up on requirement")
	public void user_will_fill_all_the_details_depend_up_on_requirement(DataTable custdetails) {
		 List<Map<String, String>> cusdet = custdetails.asMaps(String.class,String.class);
		driver.findElement(By.id("rental1")).sendKeys(cusdet.get(1).get("Monthly Rental"));
		driver.findElement(By.id("local_minutes")).sendKeys(cusdet.get(1).get("Free Local Minutes"));
		driver.findElement(By.id("inter_minutes")).sendKeys(cusdet.get(1).get("Free International Minutes"));
		driver.findElement(By.id("sms_pack")).sendKeys(cusdet.get(1).get("Free SMS Pack"));
		driver.findElement(By.id("minutes_charges")).sendKeys(cusdet.get(1).get("Local Per Minutes Charges"));
		driver.findElement(By.id("inter_charges")).sendKeys(cusdet.get(1).get("International Per Minutes Charges"));
		driver.findElement(By.id("sms_charges")).sendKeys(cusdet.get(1).get("SMS Per Charges"));  
	}

	@When("User has to click on the submit buton")
	public void user_has_to_click_on_the_submit_buton() {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	    
	}

	@Then("User will get the congrats message")
	public void user_will_get_the_congrats_message() {
		Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	    
	    
	}

}
