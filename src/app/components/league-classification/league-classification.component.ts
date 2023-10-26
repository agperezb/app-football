import { Component, OnInit }                  from '@angular/core';
import { HttpService }                        from '../../services/http.service';
import { Country, Standing, StandingRequest } from '../../interfaces/classification.interface';
import { ActivatedRoute }                     from '@angular/router';
import { Subscription }                       from 'rxjs';

@Component({
  selector: 'app-league-classification',
  templateUrl: './league-classification.component.html',
  styleUrls: ['./league-classification.component.css']
})
export class LeagueClassificationComponent implements OnInit {

  public response: Standing[] = [];
  public isEmpty: boolean = false;
  public league?: number;
  private subscription?: Subscription;

  public countries: Country[] = [
    {id: 39, name: 'England'},
    {id: 140, name: 'Spain'},
    {id: 61, name: 'France'},
    {id: 78, name: 'Germany'},
    {id: 135, name: 'Italy'},
  ];

  constructor(
    private route: ActivatedRoute,
    private _http: HttpService,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.hasOwnProperty('league')) {
        this.searchLeague(params['league']);
      }
    })
  }

  searchLeague(league: number, event?: Event): void {
    if (event) event.stopPropagation();
    this.league = league;
    const standing: StandingRequest = {
      league: league,
      season: new Date().getFullYear()
    };

    this.subscription = this._http.getStandings(standing).subscribe({
      next: (data) => {
        this.response = data.response[0].league.standings[0];
        if (this.response.length !== 0) {
          this.isEmpty = true;
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
