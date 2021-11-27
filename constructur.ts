export class Message {
  title: string;
  message: string;
  deliveryDate: Date;
  private _isSent: boolean;

  set isSent(value: boolean) {
    if (value === true) {
      this.deliveryDate = new Date();
    }
    this._isSent = value;
  }

  get isSent(): boolean {
    return this._isSent;
  }

  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.isSent = false;
  }

  preview(): string {
    return this.message.slice(0, 10).concat("...");
  }

  get messageStatus(): string {
    const sentMessage = this.isSent ? "Has been Sent." : "Has not been sent.";
    return `${this.message} | ${sentMessage}`;
  }
}

const message = new Message("hello", "new course on typescript");
console.log(message.preview());
console.log(message.isSent = true)
console.log(message.messageStatus);