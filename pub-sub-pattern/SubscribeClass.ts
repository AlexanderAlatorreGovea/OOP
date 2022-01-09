class Subscribable<MessageType> {
  private subscribers: Set<(message: MessageType) => void> = new Set();

  constructor() {}

  subscribe(callBack: (message: MessageType) => void): () => void {
    this.subscribers.add(callBack);
    return () => {
      this.subscribers.delete(callBack);
    };
  }

  publish(message: MessageType): void {
    this.subscribers.forEach((callback) => callback(message));
  }
}

// this subscribes and publishes
const sub = new Subscribable<string>();
sub.subscribe(console.log);
sub.publish("hello");

// this unsubscribes the function
const unsub = sub.subscribe(console.log);
unsub();
