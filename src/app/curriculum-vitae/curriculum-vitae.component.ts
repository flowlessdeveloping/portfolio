import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CvModel } from '../model/cv.model';
import { CvService } from '../service/cvData.service';
import { IntroductionModel } from '../model/introduction.model';

@Component({
  selector: 'app-curriculum-vitae',
  imports: [MatCardModule, MatDividerModule, MatListModule, MatIconModule],
  templateUrl: './curriculum-vitae.component.html',
  styleUrl: './curriculum-vitae.component.css',
})
export class CurriculumVitaeComponent implements OnInit {
  cvData: CvModel[] = [];
  introduction: IntroductionModel = {
    title: '',
    description: '',
  };

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.getCvData().subscribe((data) => {
      this.cvData = data;
    });

    this.cvService.getIntroduction().subscribe((data) => {
      this.introduction = data;
    });
  }
}
