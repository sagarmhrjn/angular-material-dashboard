import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BigChart } from 'src/app/shared/models/big-chart.interface';
import { PeriodicElement } from 'src/app/shared/models/periodic-element.interface';
import { PieChart } from 'src/app/shared/models/pie-chart.interface';
import { PERIODIC_ELEMENT_DATA } from '../shared/data/periodic-element.data';
import { DashboardService } from '../shared/services/dashboard.service';

const ELEMENT_DATA: PeriodicElement[] = PERIODIC_ELEMENT_DATA;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart!: BigChart[];
  cards!: number[];
  pieChart!: PieChart[];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService) { }


  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
