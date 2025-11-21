import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {


  Articles:any=[];

  constructor(private router:Router,private httpClient:HttpClient) {

    this.httpClient.get("https://www2.sio-savary.fr:10000/api/list/articles").subscribe(result =>{
      this.Articles = result;
      console.log(result)
    })

  }

  MonClick(item:any){
    //alert("Bonjour");

    let navigationExtras: NavigationExtras = {
      state : {
        param1: item  
        }
    };

    this.router.navigate(['/details'],navigationExtras);
  }

  newart(){
    this.router.navigate(['/addarticle']);
  }

}
