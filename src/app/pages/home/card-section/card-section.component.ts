import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { TemplateCard } from 'src/app/interfaces/template-card.interface';
import { GetInformationService } from 'src/app/services/get-information.service';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit {
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;

  categories: Category[] = [];
  selectedCategory: string = '';    
  selectedTab: 'new' | 'featured' | '' = ''; 

  filteredCards: TemplateCard[] = [];
  loading: boolean = false;

  constructor(private getService: GetInformationService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  // جلب التصنيفات مع استبعاد "New" و "Featured"
  getCategories(): void {
    this.getService.getPopularFilters().subscribe({
      next: (res: any) => {
        this.categories = res.items.filter(
          (cat: Category) => cat.category !== 'New' && cat.category !== 'Featured'
        );

        if (this.categories.length > 0) {
          this.filterByCategory(this.categories[0]);
        }
      },
      error: (err: any) => {
        console.error('فشل في تحميل التصنيفات:', err);
      }
    });
  }

  // عند اختيار تصنيف
  filterByCategory(category: Category): void {
    this.selectedCategory = category.code;
    this.selectedTab = '';    // إزالة التاب المحدد (جديد / مميز)
    this.loading = true;
    this.filteredCards = [];

    if (category.category === 'ByType') {
      // التصنيفات الفرعية (sub:ID)
      const subId = category.code.split(':')[1];
      this.getService.getProductsBySubCategory(subId).subscribe({
        next: (res: any) => {
          const items = res.items || [];
          // هنا نعرض كل المنتجات بدون فلترة جديد أو مميز
          this.filteredCards = this.mapProducts(items, category.titleInArabic, false);
          this.loading = false;
        },
        error: (err: any) => {
          console.error('خطأ في جلب القوالب:', err);
          this.loading = false;
        }
      });
    } else {
      // اذا كان يوجد  حالات أخرى للتصنيف نقدر نضيفها هنا
      this.loading = false;
    }
  }

  // عند اختيار التاب جديد أو مميز
  selectTab(tab: 'new' | 'featured'): void {
    this.selectedTab = tab;
    this.selectedCategory = '';   // إزالة التصنيف المحدد عند اختيار التاب
    this.loading = true;
    this.filteredCards = [];

    // جلب كل المنتجات من API
    this.getService.getAllProducts().subscribe({
      next: (res: any) => {
        const items = res.items || [];
        // نعرض فقط الجديد أو المميز حسب التاب
        this.filteredCards = this.mapProducts(items, '', true);
        this.loading = false;
      },
      error: (err: any) => {
        console.error('فشل في جلب كل القوالب:', err);
        this.loading = false;
      }
    });
  }

  /**
   * تحويل البيانات إلى TemplateCard[]
   * @param items عناصر المنتجات
   * @param categoryName اسم التصنيف (اذا موجود)
   * @param filterByTab هل نطبق فلترة حسب التاب (جديد/مميز) أو لا
   */
  private mapProducts(items: any[], categoryName: string = '', filterByTab: boolean = false): TemplateCard[] {
    return items
      .filter(item => {
        if (!filterByTab) return true; //عرض المنتجات كلها اذا ما في فلترة
        // فلترة حسب التاب المختار
        if (this.selectedTab === 'new') return item.isNew;
        if (this.selectedTab === 'featured') return item.isFeatured;
        return true;
      })
      .map(item => ({
        image: item.coverImage?.downloadLink || 'assets/images/default.jpg',
        title: item.title,
        logo: item.designer?.profilePicture?.downloadLink || 'assets/images/avatar.png',
        category: categoryName || item.category?.titleInArabic || 'غير محدد',
        type: item.isNew ? 'new' : item.isFeatured ? 'featured' : '',
        paid: !item.isFree
      }));
  }


   scrollSlider(direction: 'left' | 'right'): void {
    const scrollAmount = 150;
    if (this.sliderTrack) {
      this.sliderTrack.nativeElement.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}


































