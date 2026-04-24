import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Student } from '../student';
import{ Chart } from 'chart.js/auto';
interface Day {
  date: number | null;
  inactive: boolean;
}

interface EventItem {
  date: number;
  title: string;
  description: string;
} 
@Component({
  selector: 'app-student-dashboard',
  standalone: false,
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.css',
})
export class StudentDashboard implements OnInit , AfterViewInit {
  ngOnInit(): void {
    this.generateCalendar();
  }
 currentDate: Date = new Date();
  days: Day[] = [];
  event: EventItem[] = [];
 generateCalendar(): void {
    this.days = [];

    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Fill previous month's empty days
    for (let i = 0; i < firstDay; i++) {
      this.days.push({ date: null, inactive: true });
    }

    // Fill current month days
    for (let i = 1; i <= totalDays; i++) {
      this.days.push({ date: i, inactive: false });
    }

    // Fill remaining cells (to complete week rows)
    while (this.days.length % 7 !== 0) {
      this.days.push({ date: null, inactive: true });
    }
  }

  // Go to previous month
  prevMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.generateCalendar();
  }

  // Go to next month
  nextMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }

homeworks = [
    {
      subject: 'Physics',
      title: 'Write about Theory of Pendulum',
      student: 'Aaron',
      date: '16 Jun 2024',
      progress: 90,
      image: 'https://via.placeholder.com/50',
      badgeColor: 'bg-primary',
      progressColor: 'green'
    },
    {
      subject: 'Chemistry',
      title: 'Chemistry - Change of Elements',
      student: 'Helliana',
      date: '16 Jun 2024',
      progress: 65,
      image: 'https://via.placeholder.com/50',
      badgeColor: 'bg-success',
      progressColor: 'blue'
    },
    {
      subject: 'Maths',
      title: 'Maths - Problems to Solve Page 21',
      student: 'Morgan',
      date: '21 Jun 2024',
      progress: 30,
      image: 'https://via.placeholder.com/50',
      badgeColor: 'bg-danger',
      progressColor: 'orange'
    },
    {
      subject: 'English',
      title: 'English - Vocabulary Introduction',
      student: 'Daniel Josua',
      date: '21 Jun 2024',
      progress: 10,
      image: 'https://via.placeholder.com/50',
      badgeColor: 'bg-info',
      progressColor: 'red'
    }
  ];

 

  loadChart() {
    new Chart("performanceChart", {
      type: 'line',
      data: {
        labels: ['Quarter 1','Quarter 2','Half yearly','Model','Final'],
        datasets: [
          {
            label: 'Avg. Exam Score',
            data: [75, 68, 65, 68, 75],
            borderColor: '#4e73df',
            backgroundColor: 'rgba(78,115,223,0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Avg. Attendance',
            data: [85, 78, 75, 78, 85],
            borderColor: '#36b9cc',
            backgroundColor: 'rgba(54,185,204,0.2)',
            tension: 0.4,
            fill: true
          }
        ]
      }
    });
  }
  tasks = [
  { title: 'Send Reminder to Students', time: '01:00 PM', status: 'Completed', completed: true },
  { title: 'Create Routine to new staff', time: '04:50 PM', status: 'Inprogress', completed: false },
  { title: 'Extra Class Info to Students', time: '04:55 PM', status: 'Yet To Start', completed: false }, { title: 'Fees for Upcoming Academics', time: '04:55 PM', status: 'Yet To Start', completed: false },
  { title: 'English - Essay on Visit', time: '05:55 PM', status: 'Yet To Start', completed: false }
 ];
 students = [
    { name: 'Aaron', subject: 'Chemistry', image: 'https://i.pravatar.cc/60?img=1' },
    { name: 'Helliana', subject: 'English', image: 'https://i.pravatar.cc/60?img=2' },
    { name: 'Morgan', subject: 'Physics', image: 'https://i.pravatar.cc/60?img=3' },
    { name: 'Daniel', subject: 'Spanish', image: 'https://i.pravatar.cc/60?img=4' },
    { name: 'Teresa', subject: 'Maths', image: 'https://i.pravatar.cc/60?img=5' }
  ];

  leaves = [
    { title: 'Emergency Leave', date: '15 Jun 2024', status: 'Pending', statusClass: 'bg-info' },
    { title: 'Medical Leave', date: '15 Jun 2024', status: 'Approved', statusClass: 'bg-success' },
    { title: 'Medical Leave', date: '16 Jun 2024', status: 'Declined', statusClass: 'bg-danger' },
    { title: 'Fever', date: '16 Jun 2024', status: 'Approved', statusClass: 'bg-success' }
  ];

  fees = [
    { title: 'Transport Fees', amount: '$2500', date: '25 May 2024' },
    { title: 'Book Fees', amount: '$2500', date: '25 May 2024' },
    { title: 'Exam Fees', amount: '$2500', date: '25 May 2024' },
    { title: 'Mess Fees', amount: '$2500', date: '27 May 2024' }
  ];

  notices = [
    { title: 'New Syllabus Instructions', date: '11 Mar 2024' },
    { title: 'World Environment Day Program', date: '21 Apr 2024' },
    { title: 'Exam Preparation Notification', date: '13 Mar 2024' }
  ];

  syllabus = [
    { subject: 'Maths', progress: 60, color: 'bg-primary' },
    { subject: 'Physics', progress: 70, color: 'bg-info' },
    { subject: 'Chemistry', progress: 65, color: 'bg-primary' },
    { subject: 'Botany', progress: 75, color: 'bg-success' },
    { subject: 'English', progress: 80, color: 'bg-warning' },
    { subject: 'Spanish', progress: 85, color: 'bg-danger' }
  ];

  ngAfterViewInit() {
    this.loadChart();
    new Chart("examChart", {
      type: 'bar',
      data: {
        labels: ['Mat','Phy','Che','Eng','Sci'],
        datasets: [{
          label: 'Marks',
          data: [100, 93, 90, 82, 80],
          backgroundColor: ['#e9ecef','#4e73df','#e9ecef','#e9ecef','#e9ecef']
        }]
      }
    });
  }
}
