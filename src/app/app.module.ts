import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {TerrariumsComponent} from './component/terrariums/terrariums.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {TerraDetailsComponent} from './component/terra-details/terra-details.component';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NewsComponent} from './component/news/news.component';
import {LoginComponent} from './component/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HomeService} from './services/HomeService';
import {NewsService} from './services/NewsService';
import {AuthInterceptor} from './interceptors/AuthInterceptor';
import {AuthService} from './services/AuthService';
import {UserGuardService} from './services/UserGuardService';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TerrariumsComponent,
    MainNavComponent,
    TerraDetailsComponent,
    NewsComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatSlideToggleModule,
        MatSliderModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [
    HomeService,
    NewsService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    AuthService,
    UserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
