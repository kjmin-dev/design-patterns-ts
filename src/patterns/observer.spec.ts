import { MessagePublisher, MessageSubscriber } from './observer';

describe('Observer Pattern - pubsub', () => {
    const message = 'Practice makes perfect that is why we repeat';
    test('It should notify all subscribers when a message is published', () => {
        const publisher = new MessagePublisher();
        const subscriberA = new MessageSubscriber('Subscriber A');
        const subscriberB = new MessageSubscriber('Subscriber B');

        const spyA = vi.spyOn(subscriberA, 'update');
        const spyB = vi.spyOn(subscriberB, 'update');

        publisher.subscribe(subscriberA);
        publisher.subscribe(subscriberB);
        publisher.notify(message);

        expect(spyA).toHaveBeenCalledWith(message);
        expect(spyB).toHaveBeenCalledWith(message);
    });

    test('It should notify only subscribed subscribers', () => {
        const publisher = new MessagePublisher();
        const subscriberA = new MessageSubscriber('Subscriber AA');

        const spyA = vi.spyOn(subscriberA, 'update');

        publisher.notify(message);

        expect(spyA).not.toHaveBeenCalledWith(message);
    });

    test('It should not notify unsubscribed subscribers', () => {
        const publisher = new MessagePublisher();
        const subscriberA = new MessageSubscriber('Subscriber AAA');
        const subscriberB = new MessageSubscriber('Subscriber BBB');

        const spyA = vi.spyOn(subscriberA, 'update');
        const spyB = vi.spyOn(subscriberB, 'update');

        publisher.subscribe(subscriberA);
        publisher.subscribe(subscriberB);
        publisher.unsubscribe(subscriberB);
        publisher.notify(message);

        expect(spyA).toHaveBeenCalledWith(message);
        expect(spyB).not.toHaveBeenCalledWith(message);
    });
});
