import { CreateBookcommentDto } from './bookcomment.dto';

describe('Bookcomment', () => {
  it('should be defined', () => {
    expect(new CreateBookcommentDto()).toBeDefined();
  });
});
