export class Products {
    productId:number;
    categorySeoUrl:string;
    productName:string;
    seoUrl:string;
    img:string;
    price:number;
    ekranBoyutu:number;
    cozunurluk:number;
    
    
    constructor(productId:number,categorySeoUrl:string,productName:string,seoUrl:string,img:string,price:number,ekranBoyutu:number,cozunurluk:number) {
        this.productId=productId
        this.categorySeoUrl = categorySeoUrl;
        this.productName=productName;
        this.seoUrl=seoUrl;  
        this.img=img; 
        this.price=price;
        this.ekranBoyutu=ekranBoyutu;
        this.cozunurluk=cozunurluk;
    }
}
