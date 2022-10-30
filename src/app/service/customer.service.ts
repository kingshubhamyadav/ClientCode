import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { allWasher } from '../models/allWasher';
import { Checkout } from '../models/checkout';
import { CustomerRating } from '../models/customerRating';
import { GetUser } from '../models/getUser';
import { orderHistory } from '../models/orderHistory';
import { PromoCode } from '../models/promoCode';
import { washType } from '../models/washType';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseApiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllWashType(): Observable<washType[]> {
    return this.http.get<washType[]>(this.baseApiUrl + '/Customer/OurServices');
  }

  public getPromoCode(promo: PromoCode): Observable<string> {
    return this.http.post(this.baseApiUrl + '/Customer/CheckPromocode', promo,
      { responseType: 'text' }
    );
  }

  public checkoutInfo(checkout: Checkout): Observable<Checkout> {
    return this.http.post<Checkout>(this.baseApiUrl + '/Customer/StoreOrderDetail', checkout);
  }

  public getOrdersHistory(userId: number): Observable<orderHistory[]> {
    return this.http.get<orderHistory[]>(this.baseApiUrl + '/Customer/OrderHistory/' + userId);
  }

  public getAllWasher(): Observable<allWasher[]> {
    return this.http.get<allWasher[]>(this.baseApiUrl + '/Customer/GetWasher');
  }

  public getUser(userId: number): Observable<GetUser> {
    return this.http.get<GetUser>(this.baseApiUrl + `/Customer/view-profile/${userId}`);
  }

  updateProfile(id: any, data: any) {
    return this.http.put(`${this.baseApiUrl}/Customer/edit-profile/${id}`, data);
  }

  //post method to upload photo to DB
  uploadPhoto(data: any) {
    return this.http.post(`${this.baseApiUrl}/Customer/upload-profile-img`, data);
  }
  public getPaymentDetails(orderIdInPayment : number):Observable<orderHistory[]>{
    return this.http.get<orderHistory[]>(this.baseApiUrl+'/Customer/GetPaymentDetails?orderId='+orderIdInPayment);
  }
  public customerRating(rating: CustomerRating): Observable<CustomerRating> {
    return this.http.post<CustomerRating>(this.baseApiUrl + '/Customer/CustomerRating', rating
    );
  }
}
