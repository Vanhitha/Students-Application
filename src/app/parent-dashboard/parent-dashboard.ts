import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js/auto';
import { Chart } from 'chart.js/auto';
import { stat } from 'fs';

@Component({
  selector: 'app-parent-dashboard',
  standalone: false,
  templateUrl: './parent-dashboard.html',
  styleUrl: './parent-dashboard.css',
})
export class ParentDashboard {
 selectedStudent = 0;

  studentsList = [
    {
      id: 1,
      name: 'Janet',
      img: 'https://i.pravatar.cc/40?img=1'
    },
    {
      id: 2,
      name: 'John',
      img: 'https://i.pravatar.cc/40?img=2'
    }
  ];

  profile = {
    id: '#P124556',
    name: 'Thomas Bown',
    addedOn: '25 Mar 2024',
    child: 'Janet',
    avatar: 'https://i.pravatar.cc/150?img=1'
  };

  events = [
    {
      title: 'Parents, Teacher Meet',
      date: '15 July 2024',
      type: 'Full Day'
    },
    {
      title: 'Farewell',
      date: '11 Mar 2024',
      type: 'Half Day'
    },
    {
      title: 'Annual Day',
      date: '11 Mar 2024',
      type: 'Half Day'
    },
    {
      title: 'Holi Celebration',
      date: '15 July 2024',
      type: 'Full Day'
    }
  ];

  leaves = [
    {
      type: 'Emergency Leave',
      date: '15 Jun 2024',
      status: 'Pending'
    },
    {
      type: 'Medical Leave',
      date: '15 Jun 2024',
      status: 'Approved'
    },
    {
      type: 'Medical Leave',
      date: '16 Jun 2024',
      status: 'Declined'
    },
    {
      type: 'Fever',
      date: '16 Jun 2024',
      status: 'Approved'
    }
  ];

  homeworks = [
    {
      subject: 'Physics',
      title: 'Theory of Pendulum',
      teacher: 'Aaron',
      due: '16 Jun 2024',
      color: 'primary',
      img: 'https://images.unsplash.com/photo-1633493702341-4d04841df53b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      subject: 'Chemistry',
      title: 'Change of Elements',
      teacher: 'Hellana',
      due: '16 Jun 2024',
      color: 'success',
      img: 'https://images.unsplash.com/photo-1725404343886-a111bc5555c1?q=80&w=1088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      subject: 'Maths',
      title: 'Problems to Solve Page 21',
      teacher: 'Morgan',
      due: '21 Jun 2024',
      color: 'danger',
      img: 'https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      subject: 'English',
      title: 'Vocabulary Introduction',
      teacher: 'Daniel',
      due: '21 Jun 2024',
      color: 'info',
      img: 'https://images.unsplash.com/photo-1700773428278-13f13630d18d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  fees = [
    {
      name: 'Transport Fees',
      amount: 2500,
      due: '25 May 2024'
    },
    {
      name: 'Book Fees',
      amount: 2500,
      due: '25 May 2024'
    },
    {
      name: 'Exam Fees',
      amount: 2500,
      due: '25 May 2024'
    },
    {
      name: 'Mess Fees',
      amount: 2500,
      due: '25 May 2024',
      dueNow: true
    },
    {
      name: 'Hostel',
      amount: 2500,
      due: '25 May 2024'
    }
  ];
  notices = [
    {
      title: 'Parents, Teacher Meet',
      date: '15 July 2024',
      type: 'Full Day'
    },
    {
      title: 'Farewell',
      date: '11 Mar 2024',
      type: 'Half Day'
    },
    {
      title: 'Annual Day',
      date: '11 Mar 2024',
      type: 'Half Day'      
    },
    {
      title: 'Holi Celebration',
      date: '15 July 2024',
      type: 'Full Day'
    }
  ];
  students= [
    {
      id: 1,
      name: 'Janet',
      status: 'Pass',
      img: 'https://i.pravatar.cc/40?img=1',
      exam: [20, 40, 60, 50, 70],
      attendance: [30, 35, 45, 60, 80],
      homework: [10, 25, 30, 40, 60],
      marks: 90,
      section: 'A',
      class: '5th Grade'
    },
    {
      id: 2,
      name: 'John',
      status: 'Pass',
      img: 'https://i.pravatar.cc/40?img=2',
      exam: [30, 50, 70, 60, 80],
      attendance: [20, 25, 35, 50, 70],
      homework: [20, 30, 40, 50, 70],
      marks: 85,
      section: 'B',
      class: '5th Grade'
    },
    {
      id: 3,
      name: 'Emily',
      status: 'Fail',
      img: 'https://i.pravatar.cc/40?img=3',
      exam: [25, 45, 65, 55, 75],
      attendance: [25, 30, 40, 55, 75],
      homework: [15, 35, 45, 55, 75],
      marks: 32,
      section: 'A',
      class: '5th Grade',
    },
    {
      id: 4,
      name: 'Michael',
      status: 'Fail',
      img: 'https://i.pravatar.cc/40?img=4',
      exam: [35, 55, 75, 65, 85],
      attendance: [15, 20, 30, 45, 65],
      homework: [25, 40, 50, 60, 80],
      marks: 28,
      section: 'B',
      class: '5th Grade'
    }
  ];
  

  constructor() {}

  ngOnInit(): void {
    this.loadDashboard();
  }

 
  loadDashboard() {
   
  }

  
  changeStudent(index: number) {
    this.selectedStudent = index;

    
  }
     @ViewChild('myCanvas') canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (!ctx) return;

    // Example data (3 lines)
    const examScore = [20, 40, 60, 50, 70];
    const attendance = [30, 35, 45, 60, 80];
    const homework = [10, 25, 30, 40, 60];

    const startX = 50;
    const startY = 300;
    const stepX = 120;

    // Draw axes
    this.drawAxes(ctx);

    // Draw all 3 lines
    this.drawLine(ctx, examScore, startX, startY, stepX, 'blue');
    this.drawLine(ctx, attendance, startX, startY, stepX, 'green');
    this.drawLine(ctx, homework, startX, startY, stepX, 'red');

    // Labels
    this.drawLabels(ctx, startX, startY, stepX);
  }

  drawAxes(ctx: CanvasRenderingContext2D) {
    // X-axis
    ctx.beginPath();
    ctx.moveTo(40, 300);
    ctx.lineTo(650, 300);
    ctx.stroke();

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(40, 300);
    ctx.stroke();
  }

  drawLine(
    ctx: CanvasRenderingContext2D,
    data: number[],
    startX: number,
    startY: number,
    stepX: number,
    color: string
  ) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    data.forEach((value, index) => {
      const x = startX + index * stepX;
      const y = startY - value * 2; // scale Y

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();
  }

  drawLabels(ctx: CanvasRenderingContext2D, startX: number, startY: number, stepX: number) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

    months.forEach((month, i) => {
      ctx.fillText(month, startX + i * stepX, startY + 20);
    });

    // Y-axis values
    for (let i = 0; i <= 100; i += 20) {
      ctx.fillText(i.toString(), 5, startY - i * 2);
    }
  }

}
