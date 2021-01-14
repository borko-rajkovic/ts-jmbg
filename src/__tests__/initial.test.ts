import { SayHello } from '../index';

test('Sey hello', () => {
  expect(SayHello('Borko')).toBe('Hello Borko');
});
