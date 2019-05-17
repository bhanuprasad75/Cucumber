package com.stepdefination;



import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddPlanDetails {
	static WebDriver driver;
	@Given("User should open the browser")
	public void user_should_open_the_browser() {System.setProperty("webdriver.chrome.driver","C:\\Users\\Bhanu\\eclipse-workspace\\Cucumber\\drivers\\chromedriver.exe");
	 driver=new ChromeDriver();
	 driver.get("http://demo.guru99.com/telecom/");
	    
	}

	@Given("User should go to the telecom website")
	public void user_should_go_to_the_telecom_website() {
		driver.get("http://demo.guru99.com/telecom/");
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	   
	}


@When("User should fill all the details as per the requirements")
public void user_should_fill_all_the_details_as_per_the_requirements(DataTable custdetails) {
	List<String> cusdet=custdetails.asList(String.class);
	

	driver.findElement(By.id("rental1")).sendKeys(cusdet.get(0));
	driver.findElement(By.id("local_minutes")).sendKeys(cusdet.get(1));
	driver.findElement(By.id("inter_minutes")).sendKeys(cusdet.get(2));
	driver.findElement(By.id("sms_pack")).sendKeys(cusdet.get(3));
	driver.findElement(By.id("minutes_charges")).sendKeys(cusdet.get(4));
	driver.findElement(By.id("inter_charges")).sendKeys(cusdet.get(5));
	driver.findElement(By.id("sms_charges")).sendKeys(cusdet.get(6));
	}

	@When("User should click on the submit buttons")
	public void user_should_click_on_the_submit_buttons() {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	  
	}

	@Then("It should show the congratulations page")
	public void it_should_show_the_congratulations_page() {
		Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	    
}
	
}
