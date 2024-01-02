const Average = require('./function');

describe('Testing Pokemon Battle functions', () => {
  test('Test for Average Function', () => {
    expect(typeof Average).toEqual('function');
  })

  test('Test to take all array number and return average for pokebattle', () => {
    //ARRANGE
    const stats = new Average ([45, 49, 49, 65, 65, 45])
    //ACT
    stats.totalAverage()
    //ASSERT
    expect(stats.totalAverage()).toEqual(53)
  })

})