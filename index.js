// code your solution here

function superbowlWin(arr){
    function findWinner(arr){
      return arr.result === "W"
    }
    if(!arr.find(findWinner)){
      return undefined
    }
      return arr.find(findWinner).year
  }
