import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }                        from './app.component';
import { LeagueClassificationComponent }       from './components/league-classification/league-classification.component';
import { GameResultsComponent }                from './components/game-results/game-results.component';
import { AppRoutingModule }                    from './app.routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CacheInterceptor }                    from './interceptors/cache.interceptor';
import { SpinnerComponent }                    from './components/spinner/spinner.component';
import { LoadingInterceptor }                  from './interceptors/loading.interceptor';
import { HeadersInterceptor }                  from './interceptors/headers.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LeagueClassificationComponent,
    GameResultsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
