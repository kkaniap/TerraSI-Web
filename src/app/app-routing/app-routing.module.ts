import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TerrariumsComponent} from '../component/terrariums/terrariums.component';
import {HomeComponent} from '../component/home/home.component';
import {TerraDetailsComponent} from '../component/terra-details/terra-details.component';
import {NewsComponent} from '../component/news/news.component';
import {LoginComponent} from '../component/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'terrariums', component: TerrariumsComponent },
  {path: 'terrariums/1', component: TerraDetailsComponent},
  {path: 'news/1', component: NewsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
