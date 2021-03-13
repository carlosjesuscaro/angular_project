import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homew2',
  templateUrl: './homew2.component.html',
  styleUrls: ['./homew2.component.css']
})
export class Homew2Component implements OnInit {

  constructor() { }
  showParagraph = false;
  log = [];

  ngOnInit(): void {
  }

  onToggle(){
    this.showParagraph = !this.showParagraph;
    this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
