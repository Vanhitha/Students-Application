import { Component, OnInit } from '@angular/core';
import { Teacher, TeacherService } from '../teacher';
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
  selector: 'app-teacher-dashboard',
  standalone: false,
  templateUrl: './teacher-dashboard.html',
  styleUrl: './teacher-dashboard.css',
})
export class TeacherDashboard implements OnInit {

  ngOnInit(): void {
    this.generateCalendar();
  }
   classes = [
    { time: '09:00 - 09:45', name: 'Class V, B', type: 'red' },
    { time: '09:00 - 09:45', name: 'Class IV, C', type: 'red' },
    { time: '11:30 - 12:15', name: 'Class V, B', type: 'blue' },
    { time: '01:30 - 02:15', name: 'Class V, B', type: 'blue' }
  ];

  performers = [
    { class: 'Class IV, C', percent: 80, color: 'bg-primary' },
    { class: 'Class III, B', percent: 54, color: 'bg-warning' },
    { class: 'Class V, A', percent: 75, color: 'bg-info' }
  ];

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
}
