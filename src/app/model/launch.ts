import { Rocket } from './rocket';

export interface Launch {
  launch_date_utc: string,
  rocket: Rocket;
}
