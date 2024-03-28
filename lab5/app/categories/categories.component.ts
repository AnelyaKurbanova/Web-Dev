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
  active: Category = {
    category: ""
  }

  filter(category: Category){
    this.active = category

    products.forEach(el => {
      if(el.category == category.category && !el.remove){
        el.active = !el.active
      } else{
        el.active = false
      }
    })
  }
}
