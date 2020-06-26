export default class Person {
  messages: IMessage[] = [];

  constructor() {
    this.messages.push({ message: 'TestMessage' } as IMessage);
  }
}

export interface IMessage {
  message: string;
}

export interface IPhone {
  number: string;
}
