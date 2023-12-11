import {CategoryService} from "../category.service";
import {Category} from "../../models/Category";


export class Retrieval {

  static retrieveCategories(service: CategoryService): Category[] | void {
    service.getAllCategory().subscribe(
      (secc) => {
        return secc;
      },
      (error) => {
        console.log(error);
      },
    );
  }

}
