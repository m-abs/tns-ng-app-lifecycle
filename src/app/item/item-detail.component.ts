import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

let instance = 0;

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    private instance = instance += 1;
    item: Item;

    public get componentName() {
        return this.constructor.name;
    }

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);

        console.log(`${this.componentName}<${this.instance}>.ngOnDestroy()`);
    }

    public ngOnDestroy() {
        console.log(`${this.componentName}<${this.instance}>.ngOnDestroy()`);
    }
}
