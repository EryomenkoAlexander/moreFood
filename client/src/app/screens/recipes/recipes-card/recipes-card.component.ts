import {Component, Input} from "@angular/core";
import {IRecipe} from "../core/interfaces/IRecipe";

@Component({
  selector: 'app-recipes-card',
  templateUrl: './recipes-card.component.html',
  styleUrls: ['./recipes-card.component.scss']
})
export class RecipesCardComponent {

  @Input() data?: IRecipe

  public isSaveRecipe: boolean = false

  constructor() { }

  public saveRecipe(id: number) {
    this.isSaveRecipe = !this.isSaveRecipe
  }

}
