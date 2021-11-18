import { LightningElement } from 'lwc';

export default class NavCategories extends LightningElement {
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
}
  // TODO
  //navDropdowns = [
  //     {
  //         "type": "Snowboard",
  //         "brand": "Burton",
  //         "price": 299,
  //         "image-url": ""
  //       },
  //       {
  //         "type": "",
  //         "brand": "",
  //         "price": 0,
  //         "image-url": ""
  //       },
  //     ]