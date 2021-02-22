function bubbleSort(array) {
    let swapCounter = 0
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length; j++){
        let swapHappened = false
        if(array[j] > array[j + 1]){
          let tmp = array[j]
          swapHappened = true
          swapCounter++
          array[j] = array[j + 1]
          array[j + 1] = tmp
          console.log(swapCounter)
        }
      }
    }
      return array
}

//module.exports = bubbleSort;
