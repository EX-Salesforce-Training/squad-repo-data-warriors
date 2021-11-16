import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    checkout = false;
    continue = true;
    
    handleCheckoutEvent(event){
        this.checkout = event.detail.checkout;
        this.continue = event.detail.continue;
    }

    handleContinueEvent(event){
        this.checkout = event.detail.checkout;
        this.continue = event.detail.continue;
    }

    get isCheckout() {
        return this.checkout === true;
    }
    get isContinue() {
        return this.continue === true;
    }
}
