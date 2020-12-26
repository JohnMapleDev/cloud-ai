async function test_resp() {
  const random = Math.floor(Math.random() * test.length);
  return(random, test[random]);
}

const intent = () => ({
    keywords: ['test','testing','test test','do a system test','system status',],
    module: 'hello',
});



const test = [ "Everything is awesome", "Status: OK!", "Everything is running smoothly", "Systems are green!", "All system clear!"];


const examples = () => [];

module.exports = {
    get: test_resp,
    intent,
    examples,
};
