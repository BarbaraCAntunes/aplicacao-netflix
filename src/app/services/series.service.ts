import { Injectable } from '@angular/core';

export interface Serie {
  id: string;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private series: Serie[] = [
    {
      id: 'friends',
      name: 'Friends',
      description: 'Comedy series about six friends living in New York City.'
    },
    {
      id: 'modernfamily',
      name: 'Modern Family',
      description: 'Comedy series about a diverse family living in Los Angeles.'
    },
    {
      id: 'harrypotter',
      name: 'Harry Potter',
      description: 'Fantasy film series about a young wizard and his friends.'
    }
  ];

  private selectedSeriesId: string = '';

  constructor() {}

  getSeries() {
    return this.series;
  }

  getSelectedSeries() {
    return this.series.find((serie) => serie.id === this.selectedSeriesId);
  }

  setSelectedSeries(seriesId: string) {
    this.selectedSeriesId = seriesId;
  }

  getSerieById(id: string) {
    return this.series.find((serie) => serie.id === id);
  }
}
