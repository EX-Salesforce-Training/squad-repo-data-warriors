import { LightningElement } from 'lwc';

export default class NavCategories extends LightningElement {
    navDropdowns = [
        "Home", "Snowboards", "Skis", "Brands", "Accessories", "Sale"
    ]
    handleCheckBackClick() {
        const checkBackEvent = new CustomEvent('checkback', {
            detail: {
                checkBack: true,
                checkout: false,
                continue: false
            }
        });
        this.dispatchEvent(checkBackEvent);
    }

    handleCheckBackEvent(event){
        this.checkout = event.detail.checkout;
        this.continue = event.detail.continue;
        this.checkBack = event.detail.checkBack;
    }
}
