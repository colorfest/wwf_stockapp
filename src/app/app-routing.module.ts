import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStockComponent } from './components/add-stock/add-stock.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'add-stock', component: AddStockComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
