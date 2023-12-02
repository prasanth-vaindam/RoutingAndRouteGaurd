import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { CompDComponent } from './comp-d/comp-d.component';
import { RouteGaurdService } from './route-gaurd.service';
const appRoute: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: CompAComponent },
  { path: 'About', component: CompBComponent },
  { path: 'Contact', component: CompCComponent },
  {
    path: 'Careers',
    component: CompDComponent,
    canActivate: [RouteGaurdService],
  },
];
@NgModule({
  //imports: [RouterModule.forRoot(routes)],

  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent,
    CompDComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoute)],
  providers: [RouteGaurdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
