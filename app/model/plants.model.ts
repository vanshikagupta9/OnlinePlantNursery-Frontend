export class Plants{

    constructor(
   public plantId: number,
   public bloomTime: string,
   public commonName: string,
   public difficultLevel: string,
   public plantCost: number,
   public plantDescription: string,
   public plantHeight: number,
   public plantSpread: string,
   public plantStock: number,
   public temperature: string,
   public typeOfPlant: string,
   public medicinalOrCulinaryUse: string,
    ){}
}