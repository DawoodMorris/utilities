const core = require('@actions/core');
const github = require('@actions/github');

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log('Hello ',nameToGreet,'!');
    const time = (new Date).toTimeString();
    core.setOutput('time: ',time);
    //get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload);
    console.log('The event payload: ',payload);
} catch (error) {
    core.setFailed('Error: ',error.message);
}