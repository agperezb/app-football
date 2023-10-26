import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService }            from '../../services/http.service';
import { GameResult }             from '../../interfaces/game-result.interface';
import { FixturesRequest }              from '../../interfaces/classification.interface';
import { Subscription }                 from 'rxjs';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css']
})
export class GameResultsComponent implements OnInit, OnDestroy {

  public response: GameResult[] = [];
  private league: string | null = null;
  private subscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _http: HttpService
  ) {
  }

  ngOnInit() {
    this.league = this.route.snapshot.paramMap.get('league');
    const team: string | null = this.route.snapshot.paramMap.get('team');

    if (!this.league || !team) {
      console.log('league or team is null');
      return;
    }

    const request: FixturesRequest = {
      league: parseInt(this.league, 10),
      season: new Date().getFullYear(),
      team: parseInt(team, 10),
      last: 10
    }

    this.subscription = this._http.getFixtures(request).subscribe({
      next: (data) => {
        this.response = data.response;
      }
    });
  }

  goToBack(): void {
    this.router.navigate(['/league-classification'], {queryParams: {league: this.league}}).then();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
