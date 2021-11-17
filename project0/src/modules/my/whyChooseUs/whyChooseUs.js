import { LightningElement } from 'lwc';

export default class WhyChooseUs extends LightningElement {

    showDetails = false;
    showOrHide = '+';

    toggleDetails(){
        this.showDetails = !this.showDetails;
        if(this.showOrHide == '+'){
            this.showOrHide = '-';
        }else{
            this.showOrHide = '+';
        }
        console.log(this.showDetails);
    }
}
