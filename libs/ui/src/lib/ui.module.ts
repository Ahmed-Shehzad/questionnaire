import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GraphQLModule } from './graphql.module';

@NgModule({
  imports: [CommonModule, GraphQLModule],
  exports: [CommonModule, GraphQLModule],
})
export class UiModule {}
