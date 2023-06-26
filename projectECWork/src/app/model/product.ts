import { Dealer } from "./dealer";
import { ProductDetails } from "./product-details";

export class Product {

    productId:number;
    productName:string;
    productCategory:string;
    productPrice:number;
    productAvailableCount:number;
    availableDealer:Dealer[];
    productDetails:ProductDetails;

}
