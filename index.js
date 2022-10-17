function myEach(collection, callback){
    const iterateMe = objectToArray(collection)
    let iterating = true
    let counter = 0

    while(iterating){
      if (iterateMe[counter] === undefined){
        iterating = false
      }
      else{
        callback(iterateMe[counter])
        counter++
      }
    }
    return collection
}

function myMap(collection, callback){
    const iterateMe = objectToArray(collection)
    const arrayCopy = [...iterateMe]
    const modifiedArray = []
    let iterating = true
    let counter = 0

    while(iterating){
        if (arrayCopy[counter] === undefined){
        iterating = false       
    }
        else{
            modifiedArray.push(callback(arrayCopy[counter]))
            counter++
        }
    }
    return modifiedArray
}

function myReduce(collection, callback, accumulator){ //returns correctly unless the tests call it
    const iterateMe = objectToArray(collection)
    const arrayCopy = [...iterateMe]
    let iterating = true
    let counter = 0

    if(accumulator === undefined){
        accumulator = arrayCopy[0]
        counter = 1
    }

    while(iterating){
        if (arrayCopy[counter] === undefined){
            iterating = false
        }
        else{
            accumulator = callback(accumulator, arrayCopy[counter])
            counter++
        }
    }

    
    return accumulator
}

function myFind(collection, predicate){ //A predicate is the callback function that returns true/false
const iterateMe = objectToArray(collection)
let iterating = true
let counter = 0

    while (iterating){
        if (predicate(iterateMe[counter])){
            return iterateMe[counter]
        }
        else if (iterateMe[counter] === undefined){
            iterating = false
        }
        else{
            counter++
        }
    }
}

function myFilter(collection, predicate){
    const iterateMe = objectToArray(collection)
    const filteredArray = []
    let iterating = true
    let counter = 0

    while (iterating){
        if (iterateMe[counter] != undefined){
         let testedElement = predicate(iterateMe[counter])

        if (testedElement){
             filteredArray.push(iterateMe[counter])
             counter++
        }
        else{
            counter++
        }
    }
        else{
            iterating = false
        }
    }
    return filteredArray
}

function mySize(collection){
    const iterateMe = objectToArray(collection)
    let iterating = true
    let counter = 0

    while(iterating){
        if (iterateMe[counter] != undefined){
            counter++
        }
        else{
            iterating = false
        }
    }
    return counter
}

function myFirst(array, n = 1){
    if (n === 1){
        return array[0]
    }
    else{
        const returnValues = []
        for (let i = 0; i < n; i++){
            returnValues.push(array[i])
        }
        return returnValues
    }
}

function myLast(array, n = 1){
    const length = mySize(array)
    if (n === 1){
        return array[length - 1]
    }
    else{
        const returnValues = []
        let counter = length - n

        for (let i = 0; i < n; i++){
            returnValues.push(array[counter])
            counter++
        }
        return returnValues
    }
}

function myKeys(obj){
    const returnArray = []

    for (let value in obj){
        returnArray.push(value)
    }
    return returnArray
}

function myValues(obj){
    const returnArray = []

    for(let value in obj){
        returnArray.push(obj[value])
    }

    return returnArray
}

function objectToArray(item){
    if (Array.isArray(item) != true){
        return Object.values(item)
    }
    return item
}

//test
const nyan = [1,2,[3,4],[5,[6,[7]]],3,4]