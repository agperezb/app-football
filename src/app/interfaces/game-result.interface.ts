import { Paging, Team } from './classification.interface';

export interface Response<T> {
  get:        string;
  parameters: Parameters;
  errors:     any[];
  results:    number;
  paging:     Paging;
  response:   T[];
}

export interface Parameters {
  league: string;
  season: string;
  team:   string;
  last:   string;
}

export interface GameResult {
  fixture: Fixture;
  league:  League;
  teams:   Goals<Team>;
  goals:   Goals<number>;
  score:   Score;
}

export interface Fixture {
  id:        number;
  referee:   string;
  timezone:  string;
  date:      Date;
  timestamp: number;
  periods:   Periods;
  venue:     Venue;
  status:    Status;
}

export interface Periods {
  first:  number;
  second: number;
}

export interface Status {
  long:    string;
  short:   string;
  elapsed: number;
}

export interface Venue {
  id:   number;
  name: string;
  city: string;
}

export interface Goals<T> {
  home?: T;
  away?: T;
}

export interface League {
  id:      number;
  name:    string;
  country: string;
  logo:    string;
  flag:    string;
  season:  number;
  round:   string;
}

export interface Score {
  halftime:  Goals<number>;
  fulltime:  Goals<number>;
  extratime: Goals<number>;
  penalty:   Goals<number>;
}
