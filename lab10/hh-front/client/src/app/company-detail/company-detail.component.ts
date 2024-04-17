import { Component } from '@angular/core';
import { CompaniesService } from '../company.service';
import { Company, Vacancy } from '../models';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {
  company!:Company;
  vacancies!: Vacancy[];

  constructor(private companyService: CompaniesService, private route: ActivatedRoute){}

  ngOnInit(){
    const companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompanyDetail(companyId)
    .subscribe(company =>{
      this.company = company;
    })
    this.companyService.getCompanyVacancyList(companyId)
    .subscribe(vacancies =>{
      this.vacancies = vacancies;
    })
  }

}
