import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  BASE_URL = 'http://localhost:8000/api/companies/'
  constructor(private http: HttpClient) { }

  getCompanyList():Observable<Company[]>{
    return this.http.get<Company[]>(this.BASE_URL);
  }

  getCompanyDetail(company_id:number): Observable<Company>{
    return this.http.get<Company>(`${this.BASE_URL}${company_id}/`);
  }

  getCompanyVacancyList(company_id:number):Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(this.BASE_URL + company_id + '/vacancies/');
  }

}