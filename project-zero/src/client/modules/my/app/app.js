import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    checkout = false;
    checkBack = false;
    continue = true;
    
    handleCheckoutEvent(event){
        this.checkout = event.detail.checkout;
        this.continue = event.detail.continue;
        this.checkBack = event.detail.checkBack;
    }

    handleContinueEvent(event){
        this.checkout = event.detail.checkout;
        this.continue = event.detail.continue;
        this.checkBack = event.detail.checkBack;
    }

    handleCheckBackEvent(event){
        this.checkout = event.detail.checkout;
        this.continue = event.detail.continue;
        this.checkBack = event.detail.checkBack;
    }

    get isCheckBack() {
        return this.checkBack === true;
    }

    get isCheckout() {
        return this.checkout === true;
    }
    get isContinue() {
        return this.continue === true;
    }
}
