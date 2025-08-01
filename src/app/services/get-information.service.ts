import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetInformationService {

   private apiUrl = 'https://api.namoothaj.com/api/v1.0/products/filters/popular/customers';
    private baseUrl = 'https://api.namoothaj.com/api/v1.0/products/customers';

  constructor(private http: HttpClient) {}


getAllProducts(pageIndex: number = 1, pageSize: number = 100): Observable<any> {
  const url = `https://api.namoothaj.com/api/v1.0/products/customers`;
  const params = new HttpParams()
    .set('PageIndex', pageIndex.toString())
    .set('PageSize', pageSize.toString());

  return this.http.get<any>(url, { params });
}

  getPopularFilters(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }
    getProductsBySubCategory(
    subId: string,
    pageIndex: number = 1,
    pageSize: number = 18
  ): Observable<any> {
    const url = `${this.baseUrl}/sub:${subId}`;
    const params = new HttpParams()
      .set('PageIndex', pageIndex.toString())
      .set('PageSize', pageSize.toString());

    return this.http.get<any>(url, { params });
  }
  getProductsByCategory(category: string, pageIndex: number = 1, pageSize: number = 18): Observable<any> {
  const url = `${this.baseUrl}/${category}`;
  const params = new HttpParams()
    .set('PageIndex', pageIndex.toString())
    .set('PageSize', pageSize.toString());

  return this.http.get<any>(url, { params });
}

}
