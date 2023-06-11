import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-store-helper',
  templateUrl: './store-helper.component.html',
  styleUrls: ['./store-helper.component.css'],
})
export class StoreHelperComponent implements OnInit {
  stores: any[] = [];
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient, private storeService: StoreService) {}

  ngOnInit(): void {
    this.getAllStores();
  }

  getAllStores(): void {
    this.http.get<any[]>(`${this.apiUrl}/store/`).subscribe(
      (response) => {
        this.stores = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
