import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  rotatingWords: string[] = ['مشروعك', 'فكرتك', 'تصاميمك', 'وظيفتك', 'مقابلتك'];
  rotatingWord: string = this.rotatingWords[0];
  private wordIndex: number = 0;

  searchText: string = '';
  selectedCategory: string = 'all';
  selectedCategoryLabel: string = '';
  categories = [
    { value: 'all', label: 'الكل' },
    { value: 'info', label: 'انفوجرافيك' },
    { value: 'form', label: 'النماذج' },
    { value: 'slide', label: 'الشرائح ' },
    { value: 'social', label: 'تواصل اجتماعي ' },

  ];

  tags: string[] = ['social_media#', 'logo#', 'CV#'];

 constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.wordIndex = (this.wordIndex + 1) % this.rotatingWords.length;
      this.rotatingWord = this.rotatingWords[this.wordIndex];
    }, 1000); // تتغير الكلمة كل ثانية
  }
  
  onSearchChange(): void {
    console.log('نص البحث:', this.searchText);
    console.log('الفئة المحددة:', this.selectedCategory);
    // ارسال القيم لسيرفر لاحقا يتم عبر services
  }
 

  selectCategory(category: any): void {
    this.selectedCategory = category.value;
    this.selectedCategoryLabel = category.label;
    console.log('تم اختيار الفئة:', category);
  }

}
