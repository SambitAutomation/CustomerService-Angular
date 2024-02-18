import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit{


  constructor(private cstSvc:CustomerServiceService, private router:Router){}

  ngOnInit(): void {
    
  }
  createCustomer(Customer:any){
    this.cstSvc.createCustomer(Customer).subscribe(data => {
      this.router.navigate(['/']);
    })
  }
}
