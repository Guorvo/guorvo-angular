import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Product } from './../../models/product.model';

@Component({
  standalone: true,
  imports: [ NgOptimizedImage, CommonModule ],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  @Input() product!: Product;

}
