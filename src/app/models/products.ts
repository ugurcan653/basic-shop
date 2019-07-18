export class Products {
    productId:number;
    categorySeoUrl:string;
    productName:string;
    seoUrl:string;
    img:string;
    
    constructor(productId:number,categorySeoUrl:string,productName:string,seoUrl:string,img:string) {
        this.productId=productId
        this.categorySeoUrl = categorySeoUrl;
        this.productName=productName;
        this.seoUrl=seoUrl;  
        this.img=img; 
    }
}
