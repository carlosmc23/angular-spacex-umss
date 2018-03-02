import { Component, OnInit } from '@angular/core';
import { Launch } from '../model/launch';

@Component({
  selector: 'asu-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  launches: Launch[];

  constructor() { }

  // Inicializacion del Componente
  ngOnInit() {
    this.launches = [
      {
        launch_date_utc: '2018-02-22T14:17:00Z',
        rocket: {
          rocket_id: 'Falcon 9',
          rocket_name: 'Falcon 9'
        }
      },
      {
        launch_date_utc: '2018-01-22T14:17:00Z',
        rocket: {
          rocket_id: 'Falcon 90',
          rocket_name: 'Falcon 90'
        }
      },

      {
        launch_date_utc: '2018-01-22T14:17:00Z',
        rocket: {
          rocket_id: 'Falcon 90',
          rocket_name: 'Falcon 90'
        }
      },
      {
        launch_date_utc: '2018-01-22T14:17:00Z',
        rocket: {
          rocket_id: 'Falcon 90',
          rocket_name: 'Falcon 90'
        }
      },
      {
        launch_date_utc: '2018-01-22T14:17:00Z',
        rocket: {
          rocket_id: 'Falcon 90',
          rocket_name: 'Falcon 90'
        }
      },
      {
        launch_date_utc: '2018-01-22T14:17:00Z',
        rocket: {
          rocket_id: 'Falcon 90',
          rocket_name: 'Falcon 90'
        }
      }

    ];
  }

}
