import {Routes} from "@angular/router";

export const ScreensRouting: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: "full",
  },
  {
    path: 'cabinet',
    loadChildren: () => import('./cabinet/cabinet.module').then(m => m.CabinetModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  },
]
