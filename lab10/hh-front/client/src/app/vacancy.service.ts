import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vacancy } from './models';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  BASE_URL = 'http://localhost:8000/api/vacancies/'
  constructor(private http: HttpClient, private vacancyService: VacancyService) { }

  getVacancyDetail(id:number){
    return this.http.get<Vacancy>(`${this.BASE_URL}${id}/`)
  }
}
