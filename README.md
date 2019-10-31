# IdeaFunding
🗳️ Voting page and results reporting for the People's Choice Award at Startup Tucson's IdeaFunding pitch competition.

## Platforms used

- Firebase Authentication
- Firebase Hosting/Google Cloud Storage
- Firebase/Google Cloud Firestore
- Firebase/Google Cloud Functions
- Firebase Remote Config


## Documentation
- For Client documentation see `/client/README.md`
- For Functions documentation see `functions/README.md`

This project is a simple serverless application that leverages Firebase solutions for database, hosting, and cloud functions to support a "Text to Vote" polling system when combined with SMS support from a telephony provider such as Twilio or Nexmo.

This project includes an example `firebase.json` and `.firebaserc` in the repository root. You will likely want to install the firebase cli toolkit. 

```bash 
npm install -g firebase-tools
```

This will give you a globally accessible `firebase` command

