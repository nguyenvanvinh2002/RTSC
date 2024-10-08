import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  Categories:any
  constructor(private app:AppService){}
  ngOnInit(): void {
    setTimeout(() => {
      Swal.fire({
        title: '<p class="header-thongbao">Thông báo</p>',
        html: `
        <div class="zalo" ><span>Nhóm Báo Lỗi Mua Bán</span><a href="https://zalo.me/g/amlspn937">Tại đây</a></div>
         <div class="facebook"><span>FaceBook Admin</span><a href="https://www.facebook.com/vinhss.quangg">Tại đây</a></div>
        
         
        `,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInDown
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutUp
            animate__faster
          `
        }
      });
    }, 1000);
   this.app.getcategories().subscribe(res=>{
    this.Categories =res
   })
  }

}
