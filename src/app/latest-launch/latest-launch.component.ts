import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';
import { Launch } from '../model/launch';

@Component({
  selector: 'asu-latest-launch',
  templateUrl: './latest-launch.component.html',
  styleUrls: ['./latest-launch.component.css']
})
export class LatestLaunchComponent implements OnInit {
  launch: Launch;

  constructor(private spacex: SpacexService) {
   }

  ngOnInit() {
    this.spacex.getLatestLaunch()
      .subscribe((launch)=> {
        this.launch = launch;
      });
  }
}
