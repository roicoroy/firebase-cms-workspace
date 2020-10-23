import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Category } from 'src/app/shared/models/collections/category.model';
import { Post } from 'src/app/shared/models/collections/post.model';
import { Language } from 'src/app/shared/models/language.model';
import { NgxMasonryOptions, NgxMasonryComponent } from 'src/app/shared/ngx-masonry/src/public-api';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CategoriesService } from 'src/app/shared/services/collections/categories.service';
import { PostsService } from 'src/app/shared/services/collections/posts.service';
import { CurrentUserService } from 'src/app/shared/services/current-user.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { SettingsService } from 'src/app/shared/services/settings.service';
// import "https://unpkg.com/@appnest/masonry-layout?module";
import {Freewall} from 'src/assets/masonry-layout.js';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  allPosts: Observable<any[]>;
  selectedPost: Post = null;
  @ViewChild(DataTableDirective, { static: false }) private dataTableElement: DataTableDirective;
  dataTableOptions: DataTables.Settings | any = {
    responsive: true,
    aaSorting: []
  };
  dataTableTrigger: Subject<void> = new Subject();
  private subscription: Subscription = new Subscription();
  allStatus: { labels: object, colors: object };
  allCategories: Category[] = [];
  allLanguages: Language[] = [];
  private routeParamsChange: Subject<void> = new Subject<void>();
  isLoading: boolean = true;
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  masonryImages = [];
  limit = 15;

  dummyPictures = [
    [false, 'https://source.unsplash.com/433x649/?Uruguay'],
    [false, 'https://source.unsplash.com/530x572/?Jamaica'],
    [false, 'https://source.unsplash.com/531x430/?Kuwait'],
    [false, 'https://source.unsplash.com/586x1073/?Bermuda'],
    [false, 'https://source.unsplash.com/500x571/?Ecuador'],
    [false, 'https://source.unsplash.com/579x518/?Virgin Islands (British)'],
    [false, 'https://source.unsplash.com/503x548/?Angola'],
    [false, 'https://source.unsplash.com/511x630/?Mauritania'],
    [false, 'https://source.unsplash.com/414x767/?Sri Lanka'],
    [false, 'https://source.unsplash.com/443x704/?St. Helena'],
    [false, 'https://source.unsplash.com/441x1145/?Namibia'],
    [false, 'https://source.unsplash.com/491x1097/?Samoa'],
    [false, 'https://source.unsplash.com/570x851/?Eritrea'],
    [false, 'https://source.unsplash.com/560x1072/?Iraq'],
    [false, 'https://source.unsplash.com/551x598/?Togo'],
    [false, 'https://source.unsplash.com/518x813/?Romania'],
    [false, 'https://source.unsplash.com/497x524/?Kenya'],
    [false, 'https://source.unsplash.com/549x826/?Martinique'],
    [false, 'https://source.unsplash.com/559x627/?Tokelau'],
    [false, 'https://source.unsplash.com/594x513/?Belize'],
    [false, 'https://source.unsplash.com/480x1181/?Virgin Islands (US)'],
    [false, 'https://source.unsplash.com/526x552/?Chile'],
    [false, 'https://source.unsplash.com/427x504/?Western Sahara'],
    [false, 'https://source.unsplash.com/468x971/?St. Pierre and Miquelon'],
    [false, 'https://source.unsplash.com/419x790/?Thailand'],
    [false, 'https://source.unsplash.com/417x1125/?Myanmar'],
    [false, 'https://source.unsplash.com/480x632/?Cocos (Keeling Islands)'],
    [false, 'https://source.unsplash.com/416x900/?Belarus'],
    [false, 'https://source.unsplash.com/408x837/?Panama'],
    [false, 'https://source.unsplash.com/541x1021/?Slovak Republic'],
    [false, 'https://source.unsplash.com/597x1107/?Malta'],
    [false, 'https://source.unsplash.com/487x842/?Bahrain'],
    [false, 'https://source.unsplash.com/403x904/?Somalia'],
    [false, 'https://source.unsplash.com/544x515/?Morocco'],
    [false, 'https://source.unsplash.com/577x1044/?Djibouti'],
    [false, 'https://source.unsplash.com/404x437/?France, Metropolitan'],
    [false, 'https://source.unsplash.com/482x1079/?Libya'],
    [false, 'https://source.unsplash.com/473x887/?Bolivia'],
    [false, 'https://source.unsplash.com/583x614/?Kazakhstan'],
    [false, 'https://source.unsplash.com/592x838/?Guyana'],
    [false, 'https://source.unsplash.com/422x731/?Switzerland'],
    [false, 'https://source.unsplash.com/448x985/?Venezuela'],
    [false, 'https://source.unsplash.com/494x936/?Uzbekistan'],
    [false, 'https://source.unsplash.com/461x762/?Benin'],
    [false, 'https://source.unsplash.com/550x676/?Palau'],
    [false, 'https://source.unsplash.com/524x901/?Laos'],
    [false, 'https://source.unsplash.com/594x1199/?French Southern Territories'],
    [false, 'https://source.unsplash.com/557x662/?Malawi'],
    [false, 'https://source.unsplash.com/428x1184/?Swaziland'],
    [false, 'https://source.unsplash.com/433x631/?Lithuania'],
    [false, 'https://source.unsplash.com/523x477/?Sweden'],
    [false, 'https://source.unsplash.com/568x443/?Bahamas'],
    [false, 'https://source.unsplash.com/434x448/?United Arab Emirates'],
    [false, 'https://source.unsplash.com/566x740/?Puerto Rico'],
    [false, 'https://source.unsplash.com/481x580/?Nicaragua'],
    [false, 'https://source.unsplash.com/470x761/?Viet Nam'],
    [false, 'https://source.unsplash.com/519x954/?Australia'],
    [false, 'https://source.unsplash.com/405x1030/?Marshall Islands'],
    [false, 'https://source.unsplash.com/587x1059/?Falkland Islands (Malvinas)'],
    [false, 'https://source.unsplash.com/593x907/?Montserrat'],
    [false, 'https://source.unsplash.com/462x729/?British Indian Ocean Territory'],
    [false, 'https://source.unsplash.com/538x610/?Norway'],
    [false, 'https://source.unsplash.com/506x1057/?Malaysia'],
    [false, 'https://source.unsplash.com/588x756/?Anguilla'],
    [false, 'https://source.unsplash.com/468x1047/?Senegal'],
    [false, 'https://source.unsplash.com/574x498/?Zaire'],
    [false, 'https://source.unsplash.com/594x635/?Ireland'],
    [false, 'https://source.unsplash.com/448x759/?Nauru'],
    [false, 'https://source.unsplash.com/540x619/?Mayotte'],
    [false, 'https://source.unsplash.com/552x438/?Syria'],
    [false, 'https://source.unsplash.com/563x759/?Ghana'],
    [false, 'https://source.unsplash.com/569x1171/?Austria'],
    [false, 'https://source.unsplash.com/581x657/?Macau'],
    [false, 'https://source.unsplash.com/539x1013/?Mozambique'],
    [false, 'https://source.unsplash.com/581x477/?Liechtenstein'],
    [false, 'https://source.unsplash.com/495x589/?Saint Vincent and The Grenadines'],
    [false, 'https://source.unsplash.com/579x680/?Brazil'],
    [false, 'https://source.unsplash.com/467x642/?Turks and Caicos Islands'],
    [false, 'https://source.unsplash.com/496x1186/?Italy'],
    [false, 'https://source.unsplash.com/416x844/?Reunion'],
    [false, 'https://source.unsplash.com/442x569/?Sierra Leone'],
    [false, 'https://source.unsplash.com/517x1084/?Northern Mariana Islands'],
    [false, 'https://source.unsplash.com/431x1164/?Belgium'],
    [false, 'https://source.unsplash.com/541x649/?Netherlands'],
    [false, 'https://source.unsplash.com/491x902/?Korea (South)'],
    [false, 'https://source.unsplash.com/534x778/?Guinea'],
    [false, 'https://source.unsplash.com/528x933/?Tunisia'],
    [false, 'https://source.unsplash.com/441x609/?Tonga'],
    [false, 'https://source.unsplash.com/469x1060/?Equatorial Guinea'],
    [false, 'https://source.unsplash.com/588x794/?S. Georgia and S. Sandwich Isls.'],
    [false, 'https://source.unsplash.com/536x1103/?Algeria'],
    [false, 'https://source.unsplash.com/541x821/?Israel'],
    [false, 'https://source.unsplash.com/414x541/?Bulgaria'],
    [false, 'https://source.unsplash.com/477x879/?Turkmenistan'],
    [false, 'https://source.unsplash.com/450x777/?Croatia (Hrvatska)'],
    [false, 'https://source.unsplash.com/528x978/?Cook Islands'],
    [false, 'https://source.unsplash.com/521x686/?Solomon Islands'],
    [false, 'https://source.unsplash.com/550x432/?Bosnia and Herzegovina'],
    [false, 'https://source.unsplash.com/540x631/?Tanzania'],
    [false, 'https://source.unsplash.com/594x443/?Chad']
  ];
  constructor(
    private auth: AuthService,
    private router: Router,
    private posts: PostsService,
    private categories: CategoriesService,
    private alert: AlertService,
    private route: ActivatedRoute,
    public navigation: NavigationService,
    public currentUser: CurrentUserService,
    private settings: SettingsService
  ) { }

  w: any = 1;
  h = 1;
  html = '';
  limitItem = 49;
  ngOnInit() {

    this.masonryImages = this.dummyPictures.slice(0, this.limit);



    // $('#grid').masonry({
    //   // options...
    //   itemSelector: '.grid-item',
    //   columnWidth: 200
    // });

    // Get all status
    this.allStatus = this.posts.getAllStatusWithColors();
    // Get all categories
    this.subscription.add(
      this.categories.getAll().pipe(map((categories: Category[]) => {
        const allCategories: Category[] = [];
        categories.forEach((category: Category) => {
          allCategories[category.id] = category;
        });
        return allCategories;
      })).subscribe((categories: Category[]) => {
        // console.log(categories);
        this.allCategories = categories;
      })
    );
    // Get all languages
    this.settings.supportedLanguages.forEach((language: Language) => {
      this.allLanguages[language.key] = language;
    });
    // Get route params
    this.subscription.add(
      this.route.params.subscribe((params: { status: string, categoryId: string, authorId: string }) => {
        this.routeParamsChange.next();
        this.isLoading = true;
        // Get all posts
        this.allPosts = this.posts.getWhereFn(ref => {
          let query: any = ref;
          // Filter by status
          if (params.status) {
            query = query.where('status', '==', params.status);
          }
          // Filter by category
          else if (params.categoryId) {
            query = query.where('categories', 'array-contains', params.categoryId);
          }
          // Filter by author
          else if (params.authorId) {
            query = query.where('createdBy', '==', params.authorId);
          }
          //query = query.orderBy('createdAt', 'desc'); // requires an index to work
          return query;
        }, true).pipe(
          map((posts: Post[]) => {
            return posts.sort((a: Post, b: Post) => b.createdAt - a.createdAt);
          }),
          takeUntil(this.routeParamsChange)
        );
        this.subscription.add(
          this.allPosts.subscribe((posts: any[]) => {
            console.log(posts);
            // Refresh datatable on data change
            // refreshDataTable(this.dataTableElement, this.dataTableTrigger);
            this.isLoading = false;
          })
        );
      })
    );
  }

  ngOnDestroy() {
    // this.dataTableTrigger.unsubscribe();
    this.subscription.unsubscribe();
    this.routeParamsChange.next();
  }

  logout() {
    this.auth.signOut().then(() => {
      // this.navigation.redirectTo('login');
      this.router.navigateByUrl('login')
    }).catch((error: Error) => {
      // this.alert.error(error.message);
      console.log(error.message);
    });
  }



  // ngOnInit() {

  // }

  showMoreImages() {
    this.limit += 15;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  insertImage() {
    this.masonryImages.splice(0, 0, this.dummyPictures[0]);
    this.masonry.reloadItems();
    this.masonry.layout();
  }
  prependImage() {
    const image = this.dummyPictures[50];
    image[0] = true;
    this.masonryImages.push(image);
  }

  removeImage() {
    this.masonryImages.pop();
  }

  itemsLoaded() {
    console.log('itemsloaded');
  }
}
