export interface Paging {
  current: number;
  total:   number;
}

export interface Parameters {
  league: string;
  season: string;
}

export interface Classification {
  league: League;
}

export interface League {
  id:        number;
  name:      string;
  country:   string;
  logo:      string;
  flag:      string;
  season:    number;
  standings: Array<Standing[]>;
}

export interface Standing {
  rank:        number;
  team:        Team;
  points:      number;
  goalsDiff:   number;
  group:       string;
  form:        string;
  status:      string;
  description: null | string;
  all:         All;
  home:        All;
  away:        All;
  update:      Date;
}

export interface All {
  played: number;
  win:    number;
  draw:   number;
  lose:   number;
  goals:  Goals;
}

export interface Goals {
  for:     number;
  against: number;
}

export interface Team {
  id:   number;
  name: string;
  logo: string;
  winner: boolean | null;
}

export interface Country {
  id:   number;
  name: string;
}

export interface StandingRequest {
  league: number;
  season: number;
}

export interface FixturesRequest {
  league: number;
  season: number;
  team:   number;
  last:   number;
}


