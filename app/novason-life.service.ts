import { Customer } from './class/customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NovasonLifeService {

  public _customer: string = "http://localhost:8080/customer/";
  constructor(private _http: HttpClient) { }

  getCustomers() {
    return this._http.get(this._customer);
  }

  postCustomer(customer: Customer) {
    return this._http.post(this._customer, customer);
  }

  getSignInCustomer(idNumber: string, password: string) {
    return this._http.get(this._customer + idNumber +"/"+ password)
  }

  customerSetSession(customer: any) {
    delete customer.password;
    return sessionStorage.setItem("user", JSON.stringify(customer));
  }

  customerGetSession() {
    return JSON.parse(sessionStorage.getItem("user"));
  }

  customerRemoveSession() {
    return sessionStorage.removeItem("user");
  }
}
