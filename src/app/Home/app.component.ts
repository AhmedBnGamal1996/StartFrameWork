import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContactComponent } from '../contact/contact.component';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { AboutComponent } from '../about/about.component';
import { ContactSectionComponent } from "../contact-section/contact-section.component";
import { HomeMainComponent } from "../home-main/home-main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ContactComponent, PortfolioComponent, AboutComponent, ContactSectionComponent, HomeMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App1';
}
