import { sayHello } from './dummy';

describe('Dummy', () => {
    test('Test sayHello', () => {
        const helloWorld = sayHello('World');
        expect(helloWorld).toStrictEqual('Hello, World!');
    });
});
