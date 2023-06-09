import { Component, OnInit } from '@angular/core';
import { Publisher } from 'src/app/models/publisher/publisher-model';
import { PublisherDashboardService } from '../../services/publisher/publisher-dashboard.service';

@Component({
  selector: 'app-publisher-dashboard-page',
  templateUrl: './publisher-dashboard-page.component.html',
  styleUrls: ['./publisher-dashboard-page.component.css']
})
export class PublisherDashboardPageComponent implements OnInit {

  publishers: Publisher[] = []

  constructor(
    private publisherService: PublisherDashboardService
  ) { }

  ngOnInit(): void {
    this.getPublishers();
  }

  getPublishers() {
    this.publisherService.getAllPublishers()
      .subscribe((result: Publisher[]) => {
        this.publishers = result;
      });
  }

}
