interface UserProps {
  name?: string;
  age?: number;
}
type Callback = () => void;
export class User {
  // the events shape is an object with key and array of Callbacks ex: events={'click',[cb,cb,cb,]}

  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  // This is analogous to addEventListener('click', cb)
  on(eventName: string, callback: Callback): void {
    // falling back to empty array if events is undefined which will happen initially
    const handlers = this.events[eventName] || [];

    handlers.push(callback);
    this.events[eventName] = handlers;
  }
  trigger(eventName: string): void {
    const handlers = this.events[eventName] || [];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }
}
