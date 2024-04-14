# UserManagementAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.

This is a simple User Management System using Angular which have functionalities of CRUD like get user details, add a new user, edit existing user, and delete a user.
There are two components,
1. user-list - to show the list of users
2. user-upsert - to add new user as well as edit existing user

Services: 
There is a service, DataService, which handles data.

Interface: 
UserInterface is used for type casting

Styling: 
Used Bootstrap and CSS for styling

Toastr: 
Used ngx-tostr for showing notifications


# Project Setup
1. **Clone the repository**
```bash
git clone https://github.com/pratikankar/user-management-angular.git
```

2. **Go to folder**
```bash
cd user-management-angular
```

3. **Install dependencies**
```bash
npm install
```

4. **Run json-server**
```bash
json-server --watch data.json
```

5. **Run the development server**
```bash
ng serve
```

Open http://localhost:3000/users for json-server and http://localhost:4200 to view in the browser




## Rest of the operations
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
