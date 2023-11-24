import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ScreensModule} from "./screens/screens.module";
import {RouterModule, RouterOutlet} from "@angular/router";
import {AppRouting} from "./app.routing";
import {LayoutModule} from "./layout/layout.module";
import {NgxMaskModule} from "ngx-mask";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SnackbarModule} from "./shared/snackbar/snackbar.module";
import {AuthInterceptor} from "./screens/auth/core/interceptors/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(AppRouting),
    ScreensModule,
    LayoutModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    SnackbarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
