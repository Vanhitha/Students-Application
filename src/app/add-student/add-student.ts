import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent implements OnInit {
   studentForm: FormGroup;

  studentImage: string | null = null;
  fatherImage: string | null = null;
  motherImage: string | null = null;
  guardianImage: string | null = null;

  documentName: string = '';
  medicalReportName: string = '';

  documentFile: string | null = null;
  medicalReportFile: string | null = null;
  medicalCondition: string = 'Good';

allergies: string[] = ['Allergy', 'Skin Allergy'];
medications: string[] = ['paracetamol', 'ibuprofen'];
languages: string[] = ['English', 'Hindi', 'Spanish'];

  constructor(private fb: FormBuilder) {

    this.studentForm = this.fb.group({
      academicYear: [''],
      admissionNumber: [''],
      admissionDate: [''],
      rollNumber: [''],
      status: [''],
      firstName: [''],
      lastName: [''],
      class: [''],
      section: [''],
      gender: [''],
      dob: [''],

      fatherName: [''],
      motherName: [''],
      guardianName: [''],

      currentAddress: [''],
      permanentAddress: [''],

      transportEnabled: [false],
      hostelEnabled: [false],

      medicalCondition: ['Good'],
      allergies: [[]],
      medications: [[]],

      siblings: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  // ---------------- FORM ARRAY ----------------

  get siblings(): FormArray {
    return this.studentForm.get('siblings') as FormArray;
  }

  createSibling(): FormGroup {
    return this.fb.group({
      name: [''],
      rollNo: [''],
      admissionNo: [''],
      class: ['']
    });
  }

  addSibling() {
    this.siblings.push(this.createSibling());
    this.saveData();
  }

  removeSibling(i: number) {
    this.siblings.removeAt(i);
    this.saveData();
  }

  // ---------------- FILE READER ----------------

  readFile(file: File, callback: Function) {
    const reader = new FileReader();
    reader.onload = () => callback(reader.result);
    reader.readAsDataURL(file);
  }

  // ---------------- IMAGE UPLOAD ----------------

  onStudentFile(event: any) {
    const file = event.target.files[0];
    this.readFile(file, (res: any) => {
      this.studentImage = res;
      localStorage.setItem('studentImage', res);
    });
  }

  onFatherFile(event: any) {
    const file = event.target.files[0];
    this.readFile(file, (res: any) => {
      this.fatherImage = res;
      localStorage.setItem('fatherImage', res);
    });
  }

  onMotherFile(event: any) {
    const file = event.target.files[0];
    this.readFile(file, (res: any) => {
      this.motherImage = res;
      localStorage.setItem('motherImage', res);
    });
  }

  onGuardianFile(event: any) {
    const file = event.target.files[0];
    this.readFile(file, (res: any) => {
      this.guardianImage = res;
      localStorage.setItem('guardianImage', res);
    });
  }
  removeStudentImage() {
    this.studentImage = null;
    localStorage.removeItem('studentImage');
  }

  removeFatherImage() {
    this.fatherImage = null;
    localStorage.removeItem('fatherImage');
  }

  removeMotherImage() {
    this.motherImage = null;
    localStorage.removeItem('motherImage');
  }

  removeGuardianImage() {
    this.guardianImage = null;
    localStorage.removeItem('guardianImage');
  }
  uploadGuardianImage() {
    const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.onchange = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    this.readFile(file, (res: any) => {
      this.guardianImage = res;
      localStorage.setItem('guardianImage', res);
    });
  };


  }
  uploadStudentImage() {
    const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.onchange = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    this.readFile(file, (res: any) => {
      this.studentImage = res;
      localStorage.setItem('studentImage', res);
    });
  };
  }
  uploadFatherImage() {
   const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.onchange = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    this.readFile(file, (res: any) => {
      this.fatherImage = res;
      localStorage.setItem('fatherImage', res);
    });
  };

  

  }
  uploadMotherImage() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.onchange = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;

    this.readFile(file, (res: any) => {
      this.motherImage = res;
      localStorage.setItem('motherImage', res);
    });
  };

  
}
  

  // ---------------- DOCUMENT UPLOAD ----------------

  onDocumentFile(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.documentName = file.name;

    this.readFile(file, (res: any) => {
      this.documentFile = res;
      localStorage.setItem('documentFile', res);
      localStorage.setItem('documentName', file.name);
    });
  }
   removeLanguage(lang: string) {
  this.languages = this.languages.filter(item => item !== lang);

  } 
  removeAllergy(item: string) {
  this.allergies = this.allergies.filter(a => a !== item);
}

removeMedication(item: string) {
  this.medications = this.medications.filter(m => m !== item);
}

// ADD (optional input support)
addAllergy(value: string) {
  if (value && !this.allergies.includes(value)) {
    this.allergies.push(value);
  }
}

addMedication(value: string) {
  if (value && !this.medications.includes(value)) {
    this.medications.push(value);
  }
}

  onMedicalReportFile(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.medicalReportName = file.name;

    this.readFile(file, (res: any) => {
      this.medicalReportFile = res;
      localStorage.setItem('medicalReportFile', res);
      localStorage.setItem('medicalReportName', file.name);
    });
  }

  // ---------------- PICKER BUTTONS ----------------

  openDocumentPicker(input: HTMLInputElement) {
    input.click();
  }

  openMedicalPicker(input: HTMLInputElement) {
    input.click();
  }

  // ---------------- SAVE / LOAD ----------------

  saveData() {
    const data = this.studentForm.value;
    data.siblings = this.siblings.value;

    localStorage.setItem('studentForm', JSON.stringify(data));
  }

  loadData() {
    const saved = localStorage.getItem('studentForm');

    if (saved) {
      const data = JSON.parse(saved);
      this.studentForm.patchValue(data);

      if (data.siblings) {
        data.siblings.forEach((s: any) => {
          this.siblings.push(this.fb.group(s));
        });
      }
    }

    this.studentImage = localStorage.getItem('studentImage');
    this.fatherImage = localStorage.getItem('fatherImage');
    this.motherImage = localStorage.getItem('motherImage');
    this.guardianImage = localStorage.getItem('guardianImage');

    this.documentName = localStorage.getItem('documentName') || '';
    this.medicalReportName = localStorage.getItem('medicalReportName') || '';
  }

  // ---------------- SUBMIT ----------------

  onSubmit() {
    this.saveData();
    console.log('Saved:', this.studentForm.value);
  }

  resetForm() {
    localStorage.clear();
    this.studentForm.reset();
    this.siblings.clear();

    this.studentImage = null;
    this.fatherImage = null;
    this.motherImage = null;
    this.guardianImage = null;
  }
}

