import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import {AfterViewInit} from '@angular/core';
@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
name = 'Admin';

  tabs = ['Students','Teachers','Staff'];
  activeTab = 'Students';

  stats = [
    { value: 28, label: 'Emergency' },
    { value: '01', label: 'Absent' },
    { value: '01', label: 'Late' }
  ];

  events = [
  {
    title: 'Parents, Teacher Meet',
    date: '15 July 2024',
    time: '09:10 AM - 10:50 PM',
    color: 'line-primary',
    users: [
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/women/2.jpg',
      'https://randomuser.me/api/portraits/women/3.jpg'
    ]
  },
  {
    title: 'Parents, Teacher Meet',
    date: '15 July 2024',
    time: '09:10 AM - 10:50 PM',
    color: 'line-info',
    users: [
      'https://randomuser.me/api/portraits/men/4.jpg',
      'https://randomuser.me/api/portraits/women/5.jpg',
      'https://randomuser.me/api/portraits/men/6.jpg'
    ]
  },
  {
    title: 'Vacation Meeting',
    date: '07 July 2024 - 07 July 2024',
    time: '09:10 AM - 10:50 PM',
    color: 'line-danger',
    users: [
      'https://randomuser.me/api/portraits/men/7.jpg',
      'https://randomuser.me/api/portraits/men/8.jpg'
    ]
  }
];
quickLinks = [
    { label: 'Calendar', icon: 'bi bi-calendar', bg: 'bg-success bg-opacity-25' },
    { label: 'Exam Result', icon: 'bi bi-file-earmark-text', bg: 'bg-primary bg-opacity-25' },
    { label: 'Attendance', icon: 'bi bi-check2-square', bg: 'bg-warning bg-opacity-25' },
    { label: 'Fees', icon: 'bi bi-currency-dollar', bg: 'bg-info bg-opacity-25' },
    { label: 'Home Works', icon: 'bi bi-journal-text', bg: 'bg-danger bg-opacity-25' },
    { label: 'Reports', icon: 'bi bi-file-earmark-bar-graph', bg: 'bg-info bg-opacity-25' }
  ];
   leaveRequests = [
    {
      name: 'James',
      type: 'Emergency',
      role: 'Physics Teacher',
      leave: '12 - 13 May',
      image: 'https://via.placeholder.com/40'
    },
    {
      name: 'Ramien',
      type: 'Casual',
      role: 'Accountant',
      leave: '12 - 13 May',
      image: 'https://via.placeholder.com/40'
    }
  ];


  ngAfterViewInit(): void {
    this.loadFeesChart();
    this.loadEarningsChart();
    this.loadExpensesChart();
  }

  loadFeesChart() {
    const ctx = document.getElementById('feesChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Q1:2023','Q2:2023','Q3:2023','Q4:2023','Q5:2023','Q6:2023','Q7:2023','Q8:2023'],
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

  loadEarningsChart() {
    new Chart('earningsChart', {
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
        plugins: { legend: { display: false }},
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  }

  loadExpensesChart() {
    new Chart('expensesChart', {
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
        plugins: { legend: { display: false }},
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  }

  
}



