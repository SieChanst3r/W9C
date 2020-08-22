var userTweets = ["a concept: Wear a mask that covers your mouth AND your nose", "its not a coincidence that the word diet has the word die in it", "eat, sleep, workout, repeat", "BLM", "Speak up for those who cannot", "healthy mind, body and soul is the focus to be a better you", "Tell people when you think about them, show up in the ways that you can before its too late", "The hardest part is actually going and showing up so just get through that", "You are looking at a future full stack web developer!", "Set healthy boundaries for others and for yourself."];
console.log(userTweets);



function minimum(user) {
    if (user.userAge >= 18) {
        return true;

    } else if (user.userAge < 18) {
        return false;
    } else {
        console.log("Something went wrong");
    }
}




var users = [{
        username: "Alex",
        userAge: 19,
        tweet: {
            content: "a concept: Wear a mask that covers your mouth AND your nose",
            created_at: "08-18-2020"
        }
    },

    {
        username: "Brad",
        userAge: 27,
        tweet: {
            content: "its not a coincidence that the word diet has the word die in it",
            created_at: "08-20-2020"
        }
    },
    {
        username: "Theodore",
        userAge: 18,
        tweet: {
            content: "eat, sleep, workout, repeat",
            created_at: "08-22-2020"
        }
    },
    {
        username: "Andi",
        userAge: 17,
        tweet: {
            content: "BLM",
            created_at: "08-17-2020"
        }
    },
    {
        username: "Roy",
        userAge: 19,
        tweet: {
            content: "Speak up for those who cannot",
            created_at: "08-19-2020"
        }
    },
    {
        username: "Roni",
        userAge: 21,
        tweet: {
            content: "healthy mind, body and soul is the focus to be a better you",
            created_at: "08-21-2020"
        }
    },
    {
        username: "AJay",
        userAge: 17,
        tweet: {
            content: "Tell people when you think about them, show up in the ways that you can before its too late",
            created_at: "08-22-2020"
        }
    },
    {
        username: "Rainer",
        userAge: 22,
        tweet: {
            content: "The hardest part is actually going and showing up so just get through that",
            created_at: "08-07-2020"
        }
    },
    {
        username: "Jen",
        userAge: 23,
        tweet: {
            content: "You are looking at a future full stack web developer!",
            created_at: "08-22-2020"
        }
    },
    {
        username: "Devryn",
        userAge: 18,
        tweet: {
            content: "Set healthy boundaries for others and for yourself.",
            created_at: "08-21-2020"
        }
    },

]
var user = users[3]
var isOfAge = minimum(user)
console.log(isOfAge)

var Adult = users.filter(minimum);
console.log(Adult)