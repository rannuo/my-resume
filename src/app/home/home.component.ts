import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/throttleTime';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private rotateSubject: Subject<string>;
  rotate3d: Observable<string>;
  constructor() {
    this.rotateSubject = new Subject();
    this.rotate3d = this.rotateSubject.throttleTime(500);
  }

  ngOnInit() {
  }

  handleMouseMove(e: MouseEvent) {
    let rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    const pencentageY = (x - halfWidth) / halfWidth;
    const pencentageX = (y - halfHeight) / halfHeight;
    const centerX = rect.left + rect.width / 2,
          centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX,
          deltaY = e.clientY - centerY;
    const percentageX = deltaX / centerX,
          percentageY = deltaY / centerY;
    const deg = 10;
    const rotate3d = `rotateX(${percentageY * -10}deg) rotateY(${percentageX * 10}deg)`;
    this.rotateSubject.next(rotate3d);
  }
  handleMouseOut() {
    const rotate3d = `rotateX(0deg) rotateY(0deg)`;
    this.rotateSubject.next(rotate3d);
  }
}
