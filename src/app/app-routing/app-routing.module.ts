import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TerrariumsComponent} from '../component/terrariums/terrariums.component';
import {HomeComponent} from '../component/home/home.component';
import {TerraDetailsComponent} from '../component/terra-details/terra-details.component';
import {NewsComponent} from '../component/news/news.component';
import {LoginComponent} from '../component/login/login.component';
import {UserGuardService} from '../services/UserGuardService';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [UserGuardService]},
  {path: 'terrariums', component: TerrariumsComponent, canActivate: [UserGuardService]},
  {path: 'terrariums/1', component: TerraDetailsComponent},
  {path: 'news/:id', component: NewsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
