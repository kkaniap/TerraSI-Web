import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { TerrariumsComponent } from './component/terrariums/terrariums.component';
import { MenuComponent } from './component/menu/menu.component';
import { WorkspaceComponent } from './component/workspace/workspace.component';
import {AppRoutingModule} from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TerrariumsComponent,
    MenuComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
