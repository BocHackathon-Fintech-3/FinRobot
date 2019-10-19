import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '../../../../../../node_modules/jquery-slimscroll/jquery.slimscroll.js'
declare var jQuery:any;

@Component({
    selector: 'navigation-sidebar',
    templateUrl: './navigation-sidebar.component.html'
})

export class AdminNavigationSidebarComponent {
    fullName;
    constructor(private router: Router) {
        this.fullName = JSON.parse(localStorage.getItem('admin')).fullName;
    }
    
    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();
    
        if (jQuery("body").hasClass('fixed-sidebar')) {
          jQuery('.sidebar-collapse').slimscroll({
            height: '100%'
          })
        }
    }
    
    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }
}