import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

export const routes: Routes = [
    {path: '', redirectTo: 'company', pathMatch:"full"},
    {path: 'company', component:IndexComponent},
    {path:'company/:id', component:CompanyDetailComponent},
];
