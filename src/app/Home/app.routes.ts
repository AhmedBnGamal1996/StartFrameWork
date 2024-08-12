import { Routes } from '@angular/router';
import { HomeMainComponent } from '../home-main/home-main.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { AboutComponent } from '../about/about.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const routes: Routes = [
    {path:"" , redirectTo:"home" , pathMatch:"full"},
    {path:"home" , component:HomeMainComponent} ,
    {path:"about" , component:AboutComponent} ,
    {path:"portfolio" , component:PortfolioComponent},
    {path:"contact" , component:ContactSectionComponent} ,
    {path:"**" ,  component:NotFoundComponent} ,

];
