"use strict"
function likes(names) {
    // TODO
    switch(true){
        case (names.length ===0):{
            return 'no one likes this'
        }
        case (names.length === 1 ):{
            return `${names[0]} likes this`
        }
        case (names.length ===2):{
            return `${names[0]} and ${names[1]} like this`
        }
        case (names.length ===3):{
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        }
        default:{
            return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
        }
    }
}

