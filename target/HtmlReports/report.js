$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google search functionality",
  "description": "",
  "id": "google-search-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Making a search",
  "description": "",
  "id": "google-search-functionality;making-a-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "browser is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user type a txt in search box",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "tap in enter",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user get your search results",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.browser_is_opened()"
});
formatter.result({
  "duration": 108021300,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.user_is_on_home_page()"
});
formatter.result({
  "duration": 16900,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.user_type_a_txt_in_search_box()"
});
formatter.result({
  "duration": 14700,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.tap_in_enter()"
});
formatter.result({
  "duration": 14500,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.user_get_your_search_results()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.uri("Login.feature");
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
  "duration": 215000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_on_login_link()"
});
formatter.result({
  "duration": 163700,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_insert_your_email_and_your_password()"
});
formatter.result({
  "duration": 101100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_in_signIn_button()"
});
formatter.result({
  "duration": 109000,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_will_logged()"
});
formatter.result({
  "duration": 110600,
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
  "duration": 135700,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_on_login_link()"
});
formatter.result({
  "duration": 112300,
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
  "duration": 2796600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_in_signIn_button()"
});
formatter.result({
  "duration": 124500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_will_logged()"
});
formatter.result({
  "duration": 98900,
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
  "duration": 118500,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_on_login_link()"
});
formatter.result({
  "duration": 69900,
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
  "duration": 146300,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_click_in_signIn_button()"
});
formatter.result({
  "duration": 118100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_is_will_logged()"
});
formatter.result({
  "duration": 82500,
  "status": "passed"
});
});