import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  time: string = '';

  ngOnInit() {
    setInterval(() => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Moscow',
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      this.time = new Date().toLocaleString('ru-RU', options);
    }, 1000);
  }
}
