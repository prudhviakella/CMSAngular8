import { Component, ViewChild, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import {VERSION} from '@angular/material';
import {NavItem} from '../models/navitem';
import {NavService} from '../service/nav.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showToggle: string;
  mode: string;
  openSidenav:boolean;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'HR Activites',
      route: 'hr',
      children: [
        {
          displayName: 'Temporary Employee',
          route: 'tmpemployee',
          children: [
            {
              displayName: 'Create',
              route: 'mainlayout/hr/tmpemployee/createrequest',
            },
            {
              displayName: 'Map to Existing',
              route: 'mainlayout/hr/tmpemployee/maptmpemployee',
            },
            {
              displayName: 'Status',
              route: 'mainlayout/hr/tmpemployee/viewtmpempstatus',
            },
          ]
        }
      ]
    }
  ];
  private screenWidth$ = new BehaviorSubject<number>
    (window.innerWidth);
  @ViewChild('sidenav',{static: false}) matSidenav: MatSidenav;
  constructor() { }
  ngOnInit() {
    this.getScreenWidth().subscribe(width => {
       if (width < 640) {
        this.showToggle = 'show';
        this.mode = 'over';
        this.openSidenav = false;
      }
      else if (width > 640) {
        this.showToggle = 'hide';
        this.mode = 'side';
        this.openSidenav = true;
      }
    });
    console.log("relaoded Nav")
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }

}
