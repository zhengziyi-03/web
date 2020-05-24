import { Component, OnInit } from '@angular/core';
import { STUDENTS } from '../data';

@Component({
  selector: 'app-user-management-component',
  templateUrl: './user-management-component.component.html',
  styleUrls: ['./user-management-component.component.css']
})


export class UserManagementComponentComponent implements OnInit {

  ngOnInit(): void {
  }

  students = STUDENTS;

}

