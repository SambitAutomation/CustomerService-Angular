import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{

  customerList:any;
  constructor(private cstService:CustomerServiceService, private router:Router){}

  ngOnInit(): void {
    this.findAllCustomer();
  }

  findAllCustomer(){
    this.cstService.findAllCustomers().subscribe(data =>  { 
      this.customerList = data;
    })
  }

  deleteCustomerById(cid:any){
    this.cstService.deleteCustomerById(cid).subscribe(data => {
      this.reloadComponent();
    })
  }

  reloadComponent() {
    debugger;
    // Get the current route
    const currentRoute = this.router.url;

    // Navigate to the same route to reload the component
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentRoute]);
    });
  }
}
