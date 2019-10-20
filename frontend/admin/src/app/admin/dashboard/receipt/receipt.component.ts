import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthAdminService } from '../../../shared/services/admin/auth-admin.service'
import { HomeService } from '../../../shared/services/admin/home.service'

@Component({
    selector: 'app-admin-receipt',
    templateUrl: './receipt.component.html'
  })

  export class AdminReceiptComponent implements OnInit {
    public id = null;
    public hash = null;
    constructor(
        private activatedRoute: ActivatedRoute,
        private homeService: HomeService,
        private router: Router
    ) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.homeService.getHash(params['id']).subscribe((data) => {
                this.hash = data.hash
            })
        });
    }

    ngOnInit() {
    }
}

