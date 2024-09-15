import {
    PaymentService,
    PaypalPayment,
    SamsungPayPayment,
    ApplePayPayment,
} from './strategy';

describe('Strategy Pattern - Payment Service', () => {
    test('It should pay using Samsung Pay', () => {
        const samsungPay = new SamsungPayPayment();
        const paymentService = new PaymentService(samsungPay);
        const result = paymentService.checkout(9.9);
        expect(result).toStrictEqual('Pay $9.9 with Samsung Pay');
    });
    test('It should pay using Apple Pay', () => {
        const applePay = new ApplePayPayment();
        const paymentService = new PaymentService(applePay);
        const result = paymentService.checkout(7.5);
        expect(result).toStrictEqual('Pay $7.5 with Apple Pay');
    });
    test('It should change strategy in runtime', () => {
        const applePay = new ApplePayPayment();
        const paypal = new PaypalPayment();
        const paymentService = new PaymentService(applePay);
        // Change Apple Pay > Paypal
        paymentService.setPaymentStrategy(paypal);
        const result = paymentService.checkout(100);
        expect(result).toStrictEqual('Pay $100 with Paypal');
    });
});
