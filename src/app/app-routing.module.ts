import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationApprovedComponent } from './components/profile/authentication-approved/authentication-approved.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { PageMovieDetailsComponent } from './ui/page-movie-details/page-movie-details.component';
import { PageMovieListComponent } from './ui/page-movie-list/page-movie-list.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { PagePeopleDetailsComponent } from './ui/page-people-details/page-people-details.component';
import { PagePeopleListComponent } from './ui/page-people-list/page-people-list.component';
import { PageProfileComponent } from './ui/page-profile/page-profile.component';
import { PageSerieDetailsComponent } from './ui/page-serie-details/page-serie-details.component';
import { PageSerieListComponent } from './ui/page-serie-list/page-serie-list.component';
import { PageUpcomingListComponent } from './ui/page-upcoming-list/page-upcoming-list.component';
import { PageListDetailsComponent } from './ui/page-list-details/page-list-details.component';

const routes: Routes = [
  { path: 'page-home', component: PageHomeComponent },
  { path: 'page-movie-list', component: PageMovieListComponent },
  { path: 'page-actor-list', component: PagePeopleListComponent },
  { path: 'page-serie-list', component: PageSerieListComponent },
  { path: 'page-upcoming-list', component: PageUpcomingListComponent },
  { path: 'page-movie-details/:id', component: PageMovieDetailsComponent },
  { path: 'page-actor-details/:id', component: PagePeopleDetailsComponent },
  { path: 'page-serie-details/:id', component: PageSerieDetailsComponent },
  { path: 'approved', component: AuthenticationApprovedComponent },
  { path: 'page-profile', component: PageProfileComponent },
  { path: 'page-list/:id', component: PageListDetailsComponent},
  { path: '', pathMatch: 'full', redirectTo: '/page-home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
