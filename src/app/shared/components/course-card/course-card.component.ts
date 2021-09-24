import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input() courseImg:string;
  @Input() courseLogo:string;
  @Input() courseTitle:string;
  @Input() courseDesc:string;

  constructor() { }

  ngOnInit(): void {
  }

}
