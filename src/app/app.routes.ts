import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';

export const routes: Routes = [
  { path: '', component: CurriculumVitaeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }