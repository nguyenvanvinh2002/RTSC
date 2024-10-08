import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  categories:any
  lstproducts:any
  constructor(private app:AppService,private activeRouter: ActivatedRoute){}
  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(query => {
      this.categories = query.get("name");
  })
  this.app.getproductsbycategories(this.categories).subscribe(res=>{
    this.lstproducts = res
  
  })
}

}
