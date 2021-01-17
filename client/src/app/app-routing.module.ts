import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './components/forgot.component';
import { LoginComponent } from './components/login.component';
import { MainComponent } from './components/main.component';
import { RegisterComponent } from './components/register.component';
import { AuthGuardService } from './services/authguard.service';

const routes: Routes = [
  {path:'reset/:code', component:ForgotComponent},
  {path:'reset', component:ForgotComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'main/:code', component:MainComponent, canActivate: [AuthGuardService]},
  {path:'main', component:MainComponent, canActivate: [AuthGuardService]},
  {path:'', component:LoginComponent},
  {path:'**', redirectTo:'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
