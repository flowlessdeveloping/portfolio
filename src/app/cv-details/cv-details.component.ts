import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService } from '../service/cvData.service';
import { Experiences } from '../model/experiences.model';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-cv-details',
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './cv-details.component.html',
  styleUrl: './cv-details.component.css',
})
export class CvDetailsComponent implements OnInit {
  experiences: Experiences[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.getExperiences().subscribe((data) => {
      this.experiences = data;
      console.log(this.experiences);
    });
  }
}
