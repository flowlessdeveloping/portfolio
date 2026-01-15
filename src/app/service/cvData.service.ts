import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  IntroductionModel,
  introductionDataEq,
} from '../model/introduction.model';
import {
  Experiences,
  experiencesDataEn,
  experiencesDataIt,
} from '../model/experiences.model';
import {
  Certification,
  certificationsDataEn,
  certificationsDataIt,
} from '../model/certifications.model';
import {
  Project,
  projectsDataEn,
  projectsDataIt,
} from '../model/projects.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private currentLang: 'en' | 'it' = 'en';
  private experiencesSubject = new BehaviorSubject<Experiences[]>(
    experiencesDataEn
  );
  private introductionSubject = new BehaviorSubject<IntroductionModel>(
    introductionDataEq.en
  );
  private certificationsSubject = new BehaviorSubject<Certification[]>(
    certificationsDataEn
  );
  private projectsSubject = new BehaviorSubject<Project[]>(projectsDataEn);

  constructor() {}

  getExperiences(): Observable<Experiences[]> {
    return this.experiencesSubject.asObservable();
  }

  getIntroduction(): Observable<IntroductionModel> {
    return this.introductionSubject.asObservable();
  }

  getCertifications(): Observable<Certification[]> {
    return this.certificationsSubject.asObservable();
  }

  getProjects(): Observable<Project[]> {
    return this.projectsSubject.asObservable();
  }

  setLanguage(lang: 'en' | 'it') {
    this.currentLang = lang;
    if (lang === 'it') {
      this.experiencesSubject.next(experiencesDataIt);
      this.introductionSubject.next(introductionDataEq.it);
      this.certificationsSubject.next(certificationsDataIt);
      this.projectsSubject.next(projectsDataIt);
    } else {
      this.experiencesSubject.next(experiencesDataEn);
      this.introductionSubject.next(introductionDataEq.en);
      this.certificationsSubject.next(certificationsDataEn);
      this.projectsSubject.next(projectsDataEn);
    }
  }

  getLanguage() {
    return this.currentLang;
  }
}
