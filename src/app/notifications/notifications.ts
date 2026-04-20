import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  standalone: false,
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {

  emailNotifications = false;
  isTwoFactorEnabled  = true;
  isMoreActivityEnabled = false;
  newsUpdates = false;
  tipsTutorials = false;
  offersPromotions = false;
  moreActivity = false;
  allReminders = false;
  activityOnly = false;
  importantReminders = false;

  constructor() {}

  // Handlers for toggles
  toggleEmailNotifications() {
    console.log('Email Notifications:', this.emailNotifications);
    // Add API call or service update here
  }

  toggleTwoFactor() {
    if(this.isTwoFactorEnabled == true) {
      this.isTwoFactorEnabled = false;
    } else {
      this.isTwoFactorEnabled = true;
    }
    console.log('Two Factor Enabled:', this.isTwoFactorEnabled);
    // Add API call or service update here
  }

  toggleNewsUpdates() {
    console.log('News Updates:', this.newsUpdates);
  }

  toggleTipsTutorials() {
    console.log('Tips & Tutorials:', this.tipsTutorials);
  }

  toggleOffersPromotions() {
    console.log('Offers & Promotions:', this.offersPromotions);
  }

  toggleMoreActivity() {
    console.log('More Activity:', this.moreActivity);
  }

  toggleAllReminders() {
    console.log('All Reminders & Activity:', this.allReminders);
  }

  toggleActivityOnly() {
    console.log('Activity Only:', this.activityOnly);
  }

  toggleImportantReminders() {
    console.log('Important Reminders Only:', this.importantReminders);
  }

  deactivateAccount() {
    console.log('Deactivate Account clicked');
    // Add logic to deactivate account
  }

  deleteAccount() {
    console.log('Delete Account clicked');
    // Add logic to delete account
  }
}
