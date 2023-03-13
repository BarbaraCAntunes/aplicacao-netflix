import { Component, OnInit } from '@angular/core';
import { SeriesService, Serie } from '../../services/series.service';

@Component({
  selector: 'app-card-serie-friends',
  templateUrl: './card-serie-friends.component.html',
  styleUrls: ['./card-serie-friends.component.scss']
})
export class CardSerieFriendsComponent implements OnInit {
  serie: Serie | undefined;

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    const id: string | null = localStorage.getItem('selectedSeriesId');
    if (id !== null) {
      this.serie = this.seriesService.getSerieById(id);
    }
  }
}
