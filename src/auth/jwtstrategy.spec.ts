import { JwtStrategy } from './jwtstrategy';

describe('Jwtstrategy', () => {
  it('should be defined', () => {
    expect(new JwtStrategy()).toBeDefined();
  });
});
