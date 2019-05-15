package com.stepdefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class AddCustomer {
	static WebDriver driver;
	
	@Given("User has to open the browser")
	public void user_has_to_open_the_browser() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Bhanu\\eclipse-workspace\\Cucumber\\drivers\\chromedriver.exe");
		 driver=new ChromeDriver();
		 driver.get("http://demo.guru99.com/telecom/");
		
	   
	}

	@Given("User has to go to telecom website")
	public void user_has_to_go_to_telecom_website() {
		
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
		

	    
	}

	@When("User need to fill all the details")
	public void user_need_to_fill_all_the_details() {
		driver.findElement(By.xpath("//label[@for='done']")).click();
		driver.findElement(By.id("fname")).sendKeys("bhanu");
		driver.findElement(By.id("lname")).sendKeys("prasad");
		driver.findElement(By.id("email")).sendKeys("prasad75@gmail.com");
		driver.findElement(By.name("addr")).sendKeys("chennai");
		driver.findElement(By.id("telephoneno")).sendKeys("9087426646");
		driver.findElement(By.name("submit")).click();
		
	    
	}

	@Then("User need to verify that the id is created or not")
	public void user_need_to_verify_that_the_id_is_created_or_not() {
	
	   Assert.assertTrue(driver.findElement(By.xpath("//td[@align='center'][2]")).isDisplayed());
	}



}
