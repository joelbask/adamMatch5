import { Component } from '@angular/core';
import { Candidate } from './candidate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adamMatchmaker';
  percentage = -1;
  answer: Candidate = new Candidate();


  calculate(): void {
    console.log(this.answer);
    this.percentage = 0;
    let bmi = 0;
    bmi = this.answer.weight / this.answer.length * 12.5;
    this.percentage += bmi;

    if (this.answer.age != 8) {
      this.percentage += 1 / Math.abs(this.answer.age - 8) * 12.5;
    }
    else if(this.answer.age == 8){
      this.percentage += 12.5
    }
    switch (this.answer.country) {
      case "denmark":
        this.percentage += 0.7;
        break;
      case "sweden":
        this.percentage += 8.4;
        break;
      case "poland":
        this.percentage += 12.5;
        break;
      case "italy":
        this.percentage += 4.6;
        break;
      default:
        break;
    }

    switch (this.answer.date) {
      case "picknick":
        this.percentage += 3;
        break;
      case "cinema":
        this.percentage += 7.8;
        break;
      case "netflixAndChill":
        this.percentage += 0;
        break;
      case "sightseeingInPoland":
        this.percentage += 12.5;
        break;
      default:
        break;
    }

    switch (this.answer.sport) {
      case "friidrott":
        this.percentage += 12.5;
        break;
      case "basketball":
        this.percentage += 3.2;
        break;
      case "football":
        this.percentage += 2.7;
        break;
      case "fortnite":
        this.percentage += 10.6;
        break;
      case "jim":
        this.percentage += 9.6;
        break;
      default:
        break;
    }

    switch (this.answer.eyeColor) {
      case "orange":
        this.percentage += 7;
        break;
      case "pink":
        this.percentage += 2.4;
        break;
      case "green":
        this.percentage += 12.5;
        break;
      case "brown":
        this.percentage += 3.6;
        break;
      case "blue":
        this.percentage += 9.3;
        break;
      default:
        break;
    }

    switch (this.answer.hairColor) {
      case "emo":
        this.percentage -= 15;
        break;
      case "brunette":
        this.percentage += 12.5;
        break;
      case "blonde":
        this.percentage += 8.6;
        break;
      case "bald":
        this.percentage += 4.5;
        break;
      case "ginger":
        this.percentage += 2.1;
        break;
      default:
        break;
    }

    this.percentage += 1 / this.answer.kebabSize * 12.5;

    console.log(this.percentage);

  }
}