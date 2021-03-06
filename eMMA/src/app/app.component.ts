import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NutritionPage } from '../pages/nutrition/nutrition';
import { AboutEmmaPage } from '../pages/about-emma/about-emma';
import { MyMedicationDiaryPage } from '../pages/my-medication-diary/my-medication-diary';
import { ConversationPage } from '../pages/conversation/conversation';
import { MyMedicationPage } from '../pages/my-medication/my-medication';
import { UpdatePage } from '../pages/update/update';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ConversationPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Schreiben mit eMMA', component: ConversationPage },
      { title: 'Meine Medikation', component: MyMedicationPage },
      { title: 'QR-Code aktualisieren', component: UpdatePage },
      { title: 'Zu beachten!', component: NutritionPage },
      { title: 'Mein Medikationstagebuch', component: MyMedicationDiaryPage },
      { title: 'Wer ist eMMA', component: AboutEmmaPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
