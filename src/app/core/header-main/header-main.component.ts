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
    // هون لاحقًا فيك تستخدمي خدمة ترجمة (ngx-translate)
    console.log('Language switched to:', lang);
    // مثال: window.location.href = '/en' أو reload app
  }
  constructor() { }

  ngOnInit(): void {
  }

}
