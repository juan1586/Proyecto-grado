import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear: any;
  nameProject: string = "Mi Amigo Pet";

  constructor() { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

}
