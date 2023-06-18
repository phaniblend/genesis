                          import React, { useState, useEffect } from "react";
              import Exercise from "./Exercise";
              import html2canvas from 'html2canvas';
              import jsPDF from 'jspdf';
              import './App.css';
              
              function App() {
                const [imageData, setImageData] = useState(null);
  const angular_exercises = [
    {
      "exercise_number": 1,
      "title": "Introduction to Angular",
      "objective": "To understand the basic concepts of Angular.",
      "practical_application": "Imagine you are building a web application that requires a modular and scalable framework. You want to use Angular to simplify your development process.",
      "step_by_step_solution": [
        {
          "step": "Install Angular CLI globally using npm.",
          "code": "npm install -g @angular/cli"
        },
        {
          "step": "Create a new Angular project using Angular CLI.",
          "code": "ng new my-app"
        },
        {
          "step": "Navigate to the project directory.",
          "code": "cd my-app"
        },
        {
          "step": "Start the development server to view your application in a web browser.",
          "code": "ng serve --open"
        }
      ]
    },
    {
      "exercise_number": 2,
      "title": "Components in Angular",
      "objective": "To learn how to create and use components in Angular.",
      "practical_application": "Imagine you are building a web application that requires a reusable component to display a user profile. You want to create an Angular component for this purpose.",
      "step_by_step_solution": [
        {
          "step": "Create a new component using Angular CLI.",
          "code": "ng generate component user-profile"
        },
        {
          "step": "Open the newly created component file (`user-profile.component.ts`) and define the component's logic and template.",
          "code": "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-user-profile',\n  templateUrl: './user-profile.component.html',\n  styleUrls: ['./user-profile.component.css']\n})\nexport class UserProfileComponent {\n  // Add component logic here\n}"
        },
        {
          "step": "Open the component's template file (`user-profile.component.html`) and define the component's HTML structure.",
          "code": "<div>\n  <h1>User Profile</h1>\n  <!-- Add user profile information here -->\n</div>"
        },
        {
          "step": "Use the component in another Angular component by adding its selector to the template.",
          "code": "<app-user-profile></app-user-profile>"
        }
      ]
    },
    {
      "exercise_number": 3,
      "title": "Data Binding in Angular",
      "objective": "To understand how to perform data binding in Angular.",
      "practical_application": "Imagine you are building a web application that requires data binding to display dynamic content. You want to practice different types of data binding in Angular.",
      "step_by_step_solution": [
        {
          "step": "Perform interpolation to display a variable value in the template.",
          "code": "<h1>{{ pageTitle }}</h1>"
        },
        {
          "step": "Use property binding to conditionally apply a CSS class.",
          "code": "<div [class.highlighted]=\"isActive\">Content</div>"
        },
        {
          "step": "Bind to an event to respond to user interactions.",
          "code": "<button (click)=\"handleClick()\">Click me</button>"
        },
        {
          "step": "Use two-way binding to create a form input with synchronized model and view values.",
          "code": "<input [(ngModel)]=\"username\" />"
        }
      ]
    },
    {
      "exercise_number": 4,
      "title": "Services and Dependency Injection in Angular",
      "objective": "To learn how to create services and use dependency injection in Angular.",
      "practical_application": "Imagine you are building a web application that requires a data service to fetch and manipulate user data. You want to create an Angular service and inject it into your components.",
      "step_by_step_solution": [
        {
          "step": "Create a new service using Angular CLI.",
          "code": "ng generate service user-data"
        },
        {
          "step": "Open the newly created service file (`user-data.service.ts`) and define the service's methods and data.",
          "code": "import { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class UserDataService {\n  // Add service logic here\n}"
        },
        {
          "step": "Inject the service into a component by adding it to the component's constructor.",
          "code": "import { Component } from '@angular/core';\nimport { UserDataService } from './user-data.service';\n\n@Component({\n  // Component metadata\n})\nexport class UserProfileComponent {\n  constructor(private userDataService: UserDataService) {\n    // Use the service here\n  }\n}"
        }
      ]
    },
    {
      "exercise_number": 5,
      "title": "Routing in Angular",
      "objective": "To understand how to implement routing in Angular.",
      "practical_application": "Imagine you are building a multi-page web application that requires navigation between different views. You want to implement routing in Angular to enable seamless navigation.",
      "step_by_step_solution": [
        {
          "step": "Set up routes in your Angular application.",
          "code": "import { NgModule } from '@angular/core';\nimport { RouterModule, Routes } from '@angular/router';\n\nconst routes: Routes = [\n  { path: '', component: HomeComponent },\n  { path: 'about', component: AboutComponent },\n  { path: 'contact', component: ContactComponent },\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }"
        },
        {
          "step": "Add the router outlet to your application's template.",
          "code": "<router-outlet></router-outlet>"
        },
        {
          "step": "Create navigation links using the routerLink directive.",
          "code": "<a routerLink=\"/about\">About</a>"
        },
        {
          "step": "Implement programmatic navigation using the router service.",
          "code": "import { Component } from '@angular/core';\nimport { Router } from '@angular/router';\n\n@Component({\n  // Component metadata\n})\nexport class HomeComponent {\n  constructor(private router: Router) {}\n\n  navigateToAbout() {\n    this.router.navigate(['/about']);\n  }\n}"
        }
      ]
    },
    {
      "exercise_number": 6,
      "title": "Forms in Angular",
      "objective": "To understand how to work with forms in Angular.",
      "practical_application": "Imagine you are building a web application that requires user input through forms. You want to learn how to create and validate forms in Angular.",
      "step_by_step_solution": [
        {
          "step": "Create a template-driven form in Angular.",
          "code": "<form #myForm=\"ngForm\" (ngSubmit)=\"submitForm(myForm)\">\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" name=\"name\" ngModel>\n  <button type=\"submit\">Submit</button>\n</form>"
        },
        {
          "step": "Implement form validation using built-in directives.",
          "code": "<form #myForm=\"ngForm\" (ngSubmit)=\"submitForm(myForm)\">\n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" name=\"email\" ngModel required email>\n  <div *ngIf=\"myForm.controls.email.invalid && (myForm.controls.email.dirty || myForm.controls.email.touched)\">\n    <div *ngIf=\"myForm.controls.email.errors.required\">Email is required.</div>\n    <div *ngIf=\"myForm.controls.email.errors.email\">Invalid email format.</div>\n  </div>\n  <button type=\"submit\">Submit</button>\n</form>"
        },
        {
          "step": "Access form values and implement form submission.",
          "code": "submitForm(form) {\n  if (form.valid) {\n    console.log(form.value);\n    // Perform form submission logic\n  }\n}"
        },
        {
          "step": "Create a reactive form in Angular.",
          "code": "import { Component, OnInit } from '@angular/core';\nimport { FormBuilder, FormGroup, Validators } from '@angular/forms';\n\n@Component({\n  // Component metadata\n})\nexport class ReactiveFormComponent implements OnInit {\n  myForm: FormGroup;\n\n  constructor(private fb: FormBuilder) {}\n\n  ngOnInit() {\n    this.myForm = this.fb.group({\n      name: ['', Validators.required],\n      email: ['', [Validators.required, Validators.email]],\n    });\n  }\n\n  submitForm() {\n    if (this.myForm.valid) {\n      console.log(this.myForm.value);\n      // Perform form submission logic\n    }\n  }\n}"
        }
      ]
    },
    {
      "exercise_number": 7,
      "title": "HTTP Requests in Angular",
      "objective": "To understand how to make HTTP requests in Angular.",
      "practical_application": "Imagine you are building a web application that requires data retrieval and submission through HTTP requests. You want to learn how to perform HTTP requests in Angular.",
      "step_by_step_solution": [
        {
          "step": "Import the HttpClientModule into your Angular application.",
          "code": "import { HttpClientModule } from '@angular/common/http';\n\n@NgModule({\n  imports: [HttpClientModule],\n  // Other module metadata\n})\nexport class AppModule { }"
        },
        {
          "step": "Create a service to handle HTTP requests.",
          "code": "import { Injectable } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class DataService {\n  constructor(private http: HttpClient) {}\n\n  getData() {\n    return this.http.get('/api/data');\n  }\n\n  postData(data) {\n    return this.http.post('/api/data', data);\n  }\n}"
        },
        {
          "step": "Inject the service into a component and use it to make HTTP requests.",
          "code": "import { Component } from '@angular/core';\nimport { DataService } from './data.service';\n\n@Component({\n  // Component metadata\n})\nexport class DataComponent {\n  constructor(private dataService: DataService) {}\n\n  fetchData() {\n    this.dataService.getData().subscribe((data) => {\n      // Handle fetched data\n    });\n  }\n\n  postData() {\n    const data = { /* Data to be sent */ };\n    this.dataService.postData(data).subscribe((response) => {\n      // Handle response\n    });\n  }\n}"
        }
      ]
    },
    {
      "exercise_number": 8,
      "title": "Directives in Angular",
      "objective": "To understand how to use directives in Angular.",
      "practical_application": "Imagine you are building a web application that requires custom behaviors and styling on certain elements. You want to learn how to create and use directives in Angular.",
      "step_by_step_solution": [
        {
          "step": "Create a custom attribute directive in Angular.",
          "code": "import { Directive, ElementRef, OnInit } from '@angular/core';\n\n@Directive({\n  selector: '[appHighlight]'\n})\nexport class HighlightDirective implements OnInit {\n  constructor(private el: ElementRef) {}\n\n  ngOnInit() {\n    this.el.nativeElement.style.backgroundColor = 'yellow';\n  }\n}"
        },
        {
          "step": "Use the directive on an HTML element.",
          "code": "<p appHighlight>Highlighted text</p>"
        },
        {
          "step": "Create a custom structural directive in Angular.",
          "code": "import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';\n\n@Directive({\n  selector: '[appUnless]'\n})\nexport class UnlessDirective {\n  constructor(\n    private templateRef: TemplateRef<any>,\n    private viewContainer: ViewContainerRef\n  ) {}\n\n  @Input() set appUnless(condition: boolean) {\n    if (!condition) {\n      this.viewContainer.createEmbeddedView(this.templateRef);\n    } else {\n      this.viewContainer.clear();\n    }\n  }\n}"
        },
        {
          "step": "Use the directive with a conditional expression.",
          "code": "<div *appUnless=\"isConditionMet\">Content to be shown unless the condition is met</div>"
        }
      ]
    },
    {
      "exercise_number": 9,
      "title": "Angular Forms with Validation",
      "objective": "To learn how to create forms with validation in Angular.",
      "practical_application": "Imagine you are building a web application that requires form inputs with validation. You want to create forms in Angular and implement validation rules.",
      "step_by_step_solution": [
        {
          "step": "Create a form group with validation rules in Angular.",
          "code": "import { Component } from '@angular/core';\nimport { FormBuilder, FormGroup, Validators } from '@angular/forms';\n\n@Component({\n  // Component metadata\n})\nexport class MyFormComponent {\n  myForm: FormGroup;\n\n  constructor(private fb: FormBuilder) {\n    this.myForm = this.fb.group({\n      name: ['', Validators.required],\n      email: ['', [Validators.required, Validators.email]],\n      password: ['', Validators.minLength(6)]\n    });\n  }\n}"
        },
        {
          "step": "Display form validation errors in the template.",
          "code": "<form [formGroup]=\"myForm\">\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" formControlName=\"name\">\n  <div *ngIf=\"myForm.controls.name.invalid && (myForm.controls.name.dirty || myForm.controls.name.touched)\">\n    <div *ngIf=\"myForm.controls.name.errors.required\">Name is required.</div>\n  </div>\n  <!-- Other form fields -->\n</form>"
        },
        {
          "step": "Disable form submission until the form is valid.",
          "code": "<form [formGroup]=\"myForm\">\n  <!-- Form fields -->\n  <button type=\"submit\" [disabled]=\"myForm.invalid\">Submit</button>\n</form>"
        }
      ]
    },
    {
      "exercise_number": 10,
      "title": "Unit Testing in Angular",
      "objective": "To understand how to write unit tests for Angular applications.",
      "practical_application": "Imagine you are building a web application in Angular and you want to ensure its code quality and functionality by writing unit tests.",
      "step_by_step_solution": [
        {
          "step": "Set up testing environment in Angular.",
          "code": "import { TestBed } from '@angular/core/testing';\n\nimport { MyComponent } from './my.component';\n\ndescribe('MyComponent', () => {\n  beforeEach(async () => {\n    await TestBed.configureTestingModule({\n      declarations: [MyComponent]\n    }).compileComponents();\n  });\n\n  it('should create the component', () => {\n    const fixture = TestBed.createComponent(MyComponent);\n    const component = fixture.componentInstance;\n    expect(component).toBeTruthy();\n  });\n});"
        },
        {
          "step": "Write tests for component logic and behavior.",
          "code": "it('should display the correct title', () => {\n  const fixture = TestBed.createComponent(MyComponent);\n  const component = fixture.componentInstance;\n  component.title = 'Test Title';\n  fixture.detectChanges();\n\n  const titleElement = fixture.nativeElement.querySelector('h1');\n  expect(titleElement.textContent).toContain('Test Title');\n});"
        },
        {
          "step": "Test component interactions and events.",
          "code": "it('should call the onSubmit function on form submission', () => {\n  const fixture = TestBed.createComponent(MyComponent);\n  const component = fixture.componentInstance;\n  fixture.detectChanges();\n\n  spyOn(component, 'onSubmit');\n\n  const formElement = fixture.nativeElement.querySelector('form');\n  formElement.dispatchEvent(new Event('submit'));\n\n  expect(component.onSubmit).toHaveBeenCalled();\n});"
        },
        {
          "step": "Test services and external dependencies.",
          "code": "it('should fetch and display data from the data service', () => {\n  const fixture = TestBed.createComponent(MyComponent);\n  const component = fixture.componentInstance;\n\n  const dataService = TestBed.inject(DataService);\n  spyOn(dataService, 'getData').and.returnValue(of({ title: 'Test Data' }));\n\n  fixture.detectChanges();\n\n  const titleElement = fixture.nativeElement.querySelector('h1');\n  expect(titleElement.textContent).toContain('Test Data');\n});"
        }
      ]
    },
        {
          "exercise_number": 11,
          "title": "Component Lifecycle Hooks in Angular",
          "objective": "To understand the lifecycle hooks in Angular components.",
          "practical_application": "Imagine you are building a web application in Angular that requires certain actions to be performed at specific stages of a component's lifecycle. You want to learn how to utilize the lifecycle hooks in Angular components.",
          "step_by_step_solution": [
            {
              "step": "Implement the OnInit lifecycle hook.",
              "code": "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  // Component metadata\n})\nexport class MyComponent implements OnInit {\n  ngOnInit() {\n    // Perform initialization tasks\n  }\n}"
            },
            {
              "step": "Implement the OnDestroy lifecycle hook.",
              "code": "import { Component, OnDestroy } from '@angular/core';\n\n@Component({\n  // Component metadata\n})\nexport class MyComponent implements OnDestroy {\n  ngOnDestroy() {\n    // Perform cleanup tasks\n  }\n}"
            },
            {
              "step": "Implement other lifecycle hooks as needed (e.g., OnChanges, AfterViewInit, etc.).",
              "code": "import { Component, OnChanges, AfterViewInit } from '@angular/core';\n\n@Component({\n  // Component metadata\n})\nexport class MyComponent implements OnChanges, AfterViewInit {\n  ngOnChanges() {\n    // Respond to changes in input properties\n  }\n\n  ngAfterViewInit() {\n    // Perform tasks after the component's view has been initialized\n  }\n}"
            }
          ]
        },
        {
          "exercise_number": 12,
          "title": "Angular Routing with Parameters",
          "objective": "To understand how to implement routing with parameters in Angular.",
          "practical_application": "Imagine you are building a web application in Angular that requires dynamic routing with parameters. You want to learn how to implement routing with parameters to handle different scenarios in your application.",
          "step_by_step_solution": [
            {
              "step": "Define a route with a parameter in your route configuration.",
              "code": "import { NgModule } from '@angular/core';\nimport { RouterModule, Routes } from '@angular/router';\n\nconst routes: Routes = [\n  { path: 'users/:id', component: UserDetailComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  // Other module metadata\n})\nexport class AppRoutingModule { }"
            },
            {
              "step": "Access the route parameter in the component.",
              "code": "import { Component, OnInit } from '@angular/core';\nimport { ActivatedRoute } from '@angular/router';\n\n@Component({\n  // Component metadata\n})\nexport class UserDetailComponent implements OnInit {\n  userId: string;\n\n  constructor(private route: ActivatedRoute) {}\n\n  ngOnInit() {\n    this.userId = this.route.snapshot.paramMap.get('id');\n  }\n}"
            },
            {
              "step": "Update the component when the route parameter changes.",
              "code": "import { Component, OnInit } from '@angular/core';\nimport { ActivatedRoute, ParamMap } from '@angular/router';\n\n@Component({\n  // Component metadata\n})\nexport class UserDetailComponent implements OnInit {\n  userId: string;\n\n  constructor(private route: ActivatedRoute) {}\n\n  ngOnInit() {\n    this.route.paramMap.subscribe((params: ParamMap) => {\n      this.userId = params.get('id');\n    });\n  }\n}"
            }
          ]
        },
        {
          "exercise_number": 13,
          "title": "Angular Pipes",
          "objective": "To understand how to use pipes in Angular.",
          "practical_application": "Imagine you are building a web application in Angular that requires data transformation and formatting. You want to learn how to use pipes in Angular to simplify data manipulation.",
          "step_by_step_solution": [
            {
              "step": "Use built-in pipes in Angular for common transformations.",
              "code": "<p>{{ myValue | uppercase }}</p>\n<p>{{ myDate | date }}</p>\n<p>{{ myNumber | currency }}</p>"
            },
            {
              "step": "Create custom pipes in Angular for specific data formatting.",
              "code": "import { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({\n  name: 'myCustomPipe'\n})\nexport class MyCustomPipe implements PipeTransform {\n  transform(value: any, args?: any): any {\n    // Perform custom transformation\n  }\n}"
            },
            {
              "step": "Use custom pipes in templates for data formatting.",
              "code": "<p>{{ myValue | myCustomPipe }}</p>"
            }
          ]
        },
        {
          "exercise_number": 14,
          "title": "Angular Forms with Reactive Approach",
          "objective": "To understand how to create forms using the reactive approach in Angular.",
          "practical_application": "Imagine you are building a web application in Angular that requires complex forms with advanced validation and dynamic form control manipulation. You want to learn how to create forms using the reactive approach in Angular.",
          "step_by_step_solution": [
            {
              "step": "Import the ReactiveFormsModule into your Angular application.",
              "code": "import { ReactiveFormsModule } from '@angular/forms';\n\n@NgModule({\n  imports: [ReactiveFormsModule],\n  // Other module metadata\n})\nexport class AppModule { }"
            },
            {
              "step": "Create a form group and form controls in the component.",
              "code": "import { Component } from '@angular/core';\nimport { FormBuilder, FormGroup, Validators } from '@angular/forms';\n\n@Component({\n  // Component metadata\n})\nexport class MyFormComponent {\n  myForm: FormGroup;\n\n  constructor(private fb: FormBuilder) {\n    this.myForm = this.fb.group({\n      name: ['', Validators.required],\n      email: ['', [Validators.required, Validators.email]]\n    });\n  }\n}"
            },
            {
              "step": "Bind form controls to input fields in the template.",
              "code": "<form [formGroup]=\"myForm\">\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" formControlName=\"name\">\n\n  <label for=\"email\">Email:</label>\n  <input type=\"email\" id=\"email\" formControlName=\"email\">\n\n  <button type=\"submit\" [disabled]=\"myForm.invalid\">Submit</button>\n</form>"
            },
            {
              "step": "Perform form validation and handle form submission.",
              "code": "submitForm() {\n  if (this.myForm.valid) {\n    console.log(this.myForm.value);\n    // Perform form submission logic\n  }\n}"
            }
          ]
        },
        {
          "exercise_number": 15,
          "title": "Angular Services and Dependency Injection",
          "objective": "To understand how to create services and use dependency injection in Angular.",
          "practical_application": "Imagine you are building a web application in Angular that requires a service to handle data retrieval and manipulation. You want to learn how to create services and use dependency injection to provide them to your components.",
          "step_by_step_solution": [
            {
              "step": "Create a new service using Angular CLI.",
              "code": "ng generate service data"
            },
            {
              "step": "Open the newly created service file (`data.service.ts`) and define the service's methods and data.",
              "code": "import { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class DataService {\n  // Add service logic here\n}"
            },
            {
              "step": "Inject the service into a component by adding it to the component's constructor.",
              "code": "import { Component } from '@angular/core';\nimport { DataService } from './data.service';\n\n@Component({\n  // Component metadata\n})\nexport class MyComponent {\n  constructor(private dataService: DataService) {\n    // Use the service here\n  }\n}"
            }
          ]
        },
        {
          "exercise_number": 16,
          "title": "Angular Interceptors",
          "objective": "To understand how to use interceptors in Angular for HTTP requests.",
          "practical_application": "Imagine you are building a web application in Angular that requires global handling of HTTP requests and responses. You want to learn how to use interceptors in Angular to intercept and modify HTTP requests and responses.",
          "step_by_step_solution": [
            {
              "step": "Create a new interceptor using Angular CLI.",
              "code": "ng generate interceptor my-interceptor"
            },
            {
              "step": "Open the newly created interceptor file (`my-interceptor.ts`) and implement the intercept method.",
              "code": "import { Injectable } from '@angular/core';\nimport { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';\n\n@Injectable()\nexport class MyInterceptor implements HttpInterceptor {\n  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {\n    // Modify the request or response here\n    return next.handle(request);\n  }\n}"
            },
            {
              "step": "Provide the interceptor in your app module.",
              "code": "import { NgModule } from '@angular/core';\nimport { HTTP_INTERCEPTORS } from '@angular/common/http';\nimport { MyInterceptor } from './my-interceptor';\n\n@NgModule({\n  providers: [\n    {\n      provide: HTTP_INTERCEPTORS,\n      useClass: MyInterceptor,\n      multi: true\n    }\n  ],\n  // Other module metadata\n})\nexport class AppModule { }"
            }
          ]
        },
        {
          "exercise_number": 17,
          "title": "Angular Animation",
          "objective": "To understand how to use animations in Angular.",
          "practical_application": "Imagine you are building a web application in Angular that requires animated transitions and effects. You want to learn how to use the Angular Animation module to create animations in your application.",
          "step_by_step_solution": [
            {
              "step": "Import the BrowserAnimationsModule into your Angular application.",
              "code": "import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\n\n@NgModule({\n  imports: [BrowserAnimationsModule],\n  // Other module metadata\n})\nexport class AppModule { }"
            },
            {
              "step": "Define animation triggers in your component's metadata.",
              "code": "import { Component } from '@angular/core';\nimport { trigger, state, style, animate, transition } from '@angular/animations';\n\n@Component({\n  animations: [\n    trigger('myAnimation', [\n      state('initial', style({ opacity: 0 })),\n      state('final', style({ opacity: 1 })),\n      transition('initial => final', animate('500ms'))\n    ])\n  ]\n})\nexport class MyComponent { }"
            },
            {
              "step": "Bind the animation trigger to an element in the template.",
              "code": "<div [@myAnimation]=\"animationState\"></div>"
            },
            {
              "step": "Control the animation state in the component's logic.",
              "code": "export class MyComponent {\n  animationState: string = 'initial';\n\n  startAnimation() {\n    this.animationState = 'final';\n  }\n}"
            }
          ]
        },
        {
          "exercise_number": 18,
        "title": "Angular Unit Testing with TestBed",
        "objective": "To understand how to write unit tests for Angular components using TestBed.",
        "practical_application": "Imagine you are building a web application in Angular and you want to ensure its code quality and functionality by writing unit tests using TestBed.",
        "step_by_step_solution": [
          {
            "step": "Set up testing environment in Angular.",
            "code": "import { TestBed, ComponentFixture } from '@angular/core/testing';\nimport { MyComponent } from './my.component';\n\ndescribe('MyComponent', () => {\n  let component: MyComponent;\n  let fixture: ComponentFixture<MyComponent>;\n\n  beforeEach(async () => {\n    await TestBed.configureTestingModule({\n      declarations: [MyComponent]\n    }).compileComponents();\n  });\n\n  beforeEach(() => {\n    fixture = TestBed.createComponent(MyComponent);\n    component = fixture.componentInstance;\n    fixture.detectChanges();\n  });\n\n  it('should create the component', () => {\n    expect(component).toBeTruthy();\n  });\n});"
          },
          {
            "step": "Write tests for component logic and behavior using TestBed utilities.",
            "code": "it('should display the correct title', () => {\n  expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Test Title');\n});"
          },
          {
            "step": "Mock dependencies and services using TestBed providers.",
            "code": "beforeEach(() => {\n  TestBed.configureTestingModule({\n    declarations: [MyComponent],\n    providers: [\n      { provide: DataService, useValue: mockDataService }\n    ]\n  }).compileComponents();\n});"
          },
          {
            "step": "Test component interactions and events using TestBed utilities.",
            "code": "it('should call the onSubmit function on form submission', () => {\n  spyOn(component, 'onSubmit');\n  const formElement = fixture.nativeElement.querySelector('form');\n  formElement.dispatchEvent(new Event('submit'));\n  expect(component.onSubmit).toHaveBeenCalled();\n});"
          }
        ]
      },
      {
        "exercise_number": 19,
        "title": "Angular Lazy Loading",
        "objective": "To understand how to implement lazy loading in Angular for optimizing application performance.",
        "practical_application": "Imagine you are building a large-scale web application in Angular that requires multiple modules. You want to implement lazy loading to load modules only when they are needed, improving the initial load time and overall application performance.",
        "step_by_step_solution": [
          {
            "step": "Create a feature module for the module you want to lazy load.",
            "code": "ng generate module feature --route feature --module app.module"
          },
          {
            "step": "Update your routing configuration to use lazy loading.",
            "code": "const routes: Routes = [\n  { path: '', redirectTo: 'home', pathMatch: 'full' },\n  { path: 'home', component: HomeComponent },\n  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }\n];"
          },
          {
            "step": "Verify lazy loading by observing network requests in the browser's network tab.",
            "code": "// Open browser's network tab\n// Navigate to the feature route\n// Observe the network request for the feature module"
          }
        ]
      },
      {
        "exercise_number": 20,
        "title": "Angular Error Handling",
        "objective": "To understand how to handle errors in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular and you want to handle errors gracefully to provide a better user experience and debug the application effectively.",
        "step_by_step_solution": [
          {
            "step": "Create a global error handler service.",
            "code": "import { ErrorHandler } from '@angular/core';\n\n@Injectable()\nexport class GlobalErrorHandler implements ErrorHandler {\n  handleError(error: any): void {\n    // Handle error here\n  }\n}"
          },
          {
            "step": "Provide the global error handler in your app module.",
            "code": "import { NgModule, ErrorHandler } from '@angular/core';\nimport { GlobalErrorHandler } from './global-error-handler.service';\n\n@NgModule({\n  providers: [\n    { provide: ErrorHandler, useClass: GlobalErrorHandler }\n  ],\n  // Other module metadata\n})\nexport class AppModule { }"
          },
          {
            "step": "Handle errors in components and services.",
            "code": "export class MyComponent {\n  constructor(private dataService: DataService) {}\n\n  fetchData() {\n    this.dataService.getData().subscribe(\n      (data) => {\n        // Handle successful response\n      },\n      (error) => {\n        // Handle error\n      }\n    );\n  }\n}"
          }
        ]
      },
      {
        "exercise_number": 21,
        "title": "Angular Directives",
        "objective": "To understand how to use directives in Angular.",
        "practical_application": "Imagine you are building a web application in Angular that requires DOM manipulation and custom behaviors. You want to learn how to use directives in Angular to achieve these requirements.",
        "step_by_step_solution": [
          {
            "step": "Create a custom directive using Angular CLI.",
            "code": "ng generate directive myDirective"
          },
          {
            "step": "Open the newly created directive file (`my-directive.directive.ts`) and define its behavior.",
            "code": "import { Directive, ElementRef, HostListener } from '@angular/core';\n\n@Directive({\n  selector: '[myDirective]'\n})\nexport class MyDirective {\n  constructor(private el: ElementRef) {}\n\n  @HostListener('mouseenter') onMouseEnter() {\n    // Handle mouse enter event\n  }\n\n  @HostListener('mouseleave') onMouseLeave() {\n    // Handle mouse leave event\n  }\n}"
          },
          {
            "step": "Use the custom directive in a component's template.",
            "code": "<div myDirective>My Element</div>"
          }
        ]
      },
      {
        "exercise_number": 22,
        "title": "Angular Internationalization (i18n)",
        "objective": "To understand how to implement internationalization (i18n) in Angular for multi-language support.",
        "practical_application": "Imagine you are building a web application in Angular that requires support for multiple languages. You want to learn how to implement internationalization (i18n) in Angular to provide localized content to users.",
        "step_by_step_solution": [
          {
            "step": "Enable i18n in your Angular application's configuration.",
            "code": "ng add @angular/localize"
          },
          {
            "step": "Mark translatable text in your templates using the `i18n` attribute.",
            "code": "<h1 i18n=\"@@pageTitle\">Welcome</h1>"
          },
          {
            "step": "Extract translatable text into translation files using the `ng xi18n` command.",
            "code": "ng xi18n"
          },
          {
            "step": "Provide translations for different languages in the generated translation files.",
            "code": "// messages.en.xlf (English translation)\n<trans-unit id=\"pageTitle\">\n  <source>Welcome</source>\n  <target>Bienvenue</target>\n</trans-unit>"
          },
          {
            "step": "Configure your application to use different language translations.",
            "code": "import { registerLocaleData } from '@angular/common';\nimport localeFr from '@angular/common/locales/fr';\n\nregisterLocaleData(localeFr);\n\n@NgModule({\n  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],\n  // Other module metadata\n})\nexport class AppModule { }"
          }
        ]
      },
      {
        "exercise_number": 23,
        "title": "Angular Material",
        "objective": "To understand how to use Angular Material components for building a modern and responsive user interface.",
        "practical_application": "Imagine you are building a web application in Angular and you want to enhance the user interface with modern and responsive components. You want to learn how to use Angular Material components to achieve this.",
        "step_by_step_solution": [
          {
            "step": "Install Angular Material and its dependencies.",
            "code": "ng add @angular/material"
          },
          {
            "step": "Import the required Angular Material modules in your application module.",
            "code": "import { NgModule } from '@angular/core';\nimport { MatInputModule } from '@angular/material/input';\n\n@NgModule({\n  imports: [MatInputModule],\n  // Other module metadata\n})\nexport class AppModule { }"
          },
          {
            "step": "Use Angular Material components in your templates.",
            "code": "<mat-form-field>\n  <mat-label>Username</mat-label>\n  <input matInput>\n</mat-form-field>"
          }
        ]
      },
      {
        "exercise_number": 24,
        "title": "Angular Testing with Jest",
        "objective": "To understand how to use Jest as a testing framework for Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular and you want to use Jest as the testing framework for your unit tests. You want to learn how to set up and write tests using Jest in Angular.",
        "step_by_step_solution": [
          {
            "step": "Set up Jest in your Angular application.",
            "code": "npm install --save-dev jest @types/jest jest-preset-angular"
          },
          {
            "step": "Update the `test` script in your `package.json` to use Jest.",
            "code": "\"test\": \"jest\""
          },
          {
            "step": "Write unit tests using Jest syntax.",
            "code": "import { TestBed } from '@angular/core/testing';\nimport { MyComponent } from './my.component';\n\ndescribe('MyComponent', () => {\n  let component: MyComponent;\n\n  beforeEach(() => {\n    TestBed.configureTestingModule({\n      declarations: [MyComponent]\n    });\n\n    component = TestBed.createComponent(MyComponent).componentInstance;\n  });\n\n  it('should create the component', () => {\n    expect(component).toBeTruthy();\n  });\n});"
          }
        ]
      },
      {
        "exercise_number": 25,
        "title": "Angular Performance Optimization",
        "objective": "To understand how to optimize the performance of Angular applications.",
        "practical_application": "Imagine you are building a large-scale web application in Angular and you want to optimize its performance to provide a better user experience. You want to learn how to apply performance optimization techniques in Angular.",
        "step_by_step_solution": [
          {
            "step": "Analyze and optimize the bundle size of your Angular application.",
            "code": "// Use Angular CLI commands to analyze and optimize bundle size\nng build --prod\n"
          },
          {
            "step": "Apply change detection strategies to optimize the rendering performance.",
            "code": "import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'my-component',\n  templateUrl: './my.component.html',\n  changeDetection: ChangeDetectionStrategy.OnPush\n})\nexport class MyComponent {}"
          },
          {
            "step": "Lazy load modules and components to improve initial load time.",
            "code": "// Use Angular's lazy loading feature for modules\nconst routes: Routes = [\n  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }\n];"
          },
          {
            "step": "Use trackBy function in ngFor to optimize rendering performance for lists.",
            "code": "<ul>\n  <li *ngFor=\"let item of items; trackBy: trackByFn\">{{ item }}</li>\n</ul>\n\ntrackByFn(index: number, item: any) {\n  return item.id;\n}"
          }
        ]
      },
      {
        "exercise_number": 26,
        "title": "Angular Server-Side Rendering (SSR)",
        "objective": "To understand how to implement server-side rendering (SSR) in Angular for improved performance and SEO.",
        "practical_application": "Imagine you are building a web application in Angular and you want to implement server-side rendering (SSR) to improve the initial load time and enable better search engine optimization (SEO). You want to learn how to implement SSR in Angular.",
        "step_by_step_solution": [
          {
            "step": "Set up Angular Universal in your Angular application.",
            "code": "ng add @nguniversal/express-engine"
          },
          {
            "step": "Build the server-side rendered version of your Angular application.",
            "code": "npm run build:ssr"
          },
          {
            "step": "Start the server to serve the server-side rendered application.",
            "code": "npm run serve:ssr"
          }
        ]
      },
      {
        "exercise_number": 27,
        "title": "Angular Deployment",
        "objective": "To understand how to deploy Angular applications to different environments.",
        "practical_application": "Imagine you are ready to deploy your Angular application to different environments such as development, staging, and production. You want to learn how to deploy Angular applications to various environments.",
        "step_by_step_solution": [
          {
            "step": "Build your Angular application for production.",
            "code": "ng build --prod"
          },
          {
            "step": "Deploy the generated `dist` folder to your chosen hosting environment.",
            "code": "// Example deployment options:\n- Upload the `dist` folder to a web server\n- Deploy to a cloud hosting service\n- Use a CI/CD pipeline for automated deployments"
          }
        ]
      },
      {
        "exercise_number": 28,
        "title": "Angular Best Practices and Tips",
        "objective": "To learn and apply best practices and tips for Angular development.",
        "practical_application": "Imagine you are an Angular developer and you want to improve your development skills by learning and applying best practices and tips specific to Angular.",
        "step_by_step_solution": [
          {
            "step": "Follow the Angular style guide.",
            "code": "https://angular.io/guide/styleguide"
          },
          {
            "step": "Use Angular CLI for project scaffolding and automation.",
            "code": "ng new my-app\nng generate component my-component"
          },
          {
            "step": "Use TypeScript for type safety and better tooling.",
            "code": "https://www.typescriptlang.org/"
          },
          {
            "step": "Optimize your Angular application for performance.",
            "code": "https://angular.io/guide/performance-optimization"
          },
          {
            "step": "Keep your Angular dependencies up to date.",
            "code": "npm update @angular/core"
          }
        ]
      },
      {
        "exercise_number": 29,
        "title": "Angular Security",
        "objective": "To understand and implement security best practices in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular and you want to ensure its security. You want to learn and implement security best practices specific to Angular applications.",
        "step_by_step_solution": [
          {
            "step": "Implement secure authentication and authorization mechanisms.",
            "code": "// Use libraries like Angular JWT or Angular Fire for authentication\n// Implement role-based access control (RBAC) for authorization"
          },
          {
            "step": "Apply input validation and sanitization to prevent security vulnerabilities.",
            "code": "// Use Angular's built-in form validation features\n// Sanitize user inputs to prevent cross-site scripting (XSS) attacks"
          },
          {
            "step": "Secure API requests with proper authentication and authorization.",
            "code": "// Include access tokens or JWTs in API requests\n// Use HTTPS to encrypt communication"
          }
        ]
      },
      {
        "exercise_number": 30,
        "title": "Angular Debugging and Error Handling",
        "objective": "To learn and apply effective debugging techniques and error handling strategies in Angular.",
        "practical_application": "Imagine you are an Angular developer and you want to improve your debugging and error handling skills. You want to learn and apply effective techniques and strategies for debugging and error handling in Angular.",
        "step_by_step_solution": [
          {
            "step": "Use browser developer tools for debugging Angular applications.",
            "code": "// Inspect elements, check console logs, and set breakpoints"
          },
          {
            "step": "Utilize Angular's error handling mechanisms.",
            "code": "// Use Angular's error handling hooks such as onError and error handling services"
          },
          {
            "step": "Implement proper error logging and monitoring.",
            "code": "// Use logging libraries or services to log and monitor errors\n// Set up error tracking tools like Sentry or Rollbar"
          }
        ]
      },
      {
        "exercise_number": 31,
        "title": "Angular Form Validation",
        "objective": "To understand and implement form validation in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular that requires user input validation. You want to learn and implement form validation techniques in Angular.",
        "step_by_step_solution": [
          {
            "step": "Apply built-in form validation attributes.",
            "code": "<input type=\"text\" required>"
          },
          {
            "step": "Implement custom form validation using Angular's Validators.",
            "code": "import { FormBuilder, FormGroup, Validators } from '@angular/forms';\n\nexport class MyComponent {\n  myForm: FormGroup;\n\n  constructor(private formBuilder: FormBuilder) {\n    this.myForm = this.formBuilder.group({\n      email: ['', [Validators.required, Validators.email]],\n      password: ['', Validators.required]\n    });\n  }\n}"
          },
          {
            "step": "Display validation errors in the template.",
            "code": "<div *ngIf=\"myForm.get('email').invalid && (myForm.get('email').dirty || myForm.get('email').touched)\">\n  <div *ngIf=\"myForm.get('email').errors.required\">Email is required.</div>\n  <div *ngIf=\"myForm.get('email').errors.email\">Invalid email format.</div>\n</div>"
          }
        ]
      },
      {
        "exercise_number": 32,
        "title": "Angular Routing and Navigation",
        "objective": "To understand and implement routing and navigation in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular that requires multiple views and navigation between them. You want to learn and implement routing and navigation in Angular.",
        "step_by_step_solution": [
          {
            "step": "Set up Angular Router in your application.",
            "code": "import { RouterModule, Routes } from '@angular/router';\n\nconst routes: Routes = [\n  { path: 'home', component: HomeComponent },\n  { path: 'about', component: AboutComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }"
          },
          {
            "step": "Add router outlets and links in your template for navigation.",
            "code": "<a routerLink=\"/home\">Home</a>\n<a routerLink=\"/about\">About</a>\n\n<router-outlet></router-outlet>"
          },
          {
            "step": "Implement programmatic navigation using the Router service.",
            "code": "import { Router } from '@angular/router';\n\nexport class MyComponent {\n  constructor(private router: Router) {}\n\n  goToAboutPage() {\n    this.router.navigate(['/about']);\n  }\n}"
          }
        ]
      },
      {
        "exercise_number": 33,
        "title": "Angular Pipes",
        "objective": "To understand and use pipes for data transformation in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular that requires data transformation and formatting. You want to learn and use Angular pipes to achieve these transformations.",
        "step_by_step_solution": [
          {
            "step": "Use built-in pipes for common transformations.",
            "code": "<p>{{ dateValue | date }}</p>\n<p>{{ textValue | uppercase }}</p>"
          },
          {
            "step": "Create custom pipes for custom data transformations.",
            "code": "import { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({\n  name: 'myCustomPipe'\n})\nexport class MyCustomPipe implements PipeTransform {\n  transform(value: any, args?: any): any {\n    // Perform custom transformation\n    return transformedValue;\n  }\n}"
          },
          {
            "step": "Use custom pipes in your templates.",
            "code": "<p>{{ someValue | myCustomPipe }}</p>"
          }
        ]
      },
      {
        "exercise_number": 34,
        "title": "Angular Reactive Forms",
        "objective": "To understand and use reactive forms in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular that requires complex forms and form validations. You want to learn and use reactive forms in Angular to handle form-related tasks.",
        "step_by_step_solution": [
          {
            "step": "Import the required form-related modules.",
            "code": "import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';\n\n@NgModule({\n  imports: [ReactiveFormsModule],\n  // Other module metadata\n})\nexport class AppModule { }"
          },
          {
            "step": "Create a form group and form controls.",
            "code": "export class MyComponent {\n  myForm: FormGroup;\n\n  constructor() {\n    this.myForm = new FormGroup({\n      name: new FormControl('', Validators.required),\n      email: new FormControl('', Validators.email)\n    });\n  }\n}"
          },
          {
            "step": "Bind form controls to input fields in the template.",
            "code": "<input type=\"text\" [formControl]=\"myForm.get('name')\">\n<input type=\"email\" [formControl]=\"myForm.get('email')\">"
          }
        ]
      },
      {
        "exercise_number": 35,
        "title": "Angular HTTP Requests",
        "objective": "To understand and make HTTP requests in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular that requires communication with a server through HTTP requests. You want to learn how to make HTTP requests in Angular.",
        "step_by_step_solution": [
          {
            "step": "Import the HttpClient module and inject it into your component.",
            "code": "import { HttpClient } from '@angular/common/http';\n\nexport class MyComponent {\n  constructor(private http: HttpClient) {}\n}"
          },
          {
            "step": "Make HTTP GET requests.",
            "code": "this.http.get('https://api.example.com/data').subscribe((response) => {\n  // Handle response\n});"
          },
          {
            "step": "Make HTTP POST requests.",
            "code": "const data = { name: 'John', age: 30 };\n\nthis.http.post('https://api.example.com/data', data).subscribe((response) => {\n  // Handle response\n});"
          }
        ]
      },
      {
        "exercise_number": 36,
        "title": "Angular Interceptors",
        "objective": "To understand and use interceptors for handling HTTP requests and responses in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular that requires global handling of HTTP requests and responses. You want to learn how to use interceptors in Angular to implement such behavior.",
        "step_by_step_solution": [
          {
            "step": "Create an interceptor class.",
            "code": "import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';\nimport { Observable } from 'rxjs';\n\nexport class MyInterceptor implements HttpInterceptor {\n  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {\n    // Handle request\n    // Optionally modify the request\n    // Handle response\n    return next.handle(request);\n  }\n}"
          },
          {
            "step": "Provide the interceptor in your app module.",
            "code": "import { NgModule, HTTP_INTERCEPTORS } from '@angular/core';\nimport { MyInterceptor } from './my-interceptor';\n\n@NgModule({\n  providers: [\n    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }\n  ],\n  // Other module metadata\n})\nexport class AppModule { }"
          }
        ]
      },
      {
        "exercise_number": 37,
        "title": "Angular Unit Testing",
        "objective": "To understand and write unit tests for Angular applications using testing frameworks like Jasmine and Karma.",
        "practical_application": "Imagine you are building a web application in Angular and you want to ensure its quality by writing unit tests. You want to learn how to write unit tests for Angular components, services, and other modules.",
        "step_by_step_solution": [
          {
            "step": "Set up the testing environment with Karma and Jasmine.",
            "code": "// Angular CLI sets up the testing environment by default\n// You can run tests using the `ng test` command"
          },
          {
            "step": "Write unit tests for Angular components.",
            "code": "import { ComponentFixture, TestBed } from '@angular/core/testing';\nimport { MyComponent } from './my.component';\n\ndescribe('MyComponent', () => {\n  let component: MyComponent;\n  let fixture: ComponentFixture<MyComponent>;\n\n  beforeEach(async () => {\n    await TestBed.configureTestingModule({\n      declarations: [MyComponent]\n    }).compileComponents();\n\n    fixture = TestBed.createComponent(MyComponent);\n    component = fixture.componentInstance;\n  });\n\n  it('should create the component', () => {\n    expect(component).toBeTruthy();\n  });\n});"
          },
          {
            "step": "Write unit tests for Angular services.",
            "code": "import { TestBed } from '@angular/core/testing';\nimport { MyService } from './my.service';\n\ndescribe('MyService', () => {\n  let service: MyService;\n\n  beforeEach(() => {\n    TestBed.configureTestingModule({\n      providers: [MyService]\n    });\n\n    service = TestBed.inject(MyService);\n  });\n\n  it('should be created', () => {\n    expect(service).toBeTruthy();\n  });\n});"
          }
        ]
      },
      {
        "exercise_number": 38,
        "title": "Angular End-to-End Testing with Protractor",
        "objective": "To understand and perform end-to-end testing in Angular applications using Protractor.",
        "practical_application": "Imagine you are building a web application in Angular and you want to ensure its functionality by performing end-to-end tests. You want to learn how to use Protractor for end-to-end testing in Angular.",
        "step_by_step_solution": [
          {
            "step": "Set up Protractor in your Angular application.",
            "code": "ng e2e --port 4202"
          },
          {
            "step": "Write end-to-end tests using Protractor.",
            "code": "import { browser, by, element } from 'protractor';\n\ndescribe('MyApp', () => {\n  it('should display welcome message', () => {\n    browser.get('/');\n    expect(element(by.css('h1')).getText()).toEqual('Welcome to MyApp!');\n  });\n});"
          },
          {
            "step": "Run end-to-end tests with Protractor.",
            "code": "ng e2e"
          }
        ]
      },
      {
        "exercise_number": 39,
        "title": "Angular Lazy Loading",
        "objective": "To understand and implement lazy loading in Angular for optimizing the application's initial load time.",
        "practical_application": "Imagine you are building a large-scale Angular application with multiple feature modules. You want to optimize the initial load time of your application by implementing lazy loading for feature modules.",
        "step_by_step_solution": [
          {
            "step": "Create a separate module for the feature you want to lazily load.",
            "code": "import { NgModule } from '@angular/core';\nimport { RouterModule, Routes } from '@angular/router';\nimport { FeatureComponent } from './feature.component';\n\nconst routes: Routes = [\n  { path: '', component: FeatureComponent }\n];\n\n@NgModule({\n  imports: [RouterModule.forChild(routes)],\n  exports: [RouterModule]\n})\nexport class FeatureModule { }"
          },
          {
            "step": "Configure your main app module to use lazy loading for the feature module.",
            "code": "import { NgModule } from '@angular/core';\nimport { Routes, RouterModule } from '@angular/router';\n\nconst routes: Routes = [\n  { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }\n];\n\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }"
          }
        ]
      },
      {
        "exercise_number": 40,
        "title": "Angular Animation",
        "objective": "To understand and implement animations in Angular applications using the Angular Animation API.",
        "practical_application": "Imagine you are building a web application in Angular and you want to enhance the user experience by adding animations. You want to learn how to use the Angular Animation API to implement animations in Angular.",
        "step_by_step_solution": [
          {
            "step": "Import the required animation-related modules.",
            "code": "import { trigger, state, style, animate, transition } from '@angular/animations';\n\n@NgModule({\n  imports: [BrowserAnimationsModule],\n  // Other module metadata\n})\nexport class AppModule { }"
          },
          {
            "step": "Define animations using the Angular Animation API.",
            "code": "export const fadeInOutAnimation = trigger('fadeInOut', [\n  state('void', style({ opacity: 0 })),\n  transition(':enter, :leave', [\n    animate('500ms', style({ opacity: 1 }))\n  ])\n]);"
          },
          {
            "step": "Apply animations to elements in your templates.",
            "code": "<div [@fadeInOut]></div>"
          }
        ]
      },
      {
        "exercise_number": 41,
        "title": "Angular Accessibility (a11y)",
        "objective": "To understand and implement accessibility best practices in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular and you want to ensure its accessibility for all users. You want to learn and implement accessibility best practices in Angular.",
        "step_by_step_solution": [
          {
            "step": "Use semantic HTML elements for better accessibility.",
            "code": "<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>"
          },
          {
            "step": "Provide appropriate alternative text for images.",
            "code": "<img src=\"image.jpg\" alt=\"Description of the image\">"
          },
          {
            "step": "Ensure keyboard accessibility for interactive elements.",
            "code": "<button (click)=\"doSomething()\" (keydown.enter)=\"doSomething()\">Click me</button>"
          }
        ]
      },
      {
        "exercise_number": 42,
        "title": "Angular Internationalization (i18n)",
        "objective": "To understand and implement internationalization (i18n) in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular that needs to support multiple languages. You want to learn how to implement internationalization in Angular to provide localized versions of your application.",
        "step_by_step_solution": [
          {
            "step": "Extract translatable strings from your templates and TypeScript files.",
            "code": "ng xi18n"
          },
          {
            "step": "Configure and generate translation files.",
            "code": "ng add @angular/localize\nng extract-i18n --output-path=locale"
          },
          {
            "step": "Translate the extracted strings in the generated translation files.",
            "code": "// Example translation file for French (fr)\n{\n  \"Hello\": \"Bonjour\",\n  \"Welcome\": \"Bienvenue\"\n}"
          },
          {
            "step": "Use the Angular Localization API to display the translated strings.",
            "code": "<p i18n>Hello</p>\n<p i18n=\"Welcome\">Welcome</p>"
          }
        ]
      },
      {
        "exercise_number": 43,
        "title": "Angular Service Workers and Progressive Web Apps (PWA)",
        "objective": "To understand and implement service workers and Progressive Web Apps (PWA) in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular and you want to provide an offline experience and other PWA features. You want to learn how to implement service workers and turn your Angular application into a Progressive Web App.",
        "step_by_step_solution": [
          {
            "step": "Generate a service worker file using Angular's built-in mechanism.",
            "code": "ng add @angular/pwa"
          },
          {
            "step": "Configure the service worker in the ngsw-config.json file.",
            "code": "// Configure caching strategies, offline fallback, etc."
          },
          {
            "step": "Build and deploy your Angular application as a Progressive Web App.",
            "code": "ng build --prod\n// Deploy the generated 'dist' folder to a web server"
          }
        ]
      },
      {
        "exercise_number": 44,
        "title": "Angular Data Persistence",
        "objective": "To understand and implement data persistence in Angular applications using technologies like local storage, session storage, and HTTP APIs.",
        "practical_application": "Imagine you are building a web application in Angular that requires data persistence. You want to learn and implement various data persistence techniques in Angular, such as storing data in local storage, session storage, or making HTTP requests to a backend API.",
        "step_by_step_solution": [
          {
            "step": "Store data in local storage.",
            "code": "// Save data\nlocalStorage.setItem('key', JSON.stringify(data));\n\n// Retrieve data\nconst savedData = JSON.parse(localStorage.getItem('key'));"
          },
          {
            "step": "Store data in session storage.",
            "code": "// Save data\nsessionStorage.setItem('key', JSON.stringify(data));\n\n// Retrieve data\nconst savedData = JSON.parse(sessionStorage.getItem('key'));"
          },
          {
            "step": "Make HTTP requests to a backend API for data persistence.",
            "code": "import { HttpClient } from '@angular/common/http';\n\nexport class MyService {\n  constructor(private http: HttpClient) {}\n\n  saveData(data: any) {\n    return this.http.post('/api/data', data);\n  }\n\n  fetchData() {\n    return this.http.get('/api/data');\n  }\n}"
          }
        ]
      },
      {
        "exercise_number": 45,
        "title": "Angular Dependency Injection",
        "objective": "To understand and use dependency injection in Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular and you want to leverage the benefits of dependency injection. You want to learn how to use dependency injection to manage the dependencies of your Angular components, services, and other classes.",
        "step_by_step_solution": [
          {
            "step": "Register dependencies in the Angular DI container.",
            "code": "import { Injectable } from '@angular/core';\n\n@Injectable()\nexport class MyService {\n  // Service implementation\n}"
          },
          {
            "step": "Inject dependencies into Angular components, services, or other classes.",
            "code": "import { Component } from '@angular/core';\nimport { MyService } from './my.service';\n\n@Component({\n  // Component metadata\n})\nexport class MyComponent {\n  constructor(private myService: MyService) {}\n}"
          }
        ]
      },
      {
        "exercise_number": 46,
        "title": "Angular Material",
        "objective": "To understand and use Angular Material, a UI component library for Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular and you want to enhance its user interface with pre-built, customizable UI components. You want to learn how to use Angular Material, a popular UI component library for Angular applications.",
        "step_by_step_solution": [
          {
            "step": "Install Angular Material and its dependencies.",
            "code": "ng add @angular/material"
          },
          {
            "step": "Import Angular Material modules and components in your app module.",
            "code": "import { MatInputModule } from '@angular/material/input';\n\n@NgModule({\n  imports: [MatInputModule],\n  // Other module metadata\n})\nexport class AppModule { }"
          },
          {
            "step": "Use Angular Material components in your templates.",
            "code": "<mat-form-field>\n  <input matInput>\n</mat-form-field>"
          }
        ]
      },
      {
        "exercise_number": 47,
        "title": "Angular Performance Optimization",
        "objective": "To learn and apply performance optimization techniques in Angular applications.",
        "practical_application": "Imagine you are building a large-scale Angular application and you want to optimize its performance for better user experience. You want to learn and apply performance optimization techniques specific to Angular applications.",
        "step_by_step_solution": [
          {
            "step": "Enable production mode in your Angular application.",
            "code": "import { enableProdMode } from '@angular/core';\n\nenableProdMode();"
          },
          {
            "step": "Lazy load modules and components to improve initial load time.",
            "code": "// Use Angular's lazy loading feature\n// Only load modules and components when needed"
          },
          {
            "step": "Minify and bundle your application's code for reduced file sizes.",
            "code": "// Use tools like Angular CLI or Webpack to perform code minification and bundling"
          },
          {
            "step": "Optimize change detection by using OnPush strategy and immutable data.",
            "code": "// Use OnPush change detection strategy for components\n// Use immutable data structures and change detection optimizations"
          }
        ]
      },
      {
        "exercise_number": 48,
        "title": "Angular Deployment",
        "objective": "To understand and deploy Angular applications to different hosting environments.",
        "practical_application": "Imagine you have completed developing an Angular application and you want to deploy it to a web server or a cloud hosting platform. You want to learn how to properly deploy Angular applications to different hosting environments.",
        "step_by_step_solution": [
          {
            "step": "Build your Angular application for production.",
            "code": "ng build --prod"
          },
          {
            "step": "Deploy the generated 'dist' folder to a web server or cloud hosting platform.",
            "code": "// Upload files in the 'dist' folder to the hosting environment\n// Follow the hosting provider's instructions for deployment"
          }
        ]
      },
      {
        "exercise_number": 49,
        "title": "Angular Testing Best Practices",
        "objective": "To learn and apply best practices for testing Angular applications.",
        "practical_application": "Imagine you are building a web application in Angular and you want to follow best practices for testing to ensure the quality and reliability of your application. You want to learn and apply testing best practices specific to Angular applications.",
        "step_by_step_solution": [
          {
            "step": "Write small and focused unit tests for components and services.",
            "code": "// Test one behavior or functionality per test case\n// Mock dependencies to isolate the unit under test"
          },
          {
            "step": "Use beforeEach and afterEach hooks to set up and tear down test environments.",
            "code": "beforeEach(() => {\n  // Set up test environment\n});\n\nafterEach(() => {\n  // Clean up test environment\n});"
          },
          {
            "step": "Mock HTTP requests and responses for unit testing.",
            "code": "// Use HttpTestingController to mock HTTP requests and responses\n// Verify expected requests and responses in test cases"
          }
        ]
      },
      {
        "exercise_number": 50,
      "title": "Angular Server-Side Rendering (SSR)",
      "objective": "To understand and implement server-side rendering (SSR) in Angular applications.",
      "practical_application": "Imagine you are building a web application in Angular and you want to improve its initial load time and search engine optimization (SEO) by implementing server-side rendering (SSR). You want to learn and implement SSR in Angular applications.",
      "step_by_step_solution": [
        {
          "step": "Set up Angular Universal for server-side rendering.",
          "code": "ng add @nguniversal/express-engine"
        },
        {
          "step": "Build and run the server-side rendered version of your Angular application.",
          "code": "npm run build:ssr\nnpm run serve:ssr"
        },
        {
          "step": "Configure server-side rendering for your routes and components.",
          "code": "// Use Angular's server-side rendering APIs to configure SSR\n// Pre-render your Angular application on the server"
        }
      ]
    }
      ]

const angular_objectives =[
  "To understand and use reactive forms in Angular applications.",
  "To understand and make HTTP requests in Angular applications.",
  "To understand and use interceptors for handling HTTP requests and responses in Angular applications.",
  "To understand and write unit tests for Angular applications using testing frameworks like Jasmine and Karma.",
  "To understand and perform end-to-end testing in Angular applications using Protractor.",
  "To understand and implement lazy loading in Angular for optimizing the application's initial load time.",
  "To understand and implement animations in Angular applications using the Angular Animation API.",
  "To understand and implement accessibility best practices in Angular applications.",
  "To understand and implement internationalization (i18n) in Angular applications.",
  "To understand and implement service workers and Progressive Web Apps (PWA) in Angular applications.",
  "To understand and implement data persistence in Angular applications using technologies like local storage, session storage, and HTTP APIs.",
  "To understand and use dependency injection in Angular applications.",
  "To understand and use Angular Material, a UI component library for Angular applications.",
  "To learn and apply performance optimization techniques in Angular applications.",
  "To understand and deploy Angular applications to different hosting environments.",
  "To learn and apply best practices for testing Angular applications.",
  "To understand and implement server-side rendering (SSR) in Angular applications.", 
  "To understand and use reactive forms in Angular applications.",
  "To understand and make HTTP requests in Angular applications.",
  "To understand and use interceptors for handling HTTP requests and responses in Angular applications.",
  "To understand and write unit tests for Angular applications using testing frameworks like Jasmine and Karma.",
  "To understand and perform end-to-end testing in Angular applications using Protractor.",
  "To understand and implement lazy loading in Angular for optimizing the application's initial load time.",
  "To understand and implement animations in Angular applications using the Angular Animation API.",
  "To understand and implement accessibility best practices in Angular applications.",
  "To understand and implement internationalization (i18n) in Angular applications.",
  "To understand and implement service workers and Progressive Web Apps (PWA) in Angular applications.",
  "To understand and implement data persistence in Angular applications using technologies like local storage, session storage, and HTTP APIs.",
  "To understand and use dependency injection in Angular applications.",
  "To understand and use Angular Material, a UI component library for Angular applications.",
  "To learn and apply performance optimization techniques in Angular applications.",
  "To understand and deploy Angular applications to different hosting environments.",
  "To learn and apply best practices for testing Angular applications.",
  "To understand and implement server-side rendering (SSR) in Angular applications.",
  "To learn and use Angular CLI for creating, building, and managing Angular projects.",
  "To understand and use Angular routing for creating navigation in Angular applications.",
  "To understand and use Angular templates and data binding.",
  "To understand and use Angular components for building the user interface of Angular applications.",
  "To understand and use Angular services for sharing data and functionality across Angular components.",
  "To understand and use Angular directives for manipulating the DOM and extending HTML.",
  "To understand and use Angular modules for organizing and managing Angular applications.",
  "To understand and use Angular pipes for transforming data in Angular templates.",
  "To understand and handle form inputs and validations in Angular applications.",
  "To understand and use Angular lifecycle hooks for managing component lifecycle events.",
  "To understand and use Angular decorators for enhancing classes in Angular applications.",
  "To understand and use Angular dependency injection for managing dependencies in Angular applications.",
  "To understand and use Angular change detection for efficient UI updates in Angular applications.",
  "To understand and use Angular HTTP client for making HTTP requests in Angular applications.",
  "To understand and use Angular testing utilities and frameworks for writing unit tests in Angular applications.",
  "To understand and use Angular router guards for controlling access to routes in Angular applications.",
  "To understand and use Angular form validation and error handling techniques.",
  "To understand and use Angular directives for creating reusable and customizable components.",
  "To understand and use Angular template-driven forms for building forms in Angular applications.",
  "To understand and use Angular reactive forms for building complex and dynamic forms in Angular applications.",
  "To understand and use Angular template reference variables and local variables.",
  "To understand and use Angular content projection for creating flexible and reusable components.",
  "To understand and use Angular view encapsulation for managing styles and component isolation.",
  "To understand and use Angular ViewChild and ViewChildren for accessing child components and elements.",
  "To understand and use Angular ng-template, ng-container, and ngTemplateOutlet for template rendering.",
  "To understand and use Angular attribute directives for modifying the behavior of elements.",
  "To understand and use Angular structural directives for conditionally rendering elements in templates.",
  "To understand and use Angular forms API for programmatically interacting with forms and form controls.",
  "To understand and use Angular material components like buttons, inputs, dialogs, and tables.",
  "To understand and use Angular animations for creating interactive and visually appealing UI effects.",
  "To understand and use Angular custom pipes for transforming and filtering data in templates.",
  "To understand and use Angular interceptors for modifying HTTP requests and responses.",
  "To understand and use Angular unit testing with Jasmine and Karma for testing Angular components and services.",
  "To understand and use Angular end-to-end testing with Protractor for testing Angular applications.",
  "To understand and implement lazy loading in Angular for optimizing the application's initial load time.",
  "To understand and implement animations in Angular applications using the Angular Animation API.",
  "To understand and implement accessibility best practices in Angular applications.",
  "To understand and implement internationalization (i18n) in Angular applications.",
  "To understand and implement service workers and Progressive Web Apps (PWA) in Angular applications.",
  "To understand and implement data persistence in Angular applications using technologies like local storage, session storage, and HTTP APIs.",
  "To understand and use dependency injection in Angular applications.",
  "To understand and use Angular Material, a UI component library for Angular applications.",
  "To learn and apply performance optimization techniques in Angular applications.",
  "To understand and deploy Angular applications to different hosting environments.",
  "To learn and apply best practices for testing Angular applications.",
  "To understand and implement server-side rendering (SSR) in Angular applications."
]
                const captureComponent = async () => {
                  const appElement = document.getElementById('app');
                  const canvas = await html2canvas(appElement);
                  return canvas.toDataURL('image/png');
                };
              
                const exportToPDF = (imageData) => {
                  const pdf = new jsPDF();
                  const pdfWidth = pdf.internal.pageSize.getWidth();
                  const pdfHeight = pdf.internal.pageSize.getHeight();
              
                  pdf.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                  pdf.save('exported_component.pdf');
                };
              
                const handleExportPDF = async () => {
                  const capturedImageData = await captureComponent();
                  setImageData(capturedImageData);
                };
              
                useEffect(() => {
                  if (imageData) {
                    exportToPDF(imageData);
                  }
                }, [imageData]);
              
                return (
                  <div id="app" className="App">
                    {angular_exercises.map((exercise) => (
                      <Exercise key={exercise.exercise_number} exercise={exercise} objectives={angular_objectives } />
                    ))}
                    <button onClick={handleExportPDF}>Export to PDF</button>
                  </div>
                );
              }
              
              export default App;
              