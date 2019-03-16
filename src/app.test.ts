import { add, addAsync } from './app'

describe('Foo library', () => {

    it('adds numbers', () => {

        const result = add(123, 321)

        expect(result).toEqual(444)

    })

    it('adds numbers asynchronously', async () => {

        const result = await addAsync(123, 321)

        expect(result).toEqual(444)

    })

})
