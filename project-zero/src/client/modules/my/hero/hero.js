import { LightningElement } from 'lwc';
 
export default class Hero extends LightningElement {
    handleCheckBackEvent(event){
        this.checkout = event.detail.checkout;
        this.continue = event.detail.continue;
        this.checkBack = event.detail.checkBack;
    }
}
