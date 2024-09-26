import { consoleWithTime } from '../test-utils/console';

export interface ISubscriber {
    update(message: string): void;
}

export interface IPublisher {
    subscribe(subscriber: ISubscriber): void;
    unsubscribe(subscriber: ISubscriber): void;
    notify(message: string): void;
}

export class MessagePublisher implements IPublisher {
    private subscribers: ISubscriber[] = [];

    subscribe(subscriber: ISubscriber): void {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber: ISubscriber): void {
        this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
    }

    notify(message: string): void {
        this.subscribers.forEach((subscriber) => subscriber.update(message));
    }
}

export class MessageSubscriber implements ISubscriber {
    public readonly name: string;
    constructor(name: string) {
        this.name = name;
    }

    update(message: string): void {
        consoleWithTime(`${this.name} received message: ${message}`);
    }
}
