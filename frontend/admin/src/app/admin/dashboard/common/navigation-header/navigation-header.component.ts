import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { smoothlyMenu } from '../../../../app.helpers';
import { AuthAdminService } from '../../../../shared/services/admin/auth-admin.service'

declare var jQuery:any;

@Component({
    selector: 'navigation-header',
    templateUrl: './navigation-header.component.html'
})

export class AdminNavigationHeaderComponent {
    constructor(
        private authAdminService: AuthAdminService,
        private router: Router,
    ) {
        jQuery("body").addClass("body-small pace-done")
    }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
      }

    logout() {
        this.authAdminService.removeToken();
        this.router.navigate(['/auth/login']);
    }

}