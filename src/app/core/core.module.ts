import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CommonModule) {
    if (parent) {
      throw new Error('Index already exists, cannot be loaded again!')
    }
  }
}
