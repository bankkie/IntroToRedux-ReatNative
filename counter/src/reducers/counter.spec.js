import reducer from './counter'

describe('counter reducer', () => {
    it('should handle iitial state', () =>{
        expect(reducer(undefined, {})).toEqual({val: 0})
    })
    it('should increment', () => {
        expect(reducer(
            {val: 1},
            inc()
        )).toEqual({val: 2})
    })
    it('should reset', () => {
        expect(reducer(
            {val: 7},
            inc()
        )).toEqual({val: 0})
    })
})