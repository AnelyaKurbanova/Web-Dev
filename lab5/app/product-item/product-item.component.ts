import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  clicked = false;

  shareTelegram(product: Product) {
    const url = encodeURIComponent(product.link);
    const telegramUrl = `https://telegram.me/share/url?url=${url}&text=${product.name}`;
    window.open(telegramUrl, '_blank');
  }

  clickLike(product: Product){
    if(!this.clicked){
      product.like +=1;
    }else{
      product.like -=1;
      
    }
    this.clicked = !this.clicked

    
  }

  remove(product: Product){
    product.remove = true;
    product.active = !product.active
  }

}
