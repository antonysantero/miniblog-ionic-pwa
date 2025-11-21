import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false,
})
export class DetailsPage implements OnInit {
  item :any={
    title:"",
    content:"",
    image:""
  };
  Comments:any=[];


  constructor(private router:Router,private activeroute:ActivatedRoute,private httpClient:HttpClient) { 

    this.activeroute.queryParams.subscribe(params => {
      let variable1:any = this.router.getCurrentNavigation()?.extras.state;
      this.item = variable1.param1;
      console.log(variable1.param1);
      this.httpClient.get("https://www2.sio-savary.fr:10000/api/list/comments/"+this.item.id).subscribe(result =>{
        this.Comments = result;
        console.log(result)
      })
    })
    
  }

  ngOnInit() {
  }

  newcomm(){
      let navigationExtras: NavigationExtras = {
      state : {
        param1: this.item.id  
        }
    };
    this.router.navigate(['/addcomment'],navigationExtras);
  }
}
