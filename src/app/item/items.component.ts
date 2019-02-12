import { Component, OnInit, OnDestroy } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

let instance = 0;
@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit, OnDestroy {
    private instance = instance += 1;
    items: Array<Item>;

    public get componentName() {
        return this.constructor.name;
    }

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        console.log(`${this.componentName}<${this.instance}>.ngOnInit()`);
    }

    public ngOnDestroy() {
        console.log(`${this.componentName}<${this.instance}>.ngOnDestroy()`);
    }
}
