//readonly is if we don't want to modify the value like
//for example an id that we get from a backend that you can read but 
//not modify

class Message {
  readonly id: string;
  title: string;
  message: string;
  isSent: boolean;

  constructor(id: string) {
    this.id = id;
  }
}

const message = new Message("abc123");
console.log(message.id);
