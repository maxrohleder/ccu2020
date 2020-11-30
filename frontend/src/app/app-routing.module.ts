import { TravelComponent } from './travel/travel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { ForumComponent } from './forum/forum.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: TravelComponent },
  { path: 'news', component: NewsComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'info', component: CovidInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
