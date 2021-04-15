// Your code here
function saturdayFun(activity) {
    if (activity === undefined) {
        return `This Saturday, I want to roller-skate!`
    } else {
        return `This Saturday, I want to ${activity}!`
    }
    
}

function mondayWork(activity) {
    if (activity === undefined) {
        return "This Monday, I will go to the office."
    } else {
        return `This Monday, I will ${activity}.`
    }
}

function wrapAdjective(string) {
    return function(parameter) {
        if (parameter === undefined && string === undefined) {
            `You are *special*!`
        } else if (parameter === undefined && string === string) {
            `You are ${string}special${string}!`
        } else if (parameter === parameter && string === undefined) {
            `You are *${parameter}*!`
        } else {
            `You are ${string}${parameter}${string}!`
        }
    }
}
const encouragingPromptFunction = wrapAdjective(string)