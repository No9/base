jest.dontMock('../feature')
import Feature from '../feature'

describe('feature', function() {
  it('has a feature that does something', function() {
    let feature = new Feature()
    expect(feature.doSomething()).toBe('I did something')
  })
})
