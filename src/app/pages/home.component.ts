import { Component } from "@angular/core";

import * as json from "../../assets/survey.json";

@Component({
    template: `<app-survey [json]="json" (submitSurvey)="sendData($event)"></app-survey>`,
    selector: "survey",
})
export class HomeComponent {
    title = "SurveyJS+Angular Demo Application";
    json;

    constructor() {
        this.json = json;
    }

    sendData(result: any) {
        //TODO update with your own behavior
        console.log(result);
    }
}
