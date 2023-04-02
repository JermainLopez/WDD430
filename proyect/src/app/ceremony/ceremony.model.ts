export class Ceremony {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public phone: string,
    public imageUrl: string,
    public group?: Ceremony[] | null
  ) {}
}
