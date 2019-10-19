import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthAdminGuardService } from '../shared/guards/auth-admin-guard.service'

import {
    AuthComponent,
    AdminLoginComponent
} from './auth/index'

import * as dashboard from './dashboard/index'

const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: AdminLoginComponent,
            },
        ]
    },
    {
        path:'',
        component: dashboard.AdminDashboardComponent,
        canActivate: [AuthAdminGuardService],
        children: [
            {
                path: 'home',
                component: dashboard.AdminHomeComponent
            },
            {
                path: 'portfolio',
                component: dashboard.AdminPortfolioComponent
            },
            {
                path: 'property/:id',
                component: dashboard.AdminPropertyComponent
            },
            {
                path: 'invest',
                component: dashboard.AdminInvestComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }