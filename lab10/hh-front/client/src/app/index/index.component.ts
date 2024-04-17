import { Component } from '@angular/core';
import { CompaniesService } from '../company.service';
import { Company } from '../models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  companyList!: Company[];


  constructor(private companyService: CompaniesService){}

  ngOnInit(){
    this.companyService.getCompanyList()
    .subscribe(companyList => {
      console.log(companyList);
      
      this.companyList = companyList;
    })
  }
  
}
