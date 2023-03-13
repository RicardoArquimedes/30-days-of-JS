function myMap(array, func) {
    let newArray = []
    for (let arr of array) newArray.push(func(arr))
    return newArray
  
  }