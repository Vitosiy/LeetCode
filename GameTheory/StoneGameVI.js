//https://leetcode.com/problems/stone-game-vi/

/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
const stoneGameVI = function(aliceValues, bobValues) {
    let aliceScore = 0, bobScore = 0;

    let stoneSum = []
    for (let i = 0; i < aliceValues.length; i++){
        stoneSum.push({
            index: i,
            sum: aliceValues[i] + bobValues[i],
        })
    }
    stoneSum.sort((a, b) => a.sum - b.sum)

    const gameRound = (player) => {

        let value = stoneSum.pop()

        if(value)
            switch(player) {
                case "Alice":
                    aliceScore += aliceValues[value.index]
                    break;
                case "Bob":
                    bobScore += bobValues[value.index]
                    break;
                default:
                    return;
            }
    }

    while(stoneSum.length > 0) {
        gameRound("Alice")
        gameRound("Bob")
    }

    return aliceScore === bobScore ? 0 : aliceScore > bobScore ? 1 : -1
};

console.log(stoneGameVI([1,3], [2,1]))  //1
console.log(stoneGameVI([1,2], [3,1]))  //0
console.log(stoneGameVI([2,4,3], [1,6,7]))  //-1
