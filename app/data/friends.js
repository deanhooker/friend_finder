// Character set up

// Question         |   1 2 3 4 5 6 7 8 9 10
// ----------------------------------
// The Dude         |   1 3 5 5 5 4 2 5 5 1
// Luke Skywalker   |   5 4 3 2 4 2 2 2 4 2
// Steve Zissou     |   3 2 4 2 2 4 2 2 2 2
// Jack Sparrow     |   4 3 3 1 4 5 2 1 3 5
// Tony Stark       |   5 1 5 1 2 5 1 3 1 2
// John McClane     |   2 4 5 4 4 3 4 5 3 1
// Dr. Emmett Brown |   5 1 4 1 4 5 5 1 1 1
// Rocky Balboa     |   2 2 4 5 2 3 2 2 4 4
// Fogell/McLovin   |   4 2 1 3 2 2 5 1 2 5
// Indiana Jones    |   5 5 3 2 4 2 4 3 2 3


let friendsDataArray = [
    {
        name: "The Dude",
        photo: "https://coedmagazine.files.wordpress.com/2016/09/dude.jpg?quality=88&w=750&h=422",
        answers: [1, 3, 5, 5, 5, 4, 2, 5, 5, 1]
    },
    {
        name: "Luke Skywalker",
        photo: "https://fsmedia.imgix.net/5b/03/be/9d/02f5/4bdb/b99f/59c8fe6e37bb/luke-skywalker-retrojpg.jpeg?fm=jpg&w=1200&h=1200&crop=entropy&fit=crop",
        answers: [5, 4, 3, 2, 4, 2, 2, 2, 4, 2]
    },
    {
        name: "Steve Zissou",
        photo: "http://cardiff.carpediem.cd/data/afisha/o/ff/e6/ffe67da45e.jpg",
        answers: [3, 2, 4, 2, 2, 4, 2, 2, 2, 2,]
    },
    {
        name: "Jack Sparrow",
        photo: "http://media.beliefnet.com/~/media/photos-with-attribution/entertainment/movies/jack-sparrow_credit-Walt-Disney-Studios.jpg",
        answers: [4, 3, 3, 1, 4, 5, 2, 1, 3, 5]
    },
    {
        name: "Tony Stark",
        photo: "https://vignette4.wikia.nocookie.net/ironman/images/9/9d/Tumblr_l1iotoYo541qbn8c7.jpg/revision/latest?cb=20131120195052",
        answers: [5, 1, 5, 1, 2, 5, 1, 3, 1, 2]
    },
    {
        name: "John McClane",
        photo: "https://d.ibtimes.co.uk/en/full/288544/die-hard-1988-die-harder-1990-die-hard-with-a-vengeance-1995.jpg?w=736",
        answers: [2, 4, 5, 4, 4, 3, 4, 5, 3, 1]
    },
    {
        name: "Dr. Emmett Brown",
        photo: "https://vignette.wikia.nocookie.net/back-to-the-future-1985-movie/images/8/8c/Dr._Emmett_Brown.png/revision/latest?cb=20151130195154",
        answers: [5, 1, 4, 1, 4, 5, 5, 1, 1, 1]
    },
    {
        name: "Rocky Balboa",
        photo: "https://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/_main_rocky_0.jpg",
        answers: [2, 2, 4, 5, 2, 3, 2, 2, 4, 4]
    },
    {
        name: "Fogell aka 'McLovin'",
        photo: "http://images2.fanpop.com/images/photos/6800000/CMP-in-Superbad-christopher-mintz-plasse-6876640-500-281.jpg",
        answers: [4, 2, 1, 3, 2, 2, 5, 1, 2, 5]
    },
    {
        name: "Indiana Jones",
        photo: "https://shortlist.imgix.net/app/uploads/2018/01/22104009/oh-goodie-theyre-working-on-indiana-jones-5-crop-1516617647-866x577.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress",
        answers: [5, 5, 3, 2, 4, 2, 4, 3, 2, 3]
    }
]

module.exports = friendsDataArray;