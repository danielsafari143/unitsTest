const stringLenth = require('./index');
const reverse = require('./reverse');
const operation = require('./operation');
const capital = require('./capitalize');

it('count verified' ,() =>
    expect(stringLenth('safaririri')).toBe(10)
)


it('Reversed string' ,() =>
    expect(reverse('safari')).toMatch('irafas')
)

describe('addition pass ' , () => {
    test('first addition test' , () => expect(operation.plus(4 , 3)).toBe(7));

    test('first second test' , () =>expect(operation.plus(4 , 5)).toBe(9));

    test('first third test' , () => expect(operation.plus(4 , 4)).toBe(8));
})

describe('division pass ' , () => {
    test('first division' , () => expect(operation.div(16 , 4)).toBe(4));

    test('second division' , () => expect(operation.div(10 , 2)).toBe(5));

    test('third division' , () => expect(operation.div(4 , 4)).toBe(1));
})

describe('substruction pass ' , () => {
    test('first substruction' , () => expect(operation.sub(20 , 4)).toBe(16));

    test('second substruction' , () => expect(operation.sub(10 , 4)).toBe(6));

    test('third substruction' , () => expect(operation.sub(4 , 4)).toBe(0));
})

describe('multi pass ' , () => {
    test('first multi' , () => expect(operation.multi(9 , 9)).toBe(81));

    test('second multi' , () => expect(operation.multi(5 , 5)).toBe(25));

    test('third multi' , () => expect(operation.multi(4 , 4)).toBe(16));
})


it('Capitalized' ,() =>
    expect(capital('safari')).toMatch('Safari')
)