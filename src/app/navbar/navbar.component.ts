import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink , RouterLinkActive  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isScrolled:boolean =false ;
@HostListener('window:scroll',[])
onWindowScroll(){
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
  this.isScrolled = scrollTop > 30; 
}

}
