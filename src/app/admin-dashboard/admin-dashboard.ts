import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements AfterViewInit {
name = 'Admin'; 
tabs = ['Students', 'Teachers', 'Staff']; 
activeTab = 'Students';
 stats = [ 
    { value: 28, label: 'Emergency' },
    { value: '01', label: 'Absent' }, 
    { value: '01', label: 'Late' } 
  ];
events = [ 
  { title: 'Parents, Teacher Meet', date: '15 July 2024', time: '09:10 AM - 10:50 PM', color: 'line-primary', users: [ 'https://randomuser.me/api/portraits/men/1.jpg', 'https://randomuser.me/api/portraits/women/2.jpg', 'https://randomuser.me/api/portraits/women/3.jpg' ] }, 
  { title: 'Parents, Teacher Meet', date: '15 July 2024', time: '09:10 AM - 10:50 PM', color: 'line-info', users: [ 'https://randomuser.me/api/portraits/men/4.jpg', 'https://randomuser.me/api/portraits/women/5.jpg', 'https://randomuser.me/api/portraits/men/6.jpg' ] },
  { title: 'Vacation Meeting', date: '07 July 2024 - 07 July 2024', time: '09:10 AM - 10:50 PM', color: 'line-danger', users: [ 'https://randomuser.me/api/portraits/men/7.jpg', 'https://randomuser.me/api/portraits/men/8.jpg' ] } ]; quickLinks = [ { label: 'Calendar', icon: 'bi bi-calendar', bg: 'bg-success bg-opacity-25' }, 
  { label: 'Exam Result', icon: 'bi bi-file-earmark-text', bg: 'bg-primary bg-opacity-25' }, { label: 'Attendance', icon: 'bi bi-check2-square', bg: 'bg-warning bg-opacity-25' }, { label: 'Fees', icon: 'bi bi-currency-dollar', bg: 'bg-info bg-opacity-25' }, { label: 'Home Works', icon: 'bi bi-journal-text', bg: 'bg-danger bg-opacity-25' },
  { label: 'Reports', icon: 'bi bi-file-earmark-bar-graph', bg: 'bg-info bg-opacity-25' } ];
leaveRequests = [
  { name: 'James', type: 'Emergency', role: 'Physics Teacher', leave: '12 - 13 May', image: 'https://img.freepik.com/premium-photo/corporate-young-boy-office-keep-smiling_585255-2631.jpg?w=996' },
  { name: 'Ramien', type: 'Casual', role: 'Accountant', leave: '12 - 13 May', image: 'https://img.freepik.com/premium-photo/corporate-young-boy-office-keep-smiling_585255-2631.jpg?w=996' } 
]; 
notices = [
  { title: 'New Syllabus Instructions', date: '11 Mar 2024', days: 20 }, 
  { title: 'World Environment Day Program...!!', date: '21 Apr 2024', days: 15 },
  { title: 'Exam Preparation Notification!', date: '13 Mar 2024', days: 12 },
  { title: 'Online Classes Preparation', date: '24 May 2024', days: 2 },
  { title: 'Exam Time Table Release', date: '24 May 2024', days: 6 }
 ];
 subjects = [ 
  { name: 'Maths', value: 40, color: 'bg-blue' }, 
  { name: 'Physics', value: 35, color: 'bg-info' },
  { name: 'Chemistry', value: 55, color: 'bg-blue' }, 
  { name: 'Botany', value: 65, color: 'bg-green' },
  { name: 'English', value: 75, color: 'bg-yellow' },
  { name: 'Spanish', value: 85, color: 'bg-red' },
  { name: 'Japanese', value: 90, color: 'bg-blue' } 
];
activities = [ 
  { title: '1st place in "Chess"', desc: 'This event took place in Our School', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARGs46NmwJrtWhTMUX2mNEFVlLtJuOVAkEldZdwZHlQ&s&ec=121629545' },
  { title: 'Participated in "Carrom"', desc: 'Justin Lee participated in "Carrom"', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYl7CQiVBu1s50pldzBpDxAl_QzBtTRSxxiaibaHAkpQ&s&ec=121629545' },
  { title: '1st place in "100M"', desc: 'This event took place in Our School', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYl7CQiVBu1s50pldzBpDxAl_QzBtTRSxxiaibaHAkpQ&s&ec=121629545' },
  { title: 'International conference', desc: 'We attended international conference', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYl7CQiVBu1s50pldzBpDxAl_QzBtTRSxxiaibaHAkpQ&s&ec=121629545' }
 ];
tasks = [
  { title: 'Send Reminder to Students', time: '01:00 PM', status: 'Completed', completed: true },
  { title: 'Create Routine to new staff', time: '04:50 PM', status: 'Inprogress', completed: false },
  { title: 'Extra Class Info to Students', time: '04:55 PM', status: 'Yet To Start', completed: false }, { title: 'Fees for Upcoming Academics', time: '04:55 PM', status: 'Yet To Start', completed: false },
  { title: 'English - Essay on Visit', time: '05:55 PM', status: 'Yet To Start', completed: false }
 ];
  

  @ViewChild('attendanceChart') attendanceChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('feesChart') feesChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('earningsChart') earningsChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('expensesChart') expensesChart!: ElementRef<HTMLCanvasElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
  if (!isPlatformBrowser(this.platformId)) return;

  setTimeout(() => {
    this.initAttendanceChart();
    this.loadFeesChart();
    this.loadEarningsChart();
    this.loadExpensesChart();
  });
}

  // ---------------- ATTENDANCE CHART ----------------
  initAttendanceChart(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const canvas = this.attendanceChart?.nativeElement;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const present = 988;
    const total = 1000;
    const percentage = ((present / total) * 100).toFixed(1);

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Present', 'Remaining'],
        datasets: [{
          data: [present, total - present],
          backgroundColor: ['#0d6efd', '#e9ecef'],
          borderWidth: 0,
         
        }]
      },
      options: {
         cutout: '80%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        }
      },
      plugins: [{
        id: 'centerText',
        beforeDraw(chart: any) {
          const { width, height, ctx } = chart;
          ctx.save();

          ctx.font = `600 ${height / 7}px Arial`;
          ctx.fillStyle = '#0d6efd';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          ctx.fillText(`${percentage}%`, width / 2, height / 2);
          ctx.restore();
        }
      }]
    });
  }

  // ---------------- FEES CHART ----------------
  loadFeesChart(): void {
    const canvas = this.feesChart?.nativeElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Q1: 2023','Q2: 2023','Q3: 2023','Q4: 2023','Q5: 2023','Q6: 2023','Q7: 2023','Q8: 2023'],
        datasets: [
          {
            label: 'Collected Fee',
            data: [30, 40, 38, 42, 39, 30, 35, 40],
            backgroundColor: '#0d6efd'
          },
          {
            label: 'Total Fee',
            data: [70, 90, 85, 88, 84, 70, 75, 92],
            backgroundColor: '#dee2e6'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  // ---------------- EARNINGS CHART ----------------
  loadEarningsChart(): void {
    const canvas = this.earningsChart?.nativeElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [{
          data: [40, 60, 20, 45, 35, 55, 48],
          borderColor: '#0d6efd',
          backgroundColor: 'rgba(13,110,253,0.15)',
          fill: true,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  }

  // ---------------- EXPENSES CHART ----------------
  loadExpensesChart(): void {
    const canvas = this.expensesChart?.nativeElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [{
          data: [30, 10, 50, 45, 40, 44, 32],
          borderColor: '#dc3545',
          backgroundColor: 'rgba(220,53,69,0.15)',
          fill: true,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  }
}
