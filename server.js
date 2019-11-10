const Discord = require('discord.js')
const client = new Discord.Client()

var replies= [
  "Me fail English? That's unpossible.",
  "I wanna be a triangle.",
  "My cat's breath smells like cat food.",
  "That's where I saw the leprechaun. He told me to burn things.",
  "My grandma had hair like that when she went to sleep in her forever box.",
  "I'm learnding!",
  "My imaginary friend thinks you're stupid",
  "When I grow up, I want to be a principal, or a caterpillar!",
  "I bent my Wookie",
  "When I grow up I'm going to Bovine University",
  "This is my sandbox, I'm not allowed to go in the deep end.",
  "And, when the doctor said I didn't have worms any more, that was the happiest day of my life.",
  "That made sour juice come out of my front tail",
  "I glued my head to my shoulder",
  "I like men now",
  "I'm a Unitard",
  "I'm a fatality",
  "I heard your dad went into a restaurant and ate everything in the restaurant and they had to close the restaurant.",
  "Daddy's gun tastes like pennies!",
  "I drink blue juice from under the sink!",
  "I finished before we came in",
  "All of my friends have birthdays this year!",
  "Candles taste like burning.",
  "Now there's two types of wet in my pants",
  "Somebody should iron you!",
  "I'm a furniture",
  "I had a dream where Elmo and Toy Story had a party and I went there.",
  "If mommy's purse didn't belong in the microwave, why did it fit?",
  "Why do people run away from me",
  "I eat the crumbs on my head",
  "Somebody took my juice money",
  "I eated the purple berries. They taste like burning!",
  "I'm a brick!",
  "Do the people my daddy shoots go to heaven?",
  "I only fell out two times",
  "I want to go back in mommy",
  "My mommy says I'm special",
  "Can you open my milk Mommy?"
];

client.on('message', msg => {
  if ((msg.isMemberMentioned(client.user) && msg.author != client.user) || (Math.random() < .1)) {
    var ranResponse = Math.floor(Math.random() * replies.length);
    msg.reply(replies[ranResponse]);
  }
})

client.login(process.env.BOT_TOKEN)