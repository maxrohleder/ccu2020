import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { ForumComponent } from './forum/forum.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'info', component: CovidInfoComponent },
  { path: 'notification', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
