import {Component, Input} from "@angular/core";
import {IRecipe} from "../core/interfaces/IRecipe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipes-card',
  templateUrl: './recipes-card.component.html',
  styleUrls: ['./recipes-card.component.scss']
})
export class RecipesCardComponent {

  @Input() data?: IRecipe

  public isSaveRecipe: boolean = false

  constructor(
    private _router: Router
  ) { }

  public saveRecipe(id: number) {
    this.isSaveRecipe = !this.isSaveRecipe
  }

  public goToOneRecipe(id: number) {
    this._router.navigate(['screens', 'recipes', id])
  }
}
