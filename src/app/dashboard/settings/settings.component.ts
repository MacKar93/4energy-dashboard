import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  activeTab: 'profile' | 'billing' | 'notifications' | 'security' = 'profile';
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['John'],
      lastName: ['Doe'],
      email: ['john.doe@example.com'],
      phone: ['(555) 123-4567'],
      address: ['123 Main St'],
      city: ['San Francisco'],
      state: ['CA'],
      zip: ['94105'],
    });
  }

  ngOnInit(): void {
    // Any initialization logic would go here
  }

  saveProfileSettings(): void {
    // In a real app, this would call a service to save the form data
    console.log('Profile form values:', this.profileForm.value);

    // Mock successful save with a notification
    alert('Profile updated successfully!');
  }
}
