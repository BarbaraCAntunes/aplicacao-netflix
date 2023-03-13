import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  series: any[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.series = this.seriesService.getSeries();
  }

  selectSeries(id: string) {
    this.seriesService.setSelectedSeries(id);
  }
}
