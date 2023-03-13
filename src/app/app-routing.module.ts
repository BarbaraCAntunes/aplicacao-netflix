import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { CardSerieFriendsComponent } from './components/card-serie-friends/card-serie-friends.component';
import { CardSerieMfComponent } from './components/card-serie-mf/card-serie-mf.component';
import { CardSerieHpComponent } from './components/card-serie-hp/card-serie-hp.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'serie/friends', component: CardSerieFriendsComponent, canActivate: [AuthGuard] },
  { path: 'serie/modern-family', component: CardSerieMfComponent, canActivate: [AuthGuard] },
  { path: 'serie/harry-potter', component: CardSerieHpComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
