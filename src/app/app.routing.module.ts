import { NgModule }                      from '@angular/core';
import { Routes, RouterModule }          from '@angular/router';
import { LeagueClassificationComponent } from './components/league-classification/league-classification.component';
import { GameResultsComponent }          from './components/game-results/game-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/league-classification', pathMatch: 'full' },
  { path: 'league-classification', component: LeagueClassificationComponent },
  { path: 'game-results/:league/:team', component: GameResultsComponent },
  { path: '**', redirectTo: '/league-classification', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
