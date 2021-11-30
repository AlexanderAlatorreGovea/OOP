class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity * 100);
  }
}

//intermediary API to never change our store
class StripePaymentProcessor {
  constructor(user) {
    this.user = user;
    this.stripe = new Stripe(user);
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }

  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
    this.stripe.makePayment(amountInDollars * 100);
  }
}

//end of intermediary API to never change our store

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(`${this.user} make payment of $${amountInCents / 100} 
        with stripe`);
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} make payment of $${amountInDollars} with Paypal`);
  }
}

const store = new Store(new StripePaymentProcessor("john"));
store.purchaseBike(2);
store.purchaseHelmet(2);

const storeB = new Store(new PaypalPaymentProcessor("stever"));
storeB.purchaseBike(2);
storeB.purchaseHelmet(2);
