import { title } from 'process';
import { User } from './user';

describe('User', () => {
  it('should be defined', () => {
    expect(new User({title:'dfsdf'})).toBeDefined();
  });
});
