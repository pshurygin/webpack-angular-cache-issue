import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChildComponent } from './child.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ChildComponent
  }
];

@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ]
})
export class ChildModule { }
