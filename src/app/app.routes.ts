import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { PaymentHistoryComponent } from './dashboard/payment-history/payment-history.component';
import { EnergyUsageComponent } from './dashboard/energy-usage/energy-usage.component';
import { SettingsComponent } from './dashboard/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardHomeComponent },
      { path: 'payment-history', component: PaymentHistoryComponent },
      { path: 'energy-usage', component: EnergyUsageComponent },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];
