import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthAdminService } from '../../../shared/services/admin/auth-admin.service'

@Component({
    selector: 'app-admin-portfolio',
    templateUrl: './portfolio.component.html'
  })

  export class AdminPortfolioComponent implements OnInit {

    constructor() {}

    ngOnInit() {
    }
}
