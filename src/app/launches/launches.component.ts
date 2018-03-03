import { Component, OnInit } from '@angular/core';
import { Launch } from '../model/launch';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'asu-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  launches: Launch[] = [];
  spacex: SpacexService;

  // Dependency Injection!!!(DI). Inyeccion de Dependencias
  constructor(spacex: SpacexService) {
    this.spacex = spacex;
   }

  // Inicializacion del Componente
  ngOnInit() {
    this.spacex.getLaunches()
      .subscribe((res) => {
        this.launches = res;
      });

    // setTimeout(() => this.launches = [], 10000);
  }

}
