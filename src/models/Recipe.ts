export class Recipes {
  constructor(
    public Code: number,
    public Name: string,
    public CategoryCode: number,
    public PreparationTime: number,
    public DifficultyLevel: number,
    public DateAdded: Date,
    public IngredientList: string,
    public RecipeSteps: any,
    public OwnerCode: number,
    public IsSeen: boolean,
    public Description: string,
  ) {}
}
