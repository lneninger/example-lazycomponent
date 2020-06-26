// Import default module of file.
// As typescript rely in default and not the module name, We can assing whatever name to the default module in the import statement
import Person from './person'; // <- No intellisense so, We need to guess what is in the other side
// Aliasing the Person name
import People from './person'; // Importing the default module can be aliased as We are relying in default

// If the module doesn't have a default module, intellisense shows a compilation error
// import Address from './address'; // Importing the default module can be aliased as We are relying in default

import { IMessage } from './person';
import { IMessage as MessageInterface } from './person';

fdescribe('Person', () => {
  it('should create an instance', () => {
    expect(new Person()).toBeTruthy();
  });

  it('should create an instance of IMessage', () => {
    expect({ message: 'Tes message' } as IMessage).toBeTruthy();
  });

  it('should create an instance of MessageInterface', () => {
    expect({ message: 'Tes message' } as MessageInterface).toBeTruthy();
  });

  it('should create an instance of Person whit People and Person imports', () => {
    const person = new Person();
    const people = new People();
    expect(person.messages[0].message).toBe(people.messages[0].message);
  });

  it('should create an instance', () => {
    expect(new People()).toBeTruthy();
  });
});
