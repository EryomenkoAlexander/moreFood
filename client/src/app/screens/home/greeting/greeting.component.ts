import {Component} from "@angular/core";
import {IFood} from "./core/interfaces/IFood";
import {Router} from "@angular/router";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent {

  public foods: IFood[] = [
    {
      imagePath: 'assets/images/food/soup.png',
      title: 'Первые',
      path: '/screens/recipes/first'
    },
    {
      imagePath: 'assets/images/food/salad.png',
      title: 'Салаты',
      path: '/screens/recipes/salads'
    },
    {
      imagePath: 'assets/images/food/sauce.png',
      title: 'Соусы',
      path: '/screens/recipes/sauces'
    },
    {
      imagePath: 'assets/images/food/second.png',
      title: 'Вторые',
      path: '/screens/recipes/seconds'
    }
  ]

  constructor(
    private _router: Router
  ) {}

  public goToRecipes() {
    this._router.navigate(['screens', 'recipes'])
  }

}
