import { Component, OnInit, Input, Output } from '@angular/core';
import {Mark} from '../../models/mark'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
  @Input() public Mark : Mark;
  @Output() move : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  } 

  Move()
  {
    this.move.emit(true);
  }
  ngOnInit(): void {
  }
  
}
