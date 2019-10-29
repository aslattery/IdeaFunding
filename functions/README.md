# IdeaFunding Functions

🗳️ All required business logic for the People's Choice Award at Startup Tucson's IdeaFunding pitch competition, deployed as Firebase or Cloud functions.

## Setup your development environment

Prior to cloning this repository, we recommend having Node v10+ installed, and a text editor/IDE that includes support for `eslint` and `prettier`.


### Install packages

```bash
yarn install
```

### If desired, install Firebase Emulators
```bash
firebase emulators:start
```
This will install and start local development emulators for each of the firebbase services used in this project (functions and firestore)

If you wish to only start one service run the command with the `--only` flag. 

Ex.
```bash
firestore emulators:start ---only functions
```

Note: Any firebase service not being run in a local emulator will default to attempt accessing a production version of the service and may therefor render associated resource expenses.


## Deploying to Firebase Functions

This project includes an example `firebase.json` and `.firebaserc` in the repository root. By using the Firebase CLI (`firebase-tools` on NPM), once you have authenticated and setup your Firebase project information, deploying you functions becomes a simple process.

```bash
firebase deploy --only functions
```

This will deploy only your functions to you Firebase production project. (Note: only functions exposed as module exports in `/functions/index.js` will be deployed)

## Config for Use with SMS Webhooks

By default this platform was built to function as an http endpoint to be triggered from receipt of SMS message via a given telephony provider. Originally built to function with Twilio payloads, the functionality has been extended to process Nexmo payloads as well. 

Since payload receipt is handled via webhook, support for different providers simply requires specific processing to handle the variation in payloads. For this reason, the directory `/functions/recordVote/suppportedProviders` serves as collection of helper functions namespaced by vendor for specific processing of SMS payloads. Simply by adding a namespaced helper file and adjusting the target of the SMS webhook to include a matching namespaced extension to the url, any provider's payload can be supported.

Ex. for "telephonyProvider"

>Add helper file: 
`/functions/recordVote/supportedProviders/telephonyProvider.js`

>Direct SMS payload webhooks to: 
`https://${gcp-hosting-region}-${project-name}.cloudfunctions.net/recordVote/telephonyProvider`

## Technologies and platforms used

-   [Google's Firebase](https://firebase.google.com/), specifically:
    -   Cloud Firestore, for document database and realtime listeners
    -   Firebase Functions, http event trigger.

