const characteristics = {
    strengths: [
        'creative', 'passionate', 'Generous', 'Warm-hearted', 'Cheerful', 'Humorous', 'Progressive', 'Original', 'Independent', 'Humanitarian', 'Gentle', 'affectionate', 'curious, adaptable', 'ability to learn quickly and exchange ideas', 'Tenacious', 'highly imaginative', 'loyal', 'emotional, sympathetic, persuasive', 'analytical', 'kind', 'hardworking', 'practical', 'Resourceful', 'brave', 'Responsible', 'disciplined'
    ],
    weaknesses: [
        'Arrogant', 'Stubborn', 'Self-centered', 'Lazy', 'Inflexible', 'Temperamental', 'Uncompromising', 'Aloof', 'Possessive', 'Nervous', 'inconsistent', 'indecisive', 'Moody', 'pessimistic', 'suspicious', 'manipulative', 'insecure', 'Shyness', 'worry', 'overly critical of yourself and others', 'all work and no play', 'Distrusting', 'jealous', 'secretive', 'violent'
    ],
    dislikes: [
        'Being ignored', 'not being treated like a king or queen', 'Rudeness','excentrics', 'dishonesty', 'revealing secrets', 'passive people', 'Clingy people', 'being constrained', 'off-the-wall theories', 'details', 'Sudden changes', 'complications', 'insecurity of any kind', 'repetition and routine', 'Strangers', ' criticism', 'revealing of personal life'
    ],
}
// Generate a random number
const random = (val)=> Math.floor(Math.random() * val);
const randomNums = (lim) => {
    const first = random(lim);
    let second = random(lim);
    while (second ===first) {
        second = random(lim);
    }
    return {
        first: first,
        second: second
    }
}

const messageBody = (obj) => {
    const messageObj = {};
    for(let key in obj){
        const {first, second} = randomNums(obj[key].length)
        messageObj[key]=[obj[key][first].toLowerCase(),obj[key][second].toLowerCase()]
    }
    return messageObj;
}
const printMessage = (messObj) => { 
    return `Your best qualities are ${messObj.strengths[0]} and ${messObj.strengths[1]} but you need to stop being ${messObj.weaknesses[0]} and ${messObj.weaknesses[1]}. Remember people dislikes ${messObj.dislikes[0]} and ${messObj.dislikes[1]}, don\'t do it`
}
console.log(printMessage(messageBody(characteristics)))