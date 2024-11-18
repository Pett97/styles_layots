export class Product {
  private imagePath:string;
  private name: string;
  private description: string;
  private price: number;

  constructor(imagePath:string,name: string, description: string, price: number) {
    this.imagePath = imagePath;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  public getImagePath():string{
    return this.imagePath;
  }

  public getName():string{
    return this.name;
  }

  public getDescription():string{
    return this.description;
  }

  public getPrice():number{
    return this.price;
  }
}
