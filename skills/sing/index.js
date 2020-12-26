async function sing_resp() {
  const random = Math.floor(Math.random() * songs.length);
  return(random, songs[random]);
  console.log("Sing_Module not completed. ERROR D1")
}

const intent = () => ({
    keywords: ['sing a song','sing for me', 'can you sing', 'sing', 'want to sing for me'],
    module: 'hello',
});



const songs = ["Let me just grab my guitar real quick "];


const examples = () => [];

module.exports = {
    get: sing_resp,
    intent,
    examples,
};
