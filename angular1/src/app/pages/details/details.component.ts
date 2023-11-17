import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent{
//   products : Product[] = []
//   productId:number;  
//   product:Product;

// constructor(private route: ActivatedRoute,private productsService : ProductsService){
// this.route.paramMap.subscribe((params)=>{
//   this.productId=parseInt((params.get('id')))
// //   this.products = productsService.product
// //   this.product = this.products.find(product=> product.id == this.productId)
// })
// this.productsService.getProductById(this.productId).subscribe(response=>{
//   this.products= response[]
// })
// }

  
}
