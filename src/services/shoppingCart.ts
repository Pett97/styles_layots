import { Product } from './product';

export class ShoopingCart{
  private products:Product[] = [];

  public addNewProduct(newProduto:Product):void{
    this.products.push(newProduto);
  }

  public findProductByName(name:string):Product | null{
    const product = this.products.find(p=>p.getName() === name)

    return product || null;
  }

  public removeProduct(name:string):void{
    const index = this.products.findIndex(p=>p.getName() === name);
      if(index !== -1){
        this.products.splice(index, 1)
      }
  }

  public getFullPrice():number{
    let price:number = 0;
     this.products.forEach(p => {
        price += p.getPrice();
    });
    return price;
  }

  public getAllProducts():Product[]{
    return this.products;
  }
}