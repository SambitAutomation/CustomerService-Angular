import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }

  public findAllCustomers(){
    return this.http.get(`http://localhost:8080/cust/allCst`);
  }

  public createCustomer(Customer:any){
    return this.http.post('http://localhost:8080/cust/createCst', Customer)
  }

  public findCustomerById(cid:any){
    return this.http.get(`http://localhost:8080/cust/cst/`+cid);
  }

  public updateCustomer(cid:number, customer:any ){
    return this.http.put(`http://localhost:8080/cust/updateCst/`+cid,customer);
  }

  public deleteCustomerById(cid:number){
    return this.http.delete(`http://localhost:8080/cust/deleteCst/`+cid);
  }
}
