import { Component, OnInit, Input, Output } from '@angular/core';
import {Mark} from '../../models/mark'

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent implements OnInit {
  @Input()public Mark : Mark;
  constructor() {
  } 

  ngOnInit(): void {
  }
  
}
