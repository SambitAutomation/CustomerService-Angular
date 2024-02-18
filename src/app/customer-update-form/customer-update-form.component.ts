import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-update-form',
  templateUrl: './customer-update-form.component.html',
  styleUrl: './customer-update-form.component.css'
})
export class CustomerUpdateFormComponent implements OnInit{

  customerId:any;
  customer:any;
  dataUpdated:any=false;

  constructor(private cstSvc:CustomerServiceService, private route:ActivatedRoute,
    private rout:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(param =>{
      this.customerId = param.get('cid');
    })
    this.getCustomerById();
    if(this.dataUpdated){
      this.rout.navigate(['/']);
    }
  }

  // getParam(){
  //   this.route.paramMap.subscribe(param =>{
  //     this.customerId = param.get('cid');
  //   })
  // }

  getCustomerById(){
    this.cstSvc.findCustomerById(this.customerId).subscribe(data => {
      this.customer = data;
      console.log(this.customer);
    })
  }

  updateCustomer(customer:any){
    this.cstSvc.updateCustomer(this.customerId,customer).subscribe(data => {
      console.log(`Customer`);
      this.dataUpdated = true;
      this.rout.navigate(['/']);
    })
  }
}
