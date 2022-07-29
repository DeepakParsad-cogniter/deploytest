import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { NoEncapsulationComponent } from './greet/noencapsulation.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';                                                    /* For ngModule */
import { HttpClientModule } from '@angular/common/http';
import { WebapiComponent } from './webapi/webapi.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';
import { NgxPaginationModule } from 'ngx-pagination';

/* For Web API */
@NgModule({
	declarations: [
		AppComponent,
		NoEncapsulationComponent,
		GreetComponent,
		ExponentialStrengthPipe,
		WebapiComponent,
		AboutComponent,
		HomeComponent,
		ServiceComponent,
		PriceComponent,
		ContactComponent,
		CrudComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		NgxPaginationModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }