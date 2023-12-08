export class Recipes {
  constructor(
    public Code: number,
    public Name: string,
    public CategoryCode: number,
    public PreparationTime: number,
    public DifficultyLevel: number,
    public DateAdded: Date,
    public ComponentsList: string,
    public PreparationMethod: any,
    public OwnerCode: number,
    public IsSeen: boolean,
    public Description: string,
  ) {}
}
