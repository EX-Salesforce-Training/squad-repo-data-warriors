import { LightningElement } from 'lwc';

export default class CheckBack extends LightningElement {
    handleContinueClick() {
        const continueEvent = new CustomEvent('continue', {
            detail: {
                checkout: false,
                checkBack: false,
                continue: true
            }
        });
        this.dispatchEvent(continueEvent);
    }

}
