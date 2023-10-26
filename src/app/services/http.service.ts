import { Injectable }                                       from '@angular/core';
import { HttpClient }                                       from '@angular/common/http';
import { Classification, FixturesRequest, StandingRequest } from '../interfaces/classification.interface';
import { Observable }                                       from 'rxjs';
import { GameResult, Response }                             from '../interfaces/game-result.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl: string = 'https://v3.football.api-sports.io/';

  constructor(
    private http: HttpClient
  ) {
  }

  public getStandings(request: StandingRequest): Observable<Response<Classification>> {
    console.log(`getStandings: ${JSON.stringify(request)}`);
    return this.http.get<Response<Classification>>(`${this.apiUrl}/standings`, {
      params: {
        league: request.league,
        season: request.season
      }
    });
  }

  public getFixtures(request: FixturesRequest): Observable<Response<GameResult>> {
    return this.http.get<Response<GameResult>>(`${this.apiUrl}/fixtures`, {
      params: {
        league: request.league,
        season: request.season,
        team: request.team,
        last: request.last
      }
    });
  }
}
