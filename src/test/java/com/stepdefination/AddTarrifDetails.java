package com.stepdefination;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddTarrifDetails {
	static WebDriver driver;

	@Given("User need to open the Browser")
	public void user_need_to_open_the_Browser() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Bhanu\\eclipse-workspace\\Cucumber\\drivers\\chromedriver.exe");
		 driver=new ChromeDriver();
		 driver.get("http://demo.guru99.com/telecom/");
	}

	@Given("User should go to the telecom home page")
	public void user_should_go_to_the_telecom_home_page() {
		driver.findElement(By.xpath("//a[text()='Add Tariff Plan']")).click();
		   
	}

	@When("User need to enter all the tariff details")
	public void user_need_to_enter_all_the_tariff_details(DataTable custdetails) {
List<List<String>> cusdet = custdetails.asLists(String.class);
		driver.findElement(By.id("rental1")).sendKeys(cusdet.get(0).get(1));
		driver.findElement(By.id("local_minutes")).sendKeys(cusdet.get(1).get(1));
		driver.findElement(By.id("inter_minutes")).sendKeys(cusdet.get(2).get(2));
		driver.findElement(By.id("sms_pack")).sendKeys(cusdet.get(2).get(3));
		driver.findElement(By.id("minutes_charges")).sendKeys(cusdet.get(1).get(4));
		driver.findElement(By.id("inter_charges")).sendKeys(cusdet.get(0).get(5));
		driver.findElement(By.id("sms_charges")).sendKeys(cusdet.get(2).get(6));
	}

	@When("User should click on the submit button")
	public void user_should_click_on_the_submit_button() {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("User should get the congratulations page")
	public void user_should_get_the_congratulations_page() {
		Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	    


}
}