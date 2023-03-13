import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CardSerieFriendsComponent } from './components/card-serie-friends/card-serie-friends.component';
import { CardSerieMfComponent } from './components/card-serie-mf/card-serie-mf.component';
import { CardSerieHpComponent } from './components/card-serie-hp/card-serie-hp.component';
import { RouterModule, Routes } from '@angular/router';
import { SeriesService } from './services/series.service';
import { AuthGuard } from './services/auth-guard.service';
import { CardSeriesTlouComponent } from './components/card-series-tlou/card-series-tlou.component';
import { AuthService } from './services/auth-service.service';


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
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    CardSerieMfComponent,
    CardSerieHpComponent,
    CardSeriesTlouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SeriesService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
