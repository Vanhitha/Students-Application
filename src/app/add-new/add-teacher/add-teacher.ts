import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {  Teacher, TeacherService } from '../../teacher';

@Component({
  selector: 'app-add-teacher',
  standalone: false,
  templateUrl: './add-teacher.html',
  styleUrl: './add-teacher.css',
})
export class AddTeacher {
  teacherForm: FormGroup;

  teacherImage: string | null = null;

  documentName: string = '';
  documentFile: string | null = null;

  constructor(private fb: FormBuilder, private teacherService: TeacherService) {

    this.teacherForm = this.fb.group({

      employeeId: ['',[Validators.required, Validators.minLength(4)]],
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      gender: [''],
      dob: [''],
      phone: ['', [
    Validators.required,
    Validators.pattern('^[0-9]{10}$')
  ]],
      email: ['', [
    Validators.required,
    Validators.email
  ]],

      qualification: [''],
      experience: ['',[Validators.pattern('^[0-9]+$')]],
      subject: [''],
      joiningDate: ['',[Validators.required]],
      salary: ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],

      currentAddress: [''],
      permanentAddress: ['']

    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  // ================= IMAGE =================

  readFile(file: File, callback: Function) {
    const reader = new FileReader();
    reader.onload = () => callback(reader.result);
    reader.readAsDataURL(file);
  }

  onTeacherFile(event: any) {
    const file = event.target.files[0];
    this.readFile(file, (res: any) => {
      this.teacherImage = res;
      localStorage.setItem('teacherImage', res);
    });
  }

  uploadTeacherImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (!file) return;

      this.readFile(file, (res: any) => {
        this.teacherImage = res;
        localStorage.setItem('teacherImage', res);
      });
    };
  }

  removeTeacherImage() {
    this.teacherImage = null;
    localStorage.removeItem('teacherImage');
  }

  // ================= DOCUMENT =================

  onDocumentFile(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.documentName = file.name;

    this.readFile(file, (res: any) => {
      this.documentFile = res;
      localStorage.setItem('teacherDocument', res);
      localStorage.setItem('documentName', file.name);
    });
  }

  // ================= SAVE / LOAD =================

  saveData() {
    localStorage.setItem('teacherForm', JSON.stringify(this.teacherForm.value));
  }

  loadData() {
    const saved = localStorage.getItem('teacherForm');

    if (saved) {
      this.teacherForm.patchValue(JSON.parse(saved));
    }

    this.teacherImage = localStorage.getItem('teacherImage');
    this.documentName = localStorage.getItem('documentName') || '';
  }

  // ================= SUBMIT =================

 onSubmit() {
  this.saveData();

  const teacherData = {
    ...this.teacherForm.value,
    teacherImage: this.teacherImage,
    documentName: this.documentName
  };

  this.teacherService.addTeacher(teacherData);

  console.log('Teacher Sent:', teacherData);
  this.teacherForm.reset();
   this.teacherImage = null;
    this.documentName = '';
}

  // ================= RESET =================

  resetForm() {
    
    this.teacherForm.reset();
    this.teacherImage = null;
    this.documentName = '';
  }
}
