Learning Web Development with Bootstrap and AngularJS
[Web Dev Angular/Bootstrap](https://www.safaribooksonline.com/library/view/learning-web-development/9781783287550/)

- Build a Contact Manager App  
- CRUD for contacts

## Dependencies
- ngAnimate, ngRoute, ngSanitize, ngStrap

### CHANGES
- using Flatly
- added Bower

### Ch 7 Angular-Strap
- [angular-strap](http://mgcrea.github.io/angular-strap/)
- native Directives for Bootstrap 3
- Alert, Popover, Modal, Tooltip, Datepicker, Aside, Typeahead, Select, Tab
- depends on *ngAnimate* ['mgcrea.ngStrap']

### Filters
- Search name in contacts: <li ng-repeat="contact in contacts | filter:{'name': search}">
- Search w/ order: <li ng-repeat="contact in contacts | filter:search | orderBy:'name'">
- our *Truncate* filter:    (acts same as limitTo)
- - checks input length against our limit. If input is greater than limit, truncate and add ellipse. Else return the input
