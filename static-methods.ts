export class Message {
  title: string;
  message: string;
  isSent: boolean;
}

// static methods cannot reference the this keyword unless that prop is static
// static we can only access a property or method of a class,
//not having it instantiated
//static methods do not need instatiation
export class Messages extends Array<Message> {
  public getValidMessages(): Message[] {
    return this.filter((value) => value.message.trim().length > 0);
  }

  static getValidMessage(messages: Message[]): Message[] {
    return messages.filter((value) => value.message.trim().length > 0);
  }
}

Messages.getValidMessage([]);
