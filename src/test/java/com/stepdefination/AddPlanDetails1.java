package com.stepdefination;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddPlanDetails1 {
	static WebDriver driver;
	@Given("User should open the browser{int}")
	public void user_should_open_the_browser(Integer int1) {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Bhanu\\eclipse-workspace\\Cucumber\\drivers\\chromedriver.exe");
		 driver=new ChromeDriver();
		 driver.get("http://demo.guru99.com/telecom/");
	    
	}

	@Given("User should go to the telecom website{int}")
	public void user_should_go_to_the_telecom_website(Integer int1) {
		driver.get("http://demo.guru99.com/telecom/");
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
	   
		
	}

	@When("User should fill all the details as per the requirements{int}")
	public void user_should_fill_all_the_details_as_per_the_requirements(Integer int1, DataTable det) {
		Map<String,String> details = det.asMap(String.class, String.class);
		
		
		driver.findElement(By.id("rental1")).sendKeys(details.get("Monthly Rental"));
		driver.findElement(By.id("local_minutes")).sendKeys(details.get("Free Local Minutes"));
		driver.findElement(By.id("inter_minutes")).sendKeys(details.get("Free International Minutes"));
		driver.findElement(By.id("sms_pack")).sendKeys(details.get("Free SMS Pack"));
		driver.findElement(By.id("minutes_charges")).sendKeys(details.get("Local Per Minutes Charges"));
		driver.findElement(By.id("inter_charges")).sendKeys(details.get("International Per Minutes Charges"));
		driver.findElement(By.id("sms_charges")).sendKeys(details.get("SMS Per Charges"));
	    
	}

	@When("User should click on the submit buttons{int}")
	public void user_should_click_on_the_submit_buttons(Integer int1) {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	    
	}

	@Then("It should show the congratulations page{int}")
	public void it_should_show_the_congratulations_page(Integer int1) {
		Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	    
	}



}
