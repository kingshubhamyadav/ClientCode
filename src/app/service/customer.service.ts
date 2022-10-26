import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Checkout } from '../models/checkout';
import { orderHistory } from '../models/orderHistory';
import { PromoCode } from '../models/promoCode';
import { washType } from '../models/washType';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseApiUrl:string=environment.apiUrl;

  constructor(private http:HttpClient) { }

  public getAllWashType():Observable<washType[]>{
    return this.http.get<washType[]>(this.baseApiUrl+'/Customer/OurServices');
  }
  public getPromoCode(promo:PromoCode): Observable<string>{
    return this.http.post(this.baseApiUrl+'/Customer/CheckPromocode',promo,
    {responseType: 'text'}
    );
  }
  public checkoutInfo(checkout:Checkout): Observable<Checkout>{
    return this.http.post<Checkout>(this.baseApiUrl+'/Customer/StoreOrderDetail',checkout,
    );
  }

  public getOrdersHistory():Observable<orderHistory[]>{
    return this.http.get<orderHistory[]>(this.baseApiUrl+'/Customer/OrderHistory?userId=0');
  }
}
