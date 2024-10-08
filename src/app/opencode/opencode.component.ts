import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-opencode',
  templateUrl: './opencode.component.html',
  styleUrl: './opencode.component.css'
})
export class OpencodeComponent implements OnInit {
id:any
price:Number =0
gifcode:any
magd:any

  constructor(private app:AppService,private  activeRouter:ActivatedRoute){}
  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(query => {
      this.id = query.get("id")
      this.gifcode = JSON.parse(sessionStorage.getItem('Return Code') || '{}');


      
  })
 
}
CopyGifCode(){
  navigator.clipboard.writeText((this.gifcode.code)).then(() => {
    Swal.fire({
      title: "Thành Công",
      text: "Copy Thành Công",
      icon: "success"
  });
})
}
}
