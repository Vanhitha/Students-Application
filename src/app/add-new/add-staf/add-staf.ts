import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Student } from '../../student';
@Component({
  selector: 'app-add-staf',
  standalone: false,
  templateUrl: './add-staf.html',
  styleUrl: './add-staf.css',
})
export class AddStaf {
  staffForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  this.staffForm = this.fb.group({
  staffId: ['', [Validators.required, Validators.minLength(3)]],

  firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z]{2,}$')]],

  lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z]{2,}$')]],

  gender: ['', Validators.required],

  dob: ['', Validators.required],

  email: ['', [
    Validators.required,
    Validators.email
  ]],

  phone: ['', [
    Validators.required,
    Validators.pattern('^[0-9]{10}$')
  ]],

  department: ['', Validators.required],

  designation: ['', Validators.required],

  joiningDate: ['', Validators.required],

  address: this.fb.group({
    current: ['', Validators.required],
    permanent: ['', Validators.required]
  }),

  salary: ['', [
    Validators.required,
    Validators.pattern('^[0-9]+$')
  ]],

  skills: ['', Validators.required],

  experience: ['', [
    Validators.required,
    Validators.pattern('^[0-9]+$')
  ]]
});
  }

  onSubmit() {
  if (this.staffForm.invalid) {
    this.staffForm.markAllAsTouched();
    alert('Please fill all required fields correctly');
    return;
  }

  console.log('Staff Data:', this.staffForm.value);

  localStorage.setItem('staffData', JSON.stringify(this.staffForm.value));

  alert('Staff added successfully!');
}

  resetForm() {
    this.staffForm.reset();
  }
}
