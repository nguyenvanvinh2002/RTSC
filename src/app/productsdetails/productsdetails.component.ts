import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { interval, Subscription, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrl: './productsdetails.component.css'
})
export class ProductsdetailsComponent implements OnInit {
  constructor(private app:AppService,private activeRouter:ActivatedRoute,private router:Router){}
  private intervalId: any;
  content:any
  stk:string="0334293670"
  id:any
  price:Number=0

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(query => {
      this.id = query.get("id");})
      this.content = `Code${this.id}`
      this.app.productsdetails(this.id).subscribe(res=>{
          this.price =res.price;   
      })
  }
  CopyContent() {
    navigator.clipboard.writeText(this.content).then(() => {
      Swal.fire({
        title: "Thành Công",
        text: "Copy Thành Công",
        icon: "success"
    });
    });
  }
  CopySTK() {
    navigator.clipboard.writeText((this.stk)).then(() => {
      Swal.fire({
        title: "Thành Công",
        text: "Copy Thành Công",
        icon: "success"
    });
    });
  }
  checkbank(){
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
      overlay.style.display = 'flex';
  }

    this.app.checkbank().subscribe(res=>{
      const transactions = res.transactions;
      const transactionFound = transactions.some((transaction:any) => 
        transaction.transaction_content == this.content && 
        transaction.amount_in == this.price
    );
    if (transactionFound) {
      if (overlay) {
        overlay.style.display = 'none'; 
    }
      Swal.fire({
          title: "Thành Công",
          text: "Giao Dịch Thành Công",
          icon: "success"
      });
      this.app.getcode(this.id).subscribe(res => {
        sessionStorage.setItem('Return Code', JSON.stringify(res));
    });
    
      setTimeout(() => {
       
        this.router.navigate([`/opencode`]);
      }, 1000);
  } else {
    if (overlay) {
      overlay.style.display = 'none'; 
  }
      Swal.fire({
          title: "Lỗi",
          text: "Không Tìm Thấy Giao Dịch Phù Hợp",
          icon: "error"
      });
    }
    })
   
  }
}
