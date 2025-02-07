import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatListModule } from '@angular/material/list';
import { CvService } from '../service/cvData.service';
import {CvModel} from '../model/cv.model';

@Component({
  selector: 'app-curriculum-vitae',
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    CommonModule
  ],
  templateUrl: './curriculum-vitae.component.html',
  styleUrl: './curriculum-vitae.component.css'
})


export class CurriculumVitaeComponent implements OnInit {

  cvData: CvModel[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.getCvData().subscribe(data => {
      this.cvData = data;
    });
  }
 

}