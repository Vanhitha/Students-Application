import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user-service';

@Component({
  selector: 'app-profile-settings',
  standalone: false,
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.css',
})
export class ProfileSettings {

  settingsForm!: FormGroup;

  // ✅ FIX 1: single declaration (supports null + preview)
  imagePreview: string | ArrayBuffer | null = 'https://via.placeholder.com/100';

  // ✅ FIX 2: added missing user property
  user: any = {};

  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object,
    private userService: UserService
  ) {}
 

  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      firstName: ['vanhitha', Validators.required],
      lastName: ['karnati', Validators.required],
      email: ['example@example.com', [Validators.required, Validators.email]],
      username: ['vanhitha123', Validators.required],
      phone: ['1234567890'],
      address: [''],
      country: [''],
      state: [''],
      city: [''],
      postalCode: ['']
    });

    // ✅ load image safely
    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem('user');
      if (data) {
        const user = JSON.parse(data);
        this.user = user;
        this.imagePreview = user.profileImage || this.imagePreview;
      }
    }
  }

  onSubmit() {
    if (this.settingsForm.valid) {
      console.log(this.settingsForm.value);
    }

    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem('user');
      const user = data ? JSON.parse(data) : {};

      user.firstName = this.settingsForm.value.firstName;
      user.lastName = this.settingsForm.value.lastName;
      user.email = this.settingsForm.value.email;
      user.username = this.settingsForm.value.username;
      user.phone = this.settingsForm.value.phone;

      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  // ✅ file select
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.handleFile(file);
    }
  }
  saveProfile() {
    alert('Profile saved successfully!');
  }
  removeProfile() {
    alert('Profile removed successfully!');
  }
  cancelChanges() {
    alert('Changes canceled!');
  }

  // ✅ handle image
  handleFile(file: File): void {
    if (!file.type.match(/image\/(png|jpeg)/)) {
      alert('Only JPG or PNG allowed');
      return;
    }

    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;

      if (isPlatformBrowser(this.platformId)) {
        const data = localStorage.getItem('user');
        let user = data ? JSON.parse(data) : {};

        user.profileImage = this.imagePreview;

        this.userService.setUser(user);
      }
    };

    reader.readAsDataURL(file);
  }

  // ✅ remove image
  removeImage(event: Event): void {
    event.preventDefault();

    this.selectedFile = null;
    this.imagePreview = null;

    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem('user');
      let user = data ? JSON.parse(data) : {};

      user.profileImage = null;

      this.userService.setUser(user);
    }
  }

  uploadProfileImage(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('profileImage', this.selectedFile);

    console.log('Uploading file:', this.selectedFile);
    alert('File ready to upload!');
  }
}