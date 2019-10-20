import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HomeService } from '../../../shared/services/admin/home.service'

@Component({
    selector: 'app-admin-home',
    templateUrl: './home.component.html'
  })

  export class AdminHomeComponent implements OnInit {
    fullName = null
    totalInvest = null;
    totalInvestPercentage = null
    totalPropertyValue = null
    totalExpectedRevenue = null
    totalRentRevenue = null
    totalGrossProfit = null
    totalNetProfit = null
    totalRoi = null
    properties = [];
    userInvestmentGroups = []
    constructor(
        private homeService: HomeService
    ) {}

    ngOnInit() {
        this.homeService.get().subscribe((data) => {
            this.fullName = `${data.firstName} ${data.lastName}`
            this.totalInvest = data.totalInvest
            this.totalInvestPercentage = data.totalInvestPercentage
            this.totalPropertyValue = data.totalPropertyValue
            this.totalExpectedRevenue = data.totalExpectedRevenue
            this.totalRentRevenue = data.totalRentRevenue
            this.totalGrossProfit = data.totalGrossProfit
            this.totalNetProfit = data.totalNetProfit
            this.totalRoi =  data.totalRoi
            this.properties = data.properties
            this.userInvestmentGroups = data.userInvestmentGroups
        })  
    }
}