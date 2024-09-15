export interface IPaymentStrategy {
    pay(charge: number): string;
}

export class PaypalPayment implements IPaymentStrategy {
    pay(charge: number) {
        return `Pay $${charge} with Paypal`;
    }
}

export class SamsungPayPayment implements IPaymentStrategy {
    pay(charge: number) {
        return `Pay $${charge} with Samsung Pay`;
    }
}

export class ApplePayPayment implements IPaymentStrategy {
    pay(charge: number) {
        return `Pay $${charge} with Apple Pay`;
    }
}

export class PaymentService {
    private paymentStrategy: IPaymentStrategy;
    constructor(ps: IPaymentStrategy) {
        this.paymentStrategy = ps;
    }
    setPaymentStrategy(ps: IPaymentStrategy) {
        this.paymentStrategy = ps;
    }
    checkout(charge: number): string {
        const result = this.paymentStrategy.pay(charge);
        return result;
    }
}
