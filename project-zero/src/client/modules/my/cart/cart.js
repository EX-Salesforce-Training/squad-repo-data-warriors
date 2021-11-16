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
}
