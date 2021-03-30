import { Injectable } from '@angular/core';
import { BIG_CHART_DATA } from '../data/big-chart.data';
import { PIE_CHART_DATA } from '../data/pie-chart.data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return BIG_CHART_DATA;
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return PIE_CHART_DATA;
  }
}
