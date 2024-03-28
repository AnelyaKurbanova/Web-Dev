import { Component } from '@angular/core';
import { Category, categories } from '../categories';
import { products } from '../products';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = [...categories]
  state: Category = {
    category: ""
  }

  filter(category: Category){
    this.state = category

    products.forEach(el => {
      if(el.category == category.category && !el.remove){
        el.active = true
      } else{
        el.active = false
      }
    })
  }
}
