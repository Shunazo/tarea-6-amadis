import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonProgressBar } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonProgressBar, HttpClientModule]
})
export class WordpressPage implements OnInit {
  isLoading = false;
  latestNotice: any[] = [];
  sanitizedContent: any;
  url = 'https://api.marketaux.com/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&api_token=1qjelyDk6rF7s0JrMG1d3J6Yjd2tRX1b3NMN1KaX'; // Placeholder URL

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.fetchNotices();
  }

  // Adjusted method to fetch notices
  getNotices(): Observable<any> {
    return this.http.get<any>(this.url); // No need for an array, we expect an object with 'data'
  }

  fetchNotices() {
    this.getNotices().subscribe(
      (response) => {
        // Ensure we are handling the response structure correctly
        const newsData = response.data; // Fetch the 'data' array from the API response
        this.latestNotice = newsData.slice(0, 3); // Slice to get the top 3 articles

        // Process each article
        this.latestNotice.forEach((notice) => {
          let content = notice.snippet; // The snippet gives a brief overview of the article
          
          // Example: sanitize the snippet or you could use full article content
          notice.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(content); // Sanitizing the snippet content
        });
      },
      (error) => {
        console.error('Error al obtener las noticias:', error);
      }
    );
  }
}
