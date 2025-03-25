import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CvService } from '../service/cvData.service';
import { IntroductionModel } from '../model/introduction.model';
import { CommonModule } from '@angular/common';
import { CvDetailsComponent } from '../cv-details/cv-details.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CertificationsComponent } from '../certifications/certifications.component';

@Component({
  selector: 'app-curriculum-vitae',
  imports: [
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    CvDetailsComponent,
    ProjectsComponent,
    CertificationsComponent,
  ],
  templateUrl: './curriculum-vitae.component.html',
  styleUrl: './curriculum-vitae.component.css',
})
export class CurriculumVitaeComponent implements OnInit {
  showDetailedCard = false;
  currentview = '';
  animateCard = false;
  introduction: IntroductionModel = {
    title: '',
    description: '',
  };

  @Output() setTitle = new EventEmitter<string>();

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.animateCard = false;
    this.cvService.getIntroduction().subscribe((data) => {
      this.introduction = data;
    });
  }

  activeDetailedCard(chosenView: string) {
    if (
      chosenView !== this.currentview &&
      chosenView !== '' &&
      this.showDetailedCard
    ) {
      this.currentview = chosenView;
      return;
    } else {
      this.currentview = chosenView;
      this.setTitle.emit(this.currentview);
      setTimeout(() => {
        this.animateCard = !this.animateCard;
      }, 10);
      this.showDetailedCard = !this.showDetailedCard;
    }
  }
}
