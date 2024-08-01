import {Selector} from 'testcafe';
    const developerName = Selector("#developer-name");
    const osOption = Selector("#macos");
    const submitButton = Selector("#submit-button");

fixture("Frist Fixture")
    .page("");

test("Frist test", async t => {
     
    await t 
    .typeText(developerName,"TAU")
    .click(osOption)
    .click(submitButton);

});