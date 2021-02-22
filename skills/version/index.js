const intent = () => ({
    keywords: ['Tell me the version', 'what is the version', 'What version', 'Which version'],
    module: 'updatepack1',
});

async function version_resp() {
    return { text: 'It is Version 0.1, pretty cool huh?'};
}

const examples = () => ['Tell me the version', 'what is the version', 'What version', 'Which version'];

module.exports = {
    get: version_resp,
    intent,
    examples,
};
