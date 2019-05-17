$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/AddCustomer.feature");
formatter.feature({
  "name": "Adding Customer details to the telecom website",
  "description": "I want to use this  for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User has to open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer.user_has_to_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to go to telecom website",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer.user_has_to_go_to_telecom_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User need to fill all the details",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer.user_need_to_fill_all_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User need to verify that the id is created or not",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer.user_need_to_verify_that_the_id_is_created_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/PlanDeatilsList.feature");
formatter.feature({
  "name": "Entering the Plan Details in the telecom website",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Giving the Plan Details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User should open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddPlanDetails.user_should_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should go to the telecom website",
  "keyword": "And "
});
formatter.match({
  "location": "AddPlanDetails.user_should_go_to_the_telecom_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should fill all the details as per the requirements",
  "rows": [
    {
      "cells": [
        "1000",
        "2000",
        "3000",
        "4000",
        "133",
        "123",
        "124"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddPlanDetails.user_should_fill_all_the_details_as_per_the_requirements(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click on the submit buttons",
  "keyword": "And "
});
formatter.match({
  "location": "AddPlanDetails.user_should_click_on_the_submit_buttons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should show the congratulations page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddPlanDetails.it_should_show_the_congratulations_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/PlanDetailsMap.feature");
formatter.feature({
  "name": "Entering the Plan Details in the telecom website",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Giving the Plan Details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User should open the browser1",
  "keyword": "Given "
});
formatter.match({
  "location": "AddPlanDetails1.user_should_open_the_browser(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should go to the telecom website1",
  "keyword": "And "
});
formatter.match({
  "location": "AddPlanDetails1.user_should_go_to_the_telecom_website(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should fill all the details as per the requirements1",
  "rows": [
    {
      "cells": [
        "Monthly Rental",
        "300"
      ]
    },
    {
      "cells": [
        "Free Local Minutes",
        "500"
      ]
    },
    {
      "cells": [
        "Free International Minutes",
        "600"
      ]
    },
    {
      "cells": [
        "Free SMS Pack",
        "500"
      ]
    },
    {
      "cells": [
        "Local Per Minutes Charges",
        "230"
      ]
    },
    {
      "cells": [
        "International Per Minutes Charges",
        "130"
      ]
    },
    {
      "cells": [
        "SMS Per Charges",
        "150"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddPlanDetails1.user_should_fill_all_the_details_as_per_the_requirements(Integer,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click on the submit buttons1",
  "keyword": "And "
});
formatter.match({
  "location": "AddPlanDetails1.user_should_click_on_the_submit_buttons(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It should show the congratulations page1",
  "keyword": "Then "
});
formatter.match({
  "location": "AddPlanDetails1.it_should_show_the_congratulations_page(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/TwoDMap.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User should open the webbrowser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_should_open_the_webbrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should cick on the add tariff",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_should_cick_on_the_add_tariff()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will fill all the details depend up on requirement",
  "rows": [
    {
      "cells": [
        "Monthly Rental",
        "Free Local Minutes",
        "Free International Minutes",
        "Free SMS Pack",
        "Local Per Minutes Charges",
        "International Per Minutes Charges",
        "SMS Per Charges"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "101",
        "201",
        "301",
        "401",
        "501",
        "601",
        "701"
      ]
    },
    {
      "cells": [
        "102",
        "202",
        "302",
        "402",
        "5002",
        "602",
        "702"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_will_fill_all_the_details_depend_up_on_requirement(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click on the submit buton",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_has_to_click_on_the_submit_buton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will get the congrats message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlanSteps.user_will_get_the_congrats_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/TwoDimList.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Entering the plan details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User need to open the Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTarrifDetails.user_need_to_open_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should go to the telecom home page",
  "keyword": "And "
});
formatter.match({
  "location": "AddTarrifDetails.user_should_go_to_the_telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User need to enter all the tariff details",
  "rows": [
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "101",
        "201",
        "301",
        "401",
        "501",
        "601",
        "701"
      ]
    },
    {
      "cells": [
        "102",
        "202",
        "302",
        "402",
        "502",
        "602",
        "702"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTarrifDetails.user_need_to_enter_all_the_tariff_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTarrifDetails.user_should_click_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get the congratulations page",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTarrifDetails.user_should_get_the_congratulations_page()"
});
formatter.result({
  "status": "passed"
});
});