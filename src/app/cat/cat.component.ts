import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  private name;

  ngOnInit() {
      this.name = this.route.snapshot.params.name
  }
}
