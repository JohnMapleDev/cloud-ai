async function hello_resp() {
  const random = Math.floor(Math.random() * returns.length);
  return(random, returns[random]);
}

const intent = () => ({
    keywords: ['hello','hi','greetings','yo','whatsup',],
    module: 'hello',
});



const returns = ["Hello!", "Hi!", "Goodday!", "Yo!", "Howdy", "UwU", "Hey!"];


const examples = () => [];

module.exports = {
    get: hello_resp,
    intent,
    examples,
};
