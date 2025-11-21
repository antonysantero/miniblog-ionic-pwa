import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.page.html',
  styleUrls: ['./addcomment.page.scss'],
  standalone: false,
})
export class AddcommentPage implements OnInit {

  item :any={
    pseudo:"",
    comm:"",
    dateajout:""
  };

  id:any=0;

  constructor(private router:Router,private activeroute:ActivatedRoute,private httpClient:HttpClient,private navCtrl: NavController) { 
     this.activeroute.queryParams.subscribe(params => {
      let variable1:any = this.router.getCurrentNavigation()?.extras.state;
      this.id = variable1.param1;
      console.log(this.id);
    })

  }

  ngOnInit() {
  }

  logForm(){
    this.item.dateajout = new Date();
    console.log(this.item);
    this.httpClient.post("https://www2.sio-savary.fr:10000/api/newcomment/"+this.id,this.item).subscribe(result =>{
      console.log(result);
      this.navCtrl.back();
    })

  }
}
