import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
  }

}
