import { LightningElement } from 'lwc';

export default class Cart extends LightningElement {
    handleContinueClick() {
        const continueEvent = new CustomEvent('continue', {
            detail: {
                checkout: false,
                continue: true
            }
        });
        this.dispatchEvent(continueEvent);
    }
    handleCheckBackEvent(event){
        this.checkout = event.detail.checkout;
        this.continue = event.detail.continue;
        this.checkBack = event.detail.checkBack;
    }
}
