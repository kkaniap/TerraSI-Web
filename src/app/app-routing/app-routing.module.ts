import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TerrariumsComponent} from '../component/terrariums/terrariums.component';
import {HomeComponent} from '../component/home/home.component';
import {TerraDetailsComponent} from '../component/terra-details/terra-details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'terrariums', component: TerrariumsComponent },
  {path: 'terrariums/1', component: TerraDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
