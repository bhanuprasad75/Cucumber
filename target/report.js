$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/PlanDeatilsList.feature");
formatter.feature({
  "name": "Entering the Plan Details in the telecom website",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Giving the Plan Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@sanity"
    }
  ]
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
});