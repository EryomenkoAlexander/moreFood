import {IDropDown} from "../interfaces/IDropDown";

export const dishMenu: IDropDown[] = [
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
