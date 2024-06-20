import { Component, Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorDirective } from './directives/error.directive';
import { ProductsComponent } from './products/products.component';
import { FilterpipePipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ErrorDirective,ProductsComponent,FilterpipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
  toFilter: string = '';
}
