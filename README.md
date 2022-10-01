# Count My Discord Servers

[![Netlify Status](https://api.netlify.com/api/v1/badges/6549ae7f-26b5-4584-9614-d2e4aacab216/deploy-status)](https://app.netlify.com/sites/velvety-khapse-a5767b/deploys)

Curious to find out how many servers you are in, but can't bother to count them manually? This is the solution to all your problems.

## How it works

- Open the [Discord website](https://discord.com/app) and login if you aren't already.
- Open the Chrome Dev Tools with the keyboard shortcut `F12`
- Go to the **Network** tab
- Click the **XHR** button to filter to XHR requests only
- Do any action in Discord like **opening a channel**
- Click the **science** request that shows up in the list
- Go to the **Headers** tab
- Find **Authorization** under **Request Headers** and copy your token (make sure you copy the entire token and don't copy any spaces)
- Then just paste that token into the input field, and click "Count" and wait.

![instructions image](/public/authorization.png?raw=true "Instructions Image")
