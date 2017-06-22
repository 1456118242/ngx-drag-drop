import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpModule } from "@angular/http";
import { MaterialModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { DndModule } from "./dnd/index";
import { SimpleComponent } from "./demo/simple/simple.component";
import { ListComponent } from "./demo/list/list.component";
import { NativeComponent } from "./demo/native/native.component";
import { HorizontalListComponent } from "./demo/horizontal-list/horizontal-list.component";
import { TypedComponent } from "./demo/typed/typed.component";
import { NestedComponent } from "./demo/nested/nested.component";

@NgModule( {
  declarations: [
    AppComponent,
    SimpleComponent,
    ListComponent,
    NativeComponent,
    HorizontalListComponent,
    TypedComponent,
    NestedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DndModule,
    FlexLayoutModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
