import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './page/default.component';

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    
    DefaultRoutingModule,
    SharedModule
  ],
})
export class DefaultModule { }
