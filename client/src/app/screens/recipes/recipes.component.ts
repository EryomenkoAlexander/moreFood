import {Component} from "@angular/core";
import {IRecipe} from "./core/interfaces/IRecipe";
import {ISelect} from "./core/interfaces/ISelect";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {

  public recipes: IRecipe[] = [
    {
      id: 1,
      preview_url: 'https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium',
      title: 'Салат Цезарь',
      rating: 4.8,
      cooking_time_min: 20,
    },
    {
      id: 2,
      preview_url: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505',
      title: 'Бургер кинг',
      rating: 5,
      cooking_time_min: 15
    },
    {
      id: 3,
      preview_url: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg',
      title: 'Картошки по французски',
      rating: 3.5,
      cooking_time_min: 45
    },
    {
      id: 4,
      preview_url: 'https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg',
      title: 'Борщ',
      rating: 5,
      cooking_time_min: 120
    },
    {
      id: 5,
      preview_url: 'https://web-assets.bcg.com/3c/3d/794ddde7481695d246407d66e179/food-for-thought-the-untapped-climate-opportunity-in-alternative-proteins-rectangle.jpg',
      title: 'Нагетсы',
      rating: 4.2,
      cooking_time_min: 30
    },
    {
      id: 3,
      preview_url: 'https://wistatefair.com/fair/wp-content/uploads/2022/06/Black-bean-burrito-balls-600x400-1.png',
      title: 'Сладкие булочки',
      rating: 4.9,
      cooking_time_min: 50
    }
  ]
  public selectKitchen: ISelect[] = [
    { title: 'Все', value: 'Все' },
    { title: 'Русская', value: 'Русская' },
    { title: 'Мексиканская', value: 'Мексиканская' },
    { title: 'Китайская', value: 'Китайская' },
    { title: 'Итальянская', value: 'Итальянская' },
    { title: 'Испанская', value: 'Испанская' },
    { title: 'Французская', value: 'Французская' },
    { title: 'Тайская', value: 'Тайская' },
    { title: 'Кавказская', value: 'Кавказская' },
  ]
  public selectDish: ISelect[] = [
    { title: 'Все', value: 'Все' },
    { title: 'Первые', value: 'Первые' },
    { title: 'Вторые', value: 'Вторые' },
    { title: 'Салаты', value: 'Салаты' },
    { title: 'Закуски', value: 'Закуски' },
    { title: 'Соусы', value: 'Соусы' },
    { title: 'Выпечка', value: 'Выпечка' },
    { title: 'Десерты', value: 'Десерты' }
  ]

  constructor() {}

}
