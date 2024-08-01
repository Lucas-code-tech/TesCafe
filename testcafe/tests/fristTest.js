fixture("Frist Fixture")
    .page("");

test("Frist test", async t => {
     
    await t 
    .typeText("Developer-name ","TAU")
    .click("#macos")
    .click("#submit-button");

});