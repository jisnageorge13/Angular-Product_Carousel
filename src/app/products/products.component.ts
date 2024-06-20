import { Component } from '@angular/core';
import { Product } from '../models/Products.interface';
import { Category } from '../models/Category.interface';
import { FormsModule } from '@angular/forms';
import { ErrorDirective } from '../directives/error.directive';
import { FilterpipePipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, ErrorDirective, FilterpipePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  Category: Category[] = []

  toFilter: string = ''
 
 
  sortedData: Product[] = [];
 
  async ngOnInit() {
    await this.getData();
  }
 
  async getData() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      // const formattedValue = await response.json();
      // this.sortedData = formattedValue.products;
      const data = await response.json();
      console.log(this.sortedData);
      const beautyProducts = data.products.filter((product: Product) => product.category === 'beauty')
      const fragranceProducts = data.products.filter((product: Product) => product.category === 'fragrances')
      const furnitureProducts = data.products.filter((product: Product) => product.category === 'furniture')
      const groceriesProducts = data.products.filter((product: Product) => product.category === 'groceries')
      // console.log(beautyProducts);
      
      this.Category = [
        {
          name: 'Beauty Products',
          products: beautyProducts
        },
        {
          name: 'Fragrance Products',
          products: fragranceProducts
        },
        {
          name: 'Furniture Products',
          products: furnitureProducts
        },
        {
          name: 'Groceries',
          products: groceriesProducts
        }

      ]
        
    }
      
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 
}
