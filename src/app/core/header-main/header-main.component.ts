import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {
 currentLang = 'ar';

  changeLanguage(lang: string): void {
    this.currentLang = lang;
    
    console.log('Language switched to:', lang);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
