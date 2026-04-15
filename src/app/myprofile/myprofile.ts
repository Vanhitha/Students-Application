import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { UserService } from '../user-service';


@Component({
  selector: 'app-myprofile',
  standalone: false,
  templateUrl: './myprofile.html',
  styleUrl: './myprofile.css',
})
export class Myprofile implements OnInit {
   constructor(private userService: UserService, @Inject(PLATFORM_ID) private platformId: Object) {}
  editMode: boolean = false;

  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    phone: ''
  };

  address: any = {
    addressLine: '',
    city: '',
    country: ''
  };
  

  ngOnInit(): void {
    this.loadUser();
    this.loadAddress();
    if (isPlatformBrowser(this.platformId)) {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      this.imagePreview = savedImage;
    }
  }
  }

  
  loadUser() {
  if (isPlatformBrowser(this.platformId)) {
    const data = localStorage.getItem('user');
    this.user = data ? JSON.parse(data) : {};

    if (!this.user.profileImage) {
      this.user.profileImage = 'https://via.placeholder.com/40';
    }
  }
}


  loadAddress(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedAddress = localStorage.getItem('address');
      if (storedAddress) {
        this.address = JSON.parse(storedAddress);
      }
    }
  }


  toggleEdit(): void {
    this.editMode = !this.editMode;

   
    if (!this.editMode) {
      this.loadUser();
    }
  }


  save(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
    alert('Profile updated successfully!');
    this.editMode = false;
  }

 
  saveAddress(): void {
    localStorage.setItem('address', JSON.stringify(this.address));
    alert('Address saved successfully!');
  }

 
  changePassword(): void {
  const newPassword = prompt('Enter new password:');

  if (!newPassword) return;

  if (newPassword.trim().length < 4) {
    alert('Password must be at least 4 characters');
    return;
  }

 
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    const user = JSON.parse(storedUser);

    
    user.password = newPassword;

    
    localStorage.setItem('user', JSON.stringify(user));


    this.user = user;

    alert('Password updated successfully!');
  } else {
    alert('No user found in localStorage');
  }
}
selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  // When file is selected (from input)
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.handleFile(file);
    }
  }

  // Handle drag & drop (optional, if used in HTML)
  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      const file = event.dataTransfer.files[0];
      this.handleFile(file);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

 
 handleFile(file: File): void {
  if (!file.type.match(/image\/(png|jpeg)/)) {
    alert('Only JPG or PNG allowed');
    return;
  }

  this.selectedFile = file;

  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result;

    const data = localStorage.getItem('user');
    let user = data ? JSON.parse(data) : {};

    user.profileImage = this.imagePreview;

    // 🔥 IMPORTANT: use service instead of direct localStorage
    this.userService.setUser(user);
  };

  reader.readAsDataURL(file);
}

  
  removeImage(event: Event): void {
    event.preventDefault();
    this.selectedFile = null;
    this.imagePreview = null;
  }

  
  uploadProfileImage(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('profileImage', this.selectedFile);

  
    console.log('Uploading file:', this.selectedFile);



    alert('File ready to upload!');
  }
  onload(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedImage = localStorage.getItem('profileImage');
      if (savedImage) {
        this.imagePreview = savedImage;
      }
    }
  }
}
