export class Ceremony {
  public _id: string;
  public id: string;
  constructor(
    public name: string,
    public description: string,
    public phone: string,
    public imageUrl: string,
    public group?: Ceremony[] | null
  ) {}
}
