export class Memory {
  public _id: string;
  public id: string;

  constructor(
    public name: string,
    public description: string,
    public phone: string,
    public imageUrl: string,
    public group?: Memory[] | null
  ) {}
}
