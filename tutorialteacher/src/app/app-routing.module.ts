import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { CrudComponent } from './crud/crud.component';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'service',component:ServiceComponent},
  {path : 'price',component:PriceComponent},
  {path: 'contact',component:ContactComponent},
  {path : 'crud',component:CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
