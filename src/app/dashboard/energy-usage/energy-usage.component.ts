import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

interface UsageBreakdown {
  category: string;
  usage: number;
  percentage: number;
}

@Component({
  selector: 'app-energy-usage',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './energy-usage.component.html',
  styleUrl: './energy-usage.component.scss',
})
export class EnergyUsageComponent implements OnInit {
  // Make Math available in the template
  Math = Math;

  // Period selector
  selectedPeriod: 'day' | 'week' | 'month' | 'year' = 'month';

  // Energy usage statistics
  currentUsage: number = 0;
  usageChange: number = 0;
  peakUsage: number = 0;
  peakTime: Date = new Date();
  peakDuration: number = 0;
  estimatedCost: number = 0;
  totalUsage: number = 0;

  // Usage breakdown
  usageBreakdown: UsageBreakdown[] = [];

  ngOnInit(): void {
    // Load data based on default period (month)
    this.loadUsageData(this.selectedPeriod);
  }

  setPeriod(period: 'day' | 'week' | 'month' | 'year'): void {
    this.selectedPeriod = period;
    this.loadUsageData(period);
  }

  private loadUsageData(period: 'day' | 'week' | 'month' | 'year'): void {
    // In a real app, this would fetch data from a service
    // For now, we'll use mock data

    switch (period) {
      case 'day':
        this.currentUsage = 27.5;
        this.usageChange = -3.2;
        this.peakUsage = 3.4;
        this.peakTime = new Date(2025, 3, 2, 18, 30);
        this.peakDuration = 45;
        this.estimatedCost = 3.3;
        break;
      case 'week':
        this.currentUsage = 182.3;
        this.usageChange = 2.1;
        this.peakUsage = 5.2;
        this.peakTime = new Date(2025, 3, 1, 19, 15);
        this.peakDuration = 60;
        this.estimatedCost = 21.88;
        break;
      case 'month':
        this.currentUsage = 745.6;
        this.usageChange = -1.8;
        this.peakUsage = 5.9;
        this.peakTime = new Date(2025, 3, 1, 19, 15);
        this.peakDuration = 75;
        this.estimatedCost = 89.47;
        break;
      case 'year':
        this.currentUsage = 8937.2;
        this.usageChange = 5.4;
        this.peakUsage = 7.8;
        this.peakTime = new Date(2025, 0, 15, 18, 45);
        this.peakDuration = 90;
        this.estimatedCost = 1072.46;
        break;
    }

    this.loadUsageBreakdown(period);
  }

  private loadUsageBreakdown(period: 'day' | 'week' | 'month' | 'year'): void {
    // Mock breakdown data
    if (period === 'month') {
      this.usageBreakdown = [
        { category: 'Heating & Cooling', usage: 298.2, percentage: 40 },
        { category: 'Appliances', usage: 149.1, percentage: 20 },
        { category: 'Water Heating', usage: 111.8, percentage: 15 },
        { category: 'Lighting', usage: 74.6, percentage: 10 },
        { category: 'Electronics', usage: 59.6, percentage: 8 },
        { category: 'Other', usage: 52.3, percentage: 7 },
      ];
    } else if (period === 'day') {
      this.usageBreakdown = [
        { category: 'Heating & Cooling', usage: 11.0, percentage: 40 },
        { category: 'Appliances', usage: 5.5, percentage: 20 },
        { category: 'Water Heating', usage: 4.1, percentage: 15 },
        { category: 'Lighting', usage: 2.8, percentage: 10 },
        { category: 'Electronics', usage: 2.2, percentage: 8 },
        { category: 'Other', usage: 1.9, percentage: 7 },
      ];
    } else if (period === 'week') {
      this.usageBreakdown = [
        { category: 'Heating & Cooling', usage: 73.0, percentage: 40 },
        { category: 'Appliances', usage: 36.5, percentage: 20 },
        { category: 'Water Heating', usage: 27.3, percentage: 15 },
        { category: 'Lighting', usage: 18.2, percentage: 10 },
        { category: 'Electronics', usage: 14.6, percentage: 8 },
        { category: 'Other', usage: 12.7, percentage: 7 },
      ];
    } else {
      this.usageBreakdown = [
        { category: 'Heating & Cooling', usage: 3574.9, percentage: 40 },
        { category: 'Appliances', usage: 1787.4, percentage: 20 },
        { category: 'Water Heating', usage: 1340.6, percentage: 15 },
        { category: 'Lighting', usage: 893.7, percentage: 10 },
        { category: 'Electronics', usage: 715.0, percentage: 8 },
        { category: 'Other', usage: 625.6, percentage: 7 },
      ];
    }

    this.totalUsage = Number(
      this.usageBreakdown.reduce((sum, item) => sum + item.usage, 0).toFixed(1)
    );
  }
}
