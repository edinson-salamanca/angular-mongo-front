import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './actividad/list.component';
import { DetailComponent } from './actividad/detail.component';
import { CreateComponent } from './actividad/create.component';
import { UpdateComponent } from './actividad/update.component';

const routes: Routes = [
  {path: '', component:ListComponent},
  {path: 'datail', component:DetailComponent},
  {path: 'create', component:CreateComponent},
  {path: 'update', component:UpdateComponent},
  {path: '**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
