const values = {
    // signs: [{
    //     name: 'Aquarius',
    //     date: 'January 20 - February 18'
    // }, {
    //     name: 'Pisces',
    //     date: 'February 19 - March 20'
    // }, {
    //     name: 'Aries',
    //     date: 'March 21 - April 19'
    // }, {
    //     name: 'Taurus',
    //     date: 'April 20 - May 20'
    // }, {
    //     name: 'Gemini',
    //     date: 'May 21 - June 20'
    // }, {
    //     name: 'Cancer',
    //     date: 'June 21 - July 22'
    // }, {
    //     name: 'leo',
    //     date: 'July 23 - August 22'
    // }, {
    //     name: 'Virgo',
    //     date: 'August 23 - September 22'
    // }, {
    //     name: 'Libra',
    //     date: 'September 23 - October 22'
    // }, {
    //     name: 'Scorpio',
    //     date: 'October 23 - November 21'
    // }, {
    //     name: 'Sagittarius',
    //     date: 'November 22 - December 21'
    // }, {
    //     name: 'Capricorn',
    //     date: 'December 22 - January 19'
    // }],
    strengths: [
        'creative', 'passionate', 'Generous', 'Warm-hearted', 'Cheerful', 'Humorous', 'Progressive', 'Original', 'Independent', 'Humanitarian', 'Gentle', 'affectionate', 'curious, adaptable', 'ability to learn quickly and exchange ideas', 'Tenacious', 'highly imaginative', 'loyal', 'emotional, sympathetic, persuasive', 'analytical', 'kind', 'hardworking', 'practical', 'Resourceful', 'brave', 'Responsible', 'disciplined'
    ],
    weaknesses: [
        'Arrogant', 'Stubborn', 'Self-centered', 'Lazy', 'Inflexible', 'Temperamental', 'Uncompromising', 'Aloof', 'Possessive', 'Nervous', 'inconsistent', 'indecisive', 'Moody', 'pessimistic', 'suspicious', 'manipulative', 'insecure', 'Shyness', 'worry', 'overly critical of yourself and others', 'all work and no play', 'Distrusting', 'jealous', 'secretive', 'violent'
    ],
    // likes: [
    //     'theater', 'holidays', 'buy expensive things', 'use bright colors', 'have fun with friends', 'do gardening', 'Cook', 'listen to music', 'find romance', 'use high quality clothes', 'do handwork', 'play with your animals', 'eat healthy food', 'read books', 'enjoy nature', 'cleanliness', 'tell the truth', 'facts', 'being right', 'longtime friends', 'teasing', 'a grand passion', 'Family', 'tradition', 'understated status', 'Harmony', 'gentleness', 'sharing with others', 'the outdoors'
    // ],
    dislikes: [
        'Being ignored', 'not being treated like a king or queen', 'Rudeness','excentrics', 'dishonesty', 'revealing secrets', 'passive people', 'Clingy people', 'being constrained', 'off-the-wall theories', 'details', 'Sudden changes', 'complications', 'insecurity of any kind', 'repetition and routine', 'Strangers', ' criticism', 'revealing of personal life'
    ],
}
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
console.log(printMessage(messageBody(values)))