import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  isclick:boolean = false ; 
  i : string   = ""
  Imgsrc : string  = "./assets" + this.i
  open(img:string){
  this.isclick == true ; 
   img = this.i ; 
  }
  close(){
  this.isclick == false ;   
  }

}
