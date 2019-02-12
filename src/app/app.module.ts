import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouteReuseStrategy } from "@angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { routeReuseStrategyTraceCategory, routerTraceCategory } from "nativescript-angular/trace";
import * as trace from "tns-core-modules/trace";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomRouteReuseStrategy } from "./custom-route-reuse-strategy";
import { ItemDetailComponent } from "./item/item-detail.component";
import { ItemsComponent } from "./item/items.component";

trace.enable();
trace.addCategories([routerTraceCategory,routeReuseStrategyTraceCategory].join(','));

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
