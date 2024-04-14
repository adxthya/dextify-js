# Dextify

## Description
A minimal discord bot with gpt integration and voice support

## Features
- **Command Handling**: The bot efficiently handles commands triggered by users.
- **Customizable**: Easily customize commands and responses to fit your server's needs.
- **Event Handling**: Responds to various Discord events such as message updates, member join/leave, etc.
- **Modular**: Modular code structure for easy maintenance and scalability.
- **Voice-Support**: The bot can join voice channels and play songs

## Requirements
- Node.js
- npm (Node Package Manager)
- Discord.js

## Installation
1. Clone this repository to your local machine.

```bash
git clone https://github.com/adithyakb10/dextify-js
```

2. Install dependencies by running `npm install` in the project directory.
3. Create a new Discord application and bot on the [Discord Developer Portal](https://discord.com/developers/applications).
4. Copy the bot token, guildid and clientid provided by Discord and provide `token`, `clientId`, `guildId` in the `.env` file.
6. Start the bot by running `node bot.js` in the terminal.

## Configuration
- The commands can be configured in the commands directory.
- The slash commands has to be registered before they can be used.
- Register them by running `node deploy-command.js`.

## Issues

- node-sodium can return an error during installation refer the npm docs to fix it [node-sodium](https://www.npmjs.com/package/sodium).

## Acknowledgements
- Discord.js developers and contributors for providing an excellent library for Discord bot development.
