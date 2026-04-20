import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-securitysetings',
  standalone: false,
  templateUrl: './securitysetings.html',
  styleUrl: './securitysetings.css',
})
export class Securitysetings {
   constructor(private router: Router) {}
  user: any = {
    firstName: '',
    lastName: '',
    email: 'admin@example.com',
    username: '',
    phone: '+1 73649 72648',
    address: '',
    country: '',
    state: '',
    city: '',
    postalCode: '',
    profileImage: ''
  };

  
  originalUser: any;

  
  isTwoFactorEnabled: boolean = false;
  isGoogleConnected: boolean = true;

  imagePreview: string | ArrayBuffer | null = null;

  
  ngOnInit(): void {
    const savedUser = localStorage.getItem('user');

    if (savedUser) {
      this.user = JSON.parse(savedUser);
      this.originalUser = { ...this.user }; // backup
    } else {
      this.originalUser = { ...this.user };
    }

    // Load security settings
    this.isTwoFactorEnabled = JSON.parse(localStorage.getItem('twoFactor') || 'false');
    this.isGoogleConnected = JSON.parse(localStorage.getItem('googleAuth') || 'true');
  }

 
  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result;
        this.user.profileImage = reader.result; // save image
      };

      reader.readAsDataURL(file);
    }
  }

 

  changePassword(): void {
   this.router.navigate(['/forgotpassword']);
  }

  toggleTwoFactor(): void {
    this.isTwoFactorEnabled = !this.isTwoFactorEnabled;
    localStorage.setItem('twoFactor', JSON.stringify(this.isTwoFactorEnabled));
  }

  connectGoogle(): void {
    this.isGoogleConnected = !this.isGoogleConnected;
    localStorage.setItem('googleAuth', JSON.stringify(this.isGoogleConnected));
  }

  editPhone(): void {
    const newPhone = prompt('Enter new phone number', this.user.phone);
    if (newPhone) {
      this.user.phone = newPhone;
    }
  }

  editEmail(): void {
    const newEmail = prompt('Enter new email', this.user.email);
    if (newEmail) {
      this.user.email = newEmail;
    }
  }

  manageDevices(): void {
    alert('Device management page');
  }

  viewActivity(): void {
    alert('Account activity page');
  }

  deactivateAccount(): void {
    if (confirm('Are you sure you want to deactivate your account?')) {
      alert('Account Deactivated');
    }
  }

  deleteAccount(): void {
    if (confirm('This action is permanent. Delete account?')) {
      localStorage.clear();
      alert('Account Deleted');
    }
  }



}
