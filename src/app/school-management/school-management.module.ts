import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { SchoolManagementComponent } from "./school-management/school-management.component"
import { MatTableModule } from "@angular/material/table"
import { SchoolManagementRoutingModule } from "./school-management.routing.module"
import { CdkColumnDef } from "@angular/cdk/table"

@NgModule({
  providers: [CdkColumnDef],
  declarations: [SchoolManagementComponent],
  imports: [CommonModule, MatTableModule, SchoolManagementRoutingModule],
})
export class SchoolManagementModule {}
