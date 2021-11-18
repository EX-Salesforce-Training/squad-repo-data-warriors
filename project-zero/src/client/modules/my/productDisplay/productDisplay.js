import { LightningElement } from 'lwc';

export default class NavCategories extends LightningElement {
  handleCheckBack() {
    const checkBackEvent = new CustomEvent('checkBack', {
        detail: {
            checkBack: true,
            continue: false,
            checkout: false
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