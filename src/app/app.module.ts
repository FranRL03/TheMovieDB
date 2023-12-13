import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CastListComponent } from './components/cast/cast-list/cast-list.component';
import { CarteleraComponent } from './components/movie/cartelera/cartelera.component';
import { MovieItemDetailsActorComponent } from './components/movie/movie-item-details-actor/movie-item-details-actor.component';
import { MovieItemListComponent } from './components/movie/movie-item-list/movie-item-list.component';
import { ReviewsMovieComponent } from './components/movie/reviews-movie/reviews-movie.component';
import { SomeDetailsComponent } from './components/movie/some-details/some-details.component';
import { PeopleItemListComponent } from './components/people/people-item-list/people-item-list.component';
import { AuthenticationApprovedComponent } from './components/profile/authentication-approved/authentication-approved.component';
import { FooterComponent } from './components/reutilizables/footer/footer.component';
import { NavComponent } from './components/reutilizables/nav/nav.component';
import { CarteleraSerieComponent } from './components/serie/cartelera-serie/cartelera-serie.component';
import { ReviewsSerieComponent } from './components/serie/reviews-serie/reviews-serie.component';
import { SerieItemListComponent } from './components/serie/serie-item-list/serie-item-list.component';
import { SomeDetailsSerieComponent } from './components/serie/some-details-serie/some-details-serie.component';
import { TemporadaComponent } from './components/serie/temporada/temporada.component';
import { UpcomingItemListComponent } from './components/upcoming/upcoming-item-list/upcoming-item-list.component';
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
import { FullWithCarrusellComponent } from './components/carrusel/full-with-carrusell/full-with-carrusell.component';
import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list-item/list.component';
import { FormsModule } from '@angular/forms';
import { ListItemDetailsComponent } from './components/list/list-item-details/list-item-details.component';
import { PageListDetailsComponent } from './ui/page-list-details/page-list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PageHomeComponent,
    PageNotFoundComponent,
    MovieItemListComponent,
    PageMovieListComponent,
    FullWithCarrusellComponent,
    PeopleItemListComponent,
    PagePeopleListComponent,
    CarteleraComponent,
    PageMovieDetailsComponent,
    SerieItemListComponent,
    PageSerieListComponent,
    UpcomingItemListComponent,
    PageUpcomingListComponent,
    CastListComponent,
    PagePeopleDetailsComponent,
    SomeDetailsComponent,
    ReviewsMovieComponent,
    MovieItemDetailsActorComponent,
    PageSerieDetailsComponent,
    CarteleraSerieComponent,
    SomeDetailsSerieComponent,
    AuthenticationApprovedComponent,
    TemporadaComponent,
    ReviewsSerieComponent,
    PageProfileComponent,
    ListComponent,
    ListItemDetailsComponent,
    PageListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
