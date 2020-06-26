import * as People from './cms';

describe('Cms', () => {
  it('should create an instance of Person', () => {
    expect(new People.PersonFullExport.default()).toBeTruthy();
  });

  it('should create an instance of Address', () => {
    expect(new People.AddressFullExport.Address()).toBeTruthy();
  });
});
