import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.page.html',
  styleUrls: ['./addarticle.page.scss'],
    standalone: false,
})
export class AddarticlePage implements OnInit {
  item :any={
    title:"",
    content:"",
    image:""
  };

  constructor(private httpClient:HttpClient,private router:Router) { }

  ngOnInit() {
  }

  logForm(){
    console.log(this.item);
    this.httpClient.post("https://www2.sio-savary.fr:10000/api/newarticle",this.item).subscribe(result =>{
      console.log(result);
      this.router.navigate(['/home']);
    })

  }

}
