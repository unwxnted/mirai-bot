# Mirai-Bot
Mirai-Bot is a discord bot made with Node.js, it uses discord.js library to interact with discord api and other dependencies to execute some commands like request and cheerio for webscrapping.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

# Prerequisites

- Node.js

- npm (included with Node.js)

# Installing
To install the dependencies, navigate to the root of the project and run:

```
npm install
```

# Running the bot
To start the bot, you will need to have a token of your bot, this token can be obtained from the discord developer portal, once you have the token you need to create a config.json with the following content:

```
{
  "prefix": "YOUR_BOT_PREFIX",
  "token": "YOUR_BOT_TOKEN"
}
```

Once you have your config.json ready you can start the bot by running:

```
npm start
```

# Built With

- Node.js - JavaScript runtime

- discord.js - A powerful JavaScript library for interacting with the Discord API

- request - Simplified HTTP client

- cheerio - Fast, flexible, and lean implementation of core jQuery designed specifically for the server

# Contribution

I'd love to have your help making this project better. 