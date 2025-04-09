import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    FontAwesomeModule
  ]
})
export class NotFoundModule { 
  //for Font-Awesome to be accessible globally
    constructor(library: FaIconLibrary) {
      library.addIconPacks(fas);
    }
}
