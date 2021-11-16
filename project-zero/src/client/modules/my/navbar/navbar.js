import { LightningElement } from 'lwc';

export default class Navbar extends LightningElement {
    handleCheckoutClick() {
        const checkoutEvent = new CustomEvent('checkout', {
            detail: {
                checkout: true,
                continue: false
            }
        });
        this.dispatchEvent(checkoutEvent);
    }
}
