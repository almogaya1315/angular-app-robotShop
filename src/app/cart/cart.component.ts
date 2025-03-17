import { Component, OnInit } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
private cart: IProduct[] = [];
constructor(private cartSvc: CartService){}

ngOnInit() {
  this.cartSvc.getCart().subscribe({
    next: (cart) => (this.cart = cart),
  });
}

get cartItems() {
  return this.cart;
}

get cartTotal() {
  return this.cart.reduce((prev, next) => {
    let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
    return prev + next.price * discount;
  }, 0);
}

removeFromCart(product: IProduct) {
  this.cartSvc.remove(product);
}

getImageUrl(product: IProduct) {
  if (!product) return '';
  return '/assets/images/robot-parts/' + product.imageName;
}
}
