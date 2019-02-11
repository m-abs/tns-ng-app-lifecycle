import { Component, OnDestroy, OnInit } from "@angular/core";

let instance = 0;
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {
    private instance = instance += 1;

    public get componentName() {
        return this.constructor.name;
    }

    public ngOnInit() {
        console.log(`${this.componentName}<${this.instance}>.ngOnDestroy()`);
    }

    public ngOnDestroy() {
        console.log(`${this.componentName}<${this.instance}>.ngOnDestroy()`);
    }
 }
