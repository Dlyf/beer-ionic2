import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeerService } from '../service/beer.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  // private selectedItem: any;
  // private icons = [
  //   'flask',
  //   'wifi',
  //   'beer',
  //   'football',
  //   'basketball',
  //   'paper-plane',
  //   'american-football',
  //   'boat',
  //   'bluetooth',
  //   'build'
  // ];
  beers:Object[];
  // public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private beerService : BeerService) {
  }

  ngOnInit() {
    this.getBeers();
  }
  getBeers():void {
    this.beerService.getBeers()
    .subscribe(data=> this.beers = Object.values(data));
  }

  delBeer(index) {
    this.beers.splice(index,1);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
