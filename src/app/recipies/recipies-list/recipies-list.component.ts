
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe' , ' This is Simply a Test', 'https://s-media-cache-ak0.pinimg.com/originals/20/dc/11/20dc1144bb48449a92445a21a4cdaff4.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
