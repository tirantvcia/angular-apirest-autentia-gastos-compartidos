import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  titulo: string = 'Llistat de despeses';

  constructor() { }

  ngOnInit(): void {
  }

}
