###Scotch.io tutorial

## Sort and Filter
- sort data using up/down carets
- filter based on text input (searches all columns) 

<span ng-show="sortType == 'name'" ng-class="{'fa fa-caret-down' : !sortReverse, 'fa fa-caret-up' : sortReverse}"></span>
- Search name in contacts: <li ng-repeat="contact in contacts | filter:{'name': search}">
- Search w/ order: <li ng-repeat="contact in contacts | filter:search | orderBy:'name'">
