import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  arrImages: Imageint[] = [
    { src: './poert1.png' },
    { src: './port2.png' },
    { src: './port3.png' },
    { src: './poert1.png' },
    { src: './port2.png' },
    { src: './port3.png' },
  ];

  modalimg!:string ;
  modalview:boolean = true ;  

  closemodal(e:MouseEvent , img:HTMLImageElement ){
    if (e.target != img) {
     this.modalview = true ;
      
    }
  }
}

interface Imageint {
  src: string;
}
