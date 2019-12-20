import { Component, OnInit } from '@angular/core';
import { HerosService , Hero} from '../../servicio/heros.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros:Hero[] = [];
  constructor( private _herosService:HerosService , private  router:Router) {
    
  console.log("uno");

   }

  ngOnInit() {
    console.log("dos");
    this.heros = this._herosService.getHero();

    console.log(this.heros);

  }
  
  verHero ( idx:number ){
    console.log(idx);
    this.router.navigate (['/hero',idx]);

  }

}
