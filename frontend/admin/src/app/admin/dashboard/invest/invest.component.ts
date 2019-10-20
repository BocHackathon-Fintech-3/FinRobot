import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HomeService } from '../../../shared/services/admin/home.service'

@Component({
    selector: 'app-admin-home',
    templateUrl: './invest.component.html'
  })

  export class AdminInvestComponent implements OnInit {
      properties = []
      investAmount = 500;
      proceed = false;
    constructor(
        private homeService: HomeService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.homeService.getProperties().subscribe((data) => {
            this.properties = data.properties
            this.calculate()
        })
    }

    calculate() {
        let totalPortfolio = 0;
        for(let property of this.properties) {
            totalPortfolio += Number(property.totalAmount)
        }
        for(let property of this.properties) {
            let propertyInvestPercentage = property.totalAmount / totalPortfolio
            property['expectedRevenue'] = ( propertyInvestPercentage * (property.estimationRent * (this.investAmount / property.totalAmount)) * 12).toFixed(2)
            property['roi'] = (((propertyInvestPercentage *(property.estimationRent * (this.investAmount / property.totalAmount)) * 12) / this.investAmount) * 100).toFixed(2)
        }
    }


    submit() {
        this.proceed = true;
        this.homeService.addFunds({
            amount: this.investAmount
        }).subscribe((data: any) => {
            this.router.navigateByUrl('receipt/' + data.userInvestmentGroupId)
            this.proceed = false;

        }, (err) => {
            this.proceed = false;
        })
    }

}