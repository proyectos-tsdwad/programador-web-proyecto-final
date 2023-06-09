import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store-helper',
  templateUrl: './store-helper.component.html',
  styleUrls: ['./store-helper.component.css'],
})
export class StoreHelperComponent implements OnInit {
  stores: any[] = []; // Array para almacenar las tiendas

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getStores();
  }

  getStores(): void {
    this.http.get<any[]>('/api/v1/store/').subscribe(
      (response) => {
        this.stores = response; // Almacena la lista de tiendas en el array
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
