import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'cv', component: CurriculumVitaeComponent },
  { path: 'certifications', component: CertificationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }