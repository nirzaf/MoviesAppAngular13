import { Movie } from './movie';

export interface Tv extends Movie {
  name: string;
}

export interface TvDto {
  page: number;
  results: Tv[];
  total_results: number;
  total_pages: number;
}
