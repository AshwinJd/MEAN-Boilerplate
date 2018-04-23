import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent
  ],
  imports: [
    MatToolbarModule,
  ],
  exports: [
    SharedComponent,
    NavbarComponent
  ],
  providers: [],
})
export class SharedModule { }
