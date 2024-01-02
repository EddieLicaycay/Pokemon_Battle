
class Average {
  constructor(averages) {
    this.averages = averages
  }

  totalAverage() {
    // take only the average's numbers -- you can use reduce and go from there
    let Total = this.averages.reduce((accumulator, total) => accumulator + total , 0) / this.averages.length
    return Math.floor(Total)
  }

}

module.exports = Average;

