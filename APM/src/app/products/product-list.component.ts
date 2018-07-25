import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "12435",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/sv"
    }, {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0053",
            "releaseDate": "March 21, 2016",
            "description": "12435",
            "price": 2.99,
            "starRating": 5.2,
            "imageUrl": "https://openclipart.org/image/300px/sv"
    }
    ];
}