import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import {ThemeService} from '../../service/theme.service';
import {Option} from '../../models/option.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // options$: Observable<Array<Option>> = this.themeService.getThemeOptions();
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    // private themeService:ThemeService
  ) { }

  ngOnInit(): void {
    // this.themeService.setTheme("indigo-pink");
  }


  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
