import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches.component';
import { SpacexService } from './spacex.service';
import { HttpClientModule } from '@angular/common/http';
import { LatestLaunchComponent } from './latest-launch/latest-launch.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    LatestLaunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ SpacexService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
