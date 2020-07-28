import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import {
  AngularFirestoreModule,
  AngularFirestore,
} from "@angular/fire/firestore";
import { AngularFireAuthModule, AngularFireAuth } from "angularfire2/auth";
import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AppRoutingModule } from "./app-routing.module";
import { AgmCoreModule } from "@agm/core";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserComponent } from "./user/user.component";
import { AuthGuard } from "./guards/auth.guard";
import { ChartsModule } from "ng2-charts";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSliderModule } from "@angular/material/slider";
import { MatGridListModule } from "@angular/material/grid-list";

import { AuthService } from "./services/auth.service";
import { EngageComponent } from "./components/engage/engage.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    EngageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatSliderModule,
    MatRadioModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAhusDEobqFjkf5_U328gcU48GbZe_A58Q",
    }),
    BrowserAnimationsModule,
    ChartsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
