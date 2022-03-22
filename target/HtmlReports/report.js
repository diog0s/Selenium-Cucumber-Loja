$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login verifications",
  "description": "",
  "id": "login-verifications",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "login successful",
  "description": "",
  "id": "login-verifications;login-successful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User insert your email and your password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User click in signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User is will logged",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_home_page()"
});
formatter.result({
  "duration": 79232000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_on_login_link()"
});
formatter.result({
  "duration": 96100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_insert_your_email_and_your_password()"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_in_signIn_button()"
});
formatter.result({
  "duration": 90000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_will_logged()"
});
formatter.result({
  "duration": 91800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "login successful",
  "description": "",
  "id": "login-verifications;login-successful",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User insert your \u003cemail\u003e and your \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click in signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User is will logged",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-verifications;login-successful;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 18,
      "id": "login-verifications;login-successful;;1"
    },
    {
      "cells": [
        "email1",
        "pwd1"
      ],
      "line": 19,
      "id": "login-verifications;login-successful;;2"
    },
    {
      "cells": [
        "email2",
        "pwd2"
      ],
      "line": 20,
      "id": "login-verifications;login-successful;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "login successful",
  "description": "",
  "id": "login-verifications;login-successful;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User insert your email1 and your pwd1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click in signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User is will logged",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_home_page()"
});
formatter.result({
  "duration": 95600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_on_login_link()"
});
formatter.result({
  "duration": 71000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    },
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "Login.user_insert_your_email_and_your_pwd(int,int)"
});
formatter.result({
  "duration": 1676100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_in_signIn_button()"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_will_logged()"
});
formatter.result({
  "duration": 64000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "login successful",
  "description": "",
  "id": "login-verifications;login-successful;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User insert your email2 and your pwd2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click in signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User is will logged",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_home_page()"
});
formatter.result({
  "duration": 84700,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_on_login_link()"
});
formatter.result({
  "duration": 63600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "Login.user_insert_your_email_and_your_pwd(int,int)"
});
formatter.result({
  "duration": 148500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_in_signIn_button()"
});
formatter.result({
  "duration": 64800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_will_logged()"
});
formatter.result({
  "duration": 71400,
  "status": "passed"
});
formatter.uri("LoginTwo.feature");
formatter.feature({
  "line": 1,
  "name": "Test Login Functionality",
  "description": "",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Check if login is successfully with valid credentials",
  "description": "",
  "id": "test-login-functionality;check-if-login-is-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user is in login page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters with diogotestselenium@gmail.com and selenium12345",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is logged",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTwo.browser_is_open()"
});
formatter.result({
  "duration": 2039829500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTwo.user_is_in_login_page()"
});
formatter.result({
  "duration": 3683152500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diogotestselenium@gmail.com",
      "offset": 17
    },
    {
      "val": "selenium12345",
      "offset": 49
    }
  ],
  "location": "LoginTwo.userEntersWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 399772800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTwo.user_click_on_login_button()"
});
formatter.result({
  "duration": 5708199500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTwo.user_is_logged()"
});
formatter.result({
  "duration": 688474200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Check if login is successfully with valid credentials",
  "description": "",
  "id": "test-login-functionality;check-if-login-is-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user is in login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user is logged",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "test-login-functionality;check-if-login-is-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18,
      "id": "test-login-functionality;check-if-login-is-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "diogotestselenium@gmail.com",
        "selenium12345"
      ],
      "line": 19,
      "id": "test-login-functionality;check-if-login-is-successfully-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Check if login is successfully with valid credentials",
  "description": "",
  "id": "test-login-functionality;check-if-login-is-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user is in login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters with diogotestselenium@gmail.com and selenium12345",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user is logged",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTwo.browser_is_open()"
});
formatter.result({
  "duration": 1352378400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTwo.user_is_in_login_page()"
});
formatter.result({
  "duration": 3124462200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diogotestselenium@gmail.com",
      "offset": 17
    },
    {
      "val": "selenium12345",
      "offset": 49
    }
  ],
  "location": "LoginTwo.userEntersWithUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 407283300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTwo.user_click_on_login_button()"
});
formatter.result({
  "duration": 3148927800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTwo.user_is_logged()"
});
formatter.result({
  "duration": 656879900,
  "status": "passed"
});
});