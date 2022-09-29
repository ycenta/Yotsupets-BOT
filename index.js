const tmi = require('tmi.js');

// Define configuration options
// https://twitchapps.com/tmi
const opts = {
  identity: {
    username: 'goodboi_bot',
    password: '<oauth>'
  },
  channels: [
    'leyohen'
  ]
};

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.connect();

function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  console.log(msg);
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!!drop') {
    client.say(target, `hi !!!`);
  }

  if(commandName === '!yohen'){
    // join "yohen" channel
    client.join("leyohen");
    client.say(target, `leyohen joined`);
  }

  // command "what channel am I in?"
    if(commandName === '!whereami'){
    client.say(target, `you are in ${target}`);
  }

}

function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}