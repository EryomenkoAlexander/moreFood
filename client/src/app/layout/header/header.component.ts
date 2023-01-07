import {Component} from "@angular/core";
import {IDropDown} from "./core/interfaces/IDropDown";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public kitchenMenu: IDropDown[] = [
    {
      title: 'Русская',
      route: '/recipes/kitchen/?queryParams',
      iconData: 'fa-solid fa-flag'
    },
    {
      title: 'Мексиканская',
      route: '/recipes/kitchen/?queryParams',
      iconData: 'fa-solid fa-flag'
    },
    {
      title: 'Китайская',
      route: '/recipes/kitchen/?queryParams',
      iconData: 'fa-solid fa-flag'
    },
    {
      title: 'Итальянская',
      route: '/recipes/kitchen/?queryParams',
      iconData: 'fa-solid fa-flag'
    },
    {
      title: 'Испанская',
      route: '/recipes/kitchen/?queryParams',
      iconData: 'fa-solid fa-flag'
    },
    {
      title: 'Французская',
      route: '/recipes/kitchen/?queryParams',
      iconData: 'fa-solid fa-flag'
    },
    {
      title: 'Тайская',
      route: '/recipes/kitchen/?queryParams',
      iconData: 'fa-solid fa-flag'
    },
    {
      title: 'Кавказская',
      route: '/recipes/kitchen/?queryParams',
      iconData: 'fa-solid fa-flag'
    },
  ]
  public kitchenIsOpen: boolean = false;

  public dishMenu: IDropDown[] = [
    {
      title: 'Первые',
      route: '/recipes/dish/?queryParams',
      iconData: 'fa-solid fa-plate-wheat'
    },
    {
      title: 'Вторые',
      route: '/recipes/dish/?queryParams',
      iconData: 'fa-solid fa-drumstick-bite'
    },
    {
      title: 'Салаты',
      route: '/recipes/dish/?queryParams',
      iconData: 'fa-solid fa-carrot'
    },
    {
      title: 'Закуски',
      route: '/recipes/dish/?queryParams',
      iconData: 'fa-solid fa-fish'
    },
    {
      title: 'Соусы',
      route: '/recipes/dish/?queryParams',
      iconData: 'fa-solid fa-whiskey-glass'
    },
    {
      title: 'Выпечка',
      route: '/recipes/dish/?queryParams',
      iconData: 'fa-solid fa-cookie'
    },
    {
      title: 'Десерты',
      route: '/recipes/dish/?queryParams',
      iconData: 'fa-solid fa-cake-candles'
    }
  ]
  public dishIsOpen: boolean = false;

  constructor() {
  }

  public openKitchen() {
    this.kitchenIsOpen = !this.kitchenIsOpen
  }

  public openDish() {
    this.dishIsOpen = !this.dishIsOpen
  }

}
