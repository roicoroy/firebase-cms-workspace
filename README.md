# FirebaseCmsWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).







<!-- <ion-item>
            <ion-avatar item-start>
              <img src="assets/img/avatar/marty-avatar.png">
            </ion-avatar>
            <small>McFly</small>
            <p><small>Category</small></p>
          </ion-item> -->


  
  <!-- <div id="freewall" class="free-wall"></div> -->




  <!-- <div class="grid">
    <div class="grid-item">
      <masonry-layout id='grid'>
        <img src="https://picsum.photos/500" />
        <img src="https://picsum.photos/501" />
        <img src="https://picsum.photos/502" />
        <img src="https://picsum.photos/503" />
        <img src="https://picsum.photos/504" />
        <img src="https://picsum.photos/505" />
        <img src="https://picsum.photos/506" />
        <img src="https://picsum.photos/507" />
        <img src="https://picsum.photos/508" />
        <img src="https://picsum.photos/509" />
        <img src="https://picsum.photos/510" />
        <img src="https://picsum.photos/511" />
      </masonry-layout>
    </div>
  </div> -->




  <!-- <ngx-masonry>
    <div ngxMasonryItem class="masonry-item" *ngFor="let post of allPosts | async">
     <img class="border rounded" [src]="post.image.url | async ">
   </div>
  </ngx-masonry> -->



  <!-- <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Blank</ion-title>
    </ion-toolbar>
  </ion-header>

  <div id="container">
    <div *ngFor="let post of allPosts | async">
      <img class="border rounded" [src]="post.image.url | async ">
    </div>
  </div> -->

  <ion-grid>
    <ion-row>

      <ion-col>

      </ion-col>
      <ion-col>
        <ngx-masonry [options]="masonryOptions" [ordered]="true">
          <div ngxMasonryItem *ngFor="let image of masonryImages; index as idx">
            <div> {{idx}} </div>
            <ion-img id='img' [src]="image[1]"></ion-img>
          </div>
        </ngx-masonry>
      </ion-col>
      <!-- <ion-col *ngFor="let post of allPosts | async">
        <ion-card>
          <img [src]="post.image.url | async " />
          <div *ngIf="post.title" class="post-description">
            <small>{{ post.title }}</small>
          </div>
        </ion-card>
      </ion-col> -->
    </ion-row>
  </ion-grid>