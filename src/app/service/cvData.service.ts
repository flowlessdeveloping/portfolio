import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IntroductionModel } from '../model/introduction.model';
import { Experiences, experiencesData } from '../model/experiences.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  constructor() {}

  getExperiences(): Observable<Experiences[]> {
    return of(this.cvData);
  }

  getIntroduction(): Observable<IntroductionModel> {
    return of(this.introductionData);
  }

  private cvData: Experiences[] = experiencesData;
  private introductionData: IntroductionModel = {
    title: 'Davide Valenti - Software Developer',
    description:
      'I am a Senior Frontend Developer with a passion for creating scalable and user-friendly applications in Angular and React. While my focus is on frontend, I also have professional experience in Java backend development, allowing me to contribute across the stack and ensure seamless integration. I thrive on technical challenges, performance optimization, and delivering high-quality software solutions.',
  };
}
