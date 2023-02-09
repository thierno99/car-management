import { GetCarNamePipe } from './get-car-name.pipe';

describe('GetCarNamePipe', () => {
  it('create an instance', () => {
    const pipe = new GetCarNamePipe();
    expect(pipe).toBeTruthy();
  });
});
