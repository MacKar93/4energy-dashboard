import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

interface Payment {
  id: string;
  date: Date;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  method: string;
}

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DatePipe],
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.scss',
})
export class PaymentHistoryComponent implements OnInit {
  fromDate = new FormControl('');
  toDate = new FormControl('');

  payments: Payment[] = [];
  filteredPayments: Payment[] = [];
  totalPayments: number = 0;

  ngOnInit(): void {
    // In a real app, this would come from a service
    this.loadMockPayments();
    this.filteredPayments = [...this.payments];
    this.totalPayments = this.payments.length;
  }

  applyFilters(): void {
    const fromDate = this.fromDate.value ? new Date(this.fromDate.value) : null;
    const toDate = this.toDate.value ? new Date(this.toDate.value) : null;

    if (!fromDate && !toDate) {
      this.filteredPayments = [...this.payments];
    } else {
      this.filteredPayments = this.payments.filter((payment) => {
        const paymentDate = new Date(payment.date);

        if (fromDate && toDate) {
          return paymentDate >= fromDate && paymentDate <= toDate;
        } else if (fromDate) {
          return paymentDate >= fromDate;
        } else if (toDate) {
          return paymentDate <= toDate;
        }

        return true;
      });
    }

    this.totalPayments = this.filteredPayments.length;
  }

  resetFilters(): void {
    this.fromDate.setValue('');
    this.toDate.setValue('');
    this.filteredPayments = [...this.payments];
    this.totalPayments = this.payments.length;
  }

  private loadMockPayments(): void {
    // Mock data that would normally come from an API
    this.payments = [
      {
        id: 'INV-2025-001',
        date: new Date('2025-03-15'),
        amount: 124.56,
        status: 'paid',
        method: 'Credit Card',
      },
      {
        id: 'INV-2025-002',
        date: new Date('2025-02-15'),
        amount: 118.92,
        status: 'paid',
        method: 'Bank Transfer',
      },
      {
        id: 'INV-2025-003',
        date: new Date('2025-01-15'),
        amount: 135.78,
        status: 'paid',
        method: 'Credit Card',
      },
      {
        id: 'INV-2024-012',
        date: new Date('2024-12-15'),
        amount: 142.35,
        status: 'paid',
        method: 'Credit Card',
      },
      {
        id: 'INV-2024-011',
        date: new Date('2024-11-15'),
        amount: 117.8,
        status: 'paid',
        method: 'Bank Transfer',
      },
    ];
  }
}
