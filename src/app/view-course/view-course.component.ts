import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor() { }
Data=[{"_id":"62dd30c1537e8500167b5a26","courseTitle":"Python Full stack","courseDescription":"Test description","courseDuration":"1 MONTH","courseDate":"2022-08-04","courseVenue":"ONLINE"},{"_id":"62dd44fd2cc9500016578169","courseTitle":"MCA","courseDescription":"wefasfsaef","courseDate":"2022-07-06","courseVenue":"CNC","courseDuration":"4 yrs"},{"_id":"62e64ed3eebc570016f7c7f5","courseTitle":"pyth","courseDescription":"pyht","courseDuration":"1 mon","courseDate":"2022-07-25","courseVenue":"online"},{"_id":"62e65a7ceebc570016f7c7f6","courseTitle":"C++","courseDescription":"","courseDuration":"1 month","courseDate":"2022-07-31","courseVenue":"Online"},{"_id":"62e698b8c2ffad00168e5a75","courseTitle":"Python","courseDescription":"Python Workshop","courseDuration":"1 mon","courseDate":"2022-07-31","courseVenue":"Online"},{"_id":"62e9006befc53c00167ca265","courseTitle":"Java","courseDescription":"OOP","courseDuration":"3 months","courseVenue":"Online"},{"_id":"62e900a0efc53c00167ca266","courseTitle":"Java","courseDescription":"OOP","courseDuration":"3 months","courseVenue":"Online"},{"_id":"62e90138efc53c00167ca267","courseTitle":"DataStructure","courseDescription":"C","courseDuration":"5month","courseVenue":"Online"},{"_id":"62e901d3efc53c00167ca268","courseTitle":"HTML, CSS, JavaScript","courseDescription":"Front End","courseDuration":"6 month","courseVenue":"Online"},{"_id":"62e901f3efc53c00167ca269","courseTitle":"NodeJs","courseDescription":"Back End","courseDuration":"3 month","courseVenue":"Online"},{"_id":"62eb735ec3a73e00164a904c","courseTitle":"React Course","courseDescription":"This is a react course","courseDuration":"04:00","courseDate":"2022-08-18","courseVenue":"online"},{"_id":"62eb7367c3a73e00164a904d","courseTitle":"react","courseDuration":"5 hrs","courseVenue":"online","courseDate":"2022-08-26","courseDescription":"course"},{"_id":"62eb751cc3a73e00164a904e","courseTitle":"BCA","courseDescription":"Computer Application","courseDuration":"3 Years","courseDate":"2022-09-04","courseVenue":"College"},{"_id":"62eb843600241b0016da4cf5","courseTitle":"Angular","courseDuration":"1hr","courseVenue":"online","courseDate":"2022-09-07","courseDescription":"project"},{"_id":"62eba701ebdb020016654ff0","courseTitle":"C++","courseDescription":"Programming","courseDuration":"2months","courseDate":"2022-08-05","courseVenue":"Online"},{"_id":"62ee0202be66610016b14c6b","courseTitle":"ZDczsc","courseVenue":"sdzcszcf","courseDescription":"zczsc"},{"_id":"62ee025ebe66610016b14c6c","courseTitle":"afsdfs","courseVenue":"dsfesf","courseDescription":"sdfsee"},{"_id":"62ee0279be66610016b14c6d","courseTitle":"angular ","courseVenue":"angular","courseDescription":"angular"},{"_id":"62f0a80e7d829c00161f3e57","courseTitle":"a","courseVenue":"b","courseDate":"2022-08-13"},{"_id":"62f0a8457d829c00161f3e58","courseTitle":"hii","courseVenue":"hii","courseDate":"2022-08-11"},{"_id":"62f0a9567d829c00161f3e59","courseTitle":"sql","courseVenue":"online","courseDate":"2022-08-03"},{"_id":"62f0a9947d829c00161f3e5a","courseTitle":"a","courseVenue":"a","courseDate":"2022-08-21"},{"_id":"63047f9cddaeb50016da9a14","courseDate":"2022-08-24","courseTitle":"MEAN STACK","courseDuration":"5 DAYS","courseVenue":"CYBER PARK","courseDescription":"INTERNSHIP"},{"_id":"6304819fddaeb50016da9a15","courseTitle":"FULL STACK DEVELOPMENT","courseDescription":"ONLINE","courseDuration":"2 MONTHS","courseDate":"2022-08-17","courseVenue":"ICT ACADEMY"},{"_id":"630481aaddaeb50016da9a16","courseDate":"2022-09-09","courseTitle":"192.168.1.211","courseDuration":"5 mnths ","courseVenue":"Online "},{"_id":"63048230ddaeb50016da9a17","courseVenue":"EveryWhere","courseDate":"55/55/55","courseTitle":"Siyam","courseDescription":"Nice","courseDuration":"5  Years"},{"_id":"6304827bddaeb50016da9a18","courseTitle":"","courseDescription":" Day Class","courseDuration":"","courseDate":"2022-08-26","courseVenue":"Online"},{"_id":"6304828dddaeb50016da9a19","courseTitle":"","courseDescription":" Day Class","courseDuration":"","courseDate":"2022-08-26","courseVenue":"Online"},{"_id":"630482c8ddaeb50016da9a1a","courseTitle":"","courseDescription":"","courseDuration":"","courseDate":"","courseVenue":""},{"_id":"63048312ddaeb50016da9a1b","courseTitle":"","courseDescription":"vjkvndkf","courseDuration":"","courseDate":"","courseVenue":"SHkjs"},{"_id":"63048375ddaeb50016da9a1c","courseTitle":"","courseDescription":"ddddd","courseDuration":"","courseDate":"2022-08-18","courseVenue":"dddddd"},{"_id":"630483a3ddaeb50016da9a1d","courseTitle":"hello","courseDescription":"tutu","courseDuration":"yjyju","courseDate":"2022-08-21","courseVenue":"tutu"},{"_id":"630483a4ddaeb50016da9a1e","courseTitle":"hello","courseDescription":"tutu","courseDuration":"yjyju","courseDate":"2022-08-21","courseVenue":"tutu"},{"_id":"630483a5ddaeb50016da9a1f","courseTitle":"hello","courseDescription":"tutu","courseDuration":"yjyju","courseDate":"2022-08-21","courseVenue":"tutu"},{"_id":"630483a5ddaeb50016da9a20","courseTitle":"hello","courseDescription":"tutu","courseDuration":"yjyju","courseDate":"2022-08-21","courseVenue":"tutu"},{"_id":"630483fbddaeb50016da9a21","courseVenue":"NILGIRI","courseDate":"2020-2023","courseTitle":"BCA","courseDescription":"6 sem","courseDuration":"3 Year"},{"_id":"63048439ddaeb50016da9a22","courseTitle":"Fsd","courseDescription":"2 months","courseDuration":"online","courseDate":"2022-08-05","courseVenue":"online"},{"_id":"6304844addaeb50016da9a23","courseTitle":"salman","courseDescription":"ee","courseDuration":"ee","courseDate":"2022-08-01","courseVenue":"ee"},{"_id":"63048458ddaeb50016da9a24","courseTitle":"bca","courseDescription":"online program","courseDuration":"1 months","courseDate":"2022-08-24","courseVenue":"online"},{"_id":"630484acddaeb50016da9a25","courseTitle":"MBA","courseDate":"2022-08-25","courseVenue":"GOA","courseDuration":"2 years"},{"_id":"630484e3ddaeb50016da9a26","courseTitle":"njn","courseDescription":"njn","courseDuration":"njn","courseVenue":"njn","courseDate":"2022-08-06"},{"_id":"63048da69c358f0016176939","courseTitle":"futbol","courseDescription":"sport","courseDuration":"20year","courseDate":"2022-08-22","courseVenue":"camp nou"},{"_id":"63048ed79c358f001617693a","courseVenue":"NILGIRI","courseDate":"2020-2023","courseTitle":"BCA","courseDescription":"6 sem","courseDuration":"3 Year"},{"_id":"6304920d9c358f001617693b","courseTitle":"okda","courseDescription":"a","courseDuration":"a","courseDate":"2022-07-31","courseVenue":"s"},{"_id":"630895404d42aa0016fe4fd0","courseTitle":"adsfa","courseDescription":"adsfadfasdfafadfafadf a ads fas a das a a as f afa","courseDate":"2022-08-23","courseVenue":"sfafafda","courseDuration":"adfasdfasdfas"},{"_id":"6308957f4d42aa0016fe4fd1","courseTitle":"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111","courseDescription":"23333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333","courseDate":"2022-08-24","courseVenue":"444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444","courseDuration":"222222222222222222222222222222222222222222222222222"},{"_id":"6308fffdba2ae60016511883","courseDescription":"adele","courseDuration":"from","courseDate":"2022-08-04","courseVenue":"side"},{"_id":"63090036ba2ae60016511884","courseDescription":"harry","courseDuration":"from","courseDate":"2022-08-04","courseVenue":"side"},{"_id":"630905e5ba2ae60016511885","courseDescription":"switch","courseDuration":"charlie","courseDate":"2022-08-29","courseVenue":"puth"},{"_id":"63090624ba2ae60016511886","courseTitle":"taylor","courseDescription":"swift","courseDuration":"love","courseDate":"2022-08-24","courseVenue":"story"},{"_id":"630906b7ba2ae60016511887","courseTitle":"justin","courseDescription":"bieber","courseDuration":"as","courseDate":"2022-08-05","courseVenue":"long"},{"_id":"63090759ba2ae60016511888","courseTitle":"qw","courseDescription":"qe","courseDuration":"qee","courseDate":"2022-08-16","courseVenue":"fgh"},{"_id":"630909a7ba2ae60016511889","courseTitle":"we ","courseDescription":"were","courseDuration":"both","courseDate":"2022-08-26","courseVenue":"hello"},{"_id":"630a53352bbebb0016947799","courseTitle":"all of me","courseDescription":"song","courseDuration":"1","courseDate":"2022-08-08","courseVenue":"online"},{"_id":"630a53902bbebb001694779a","courseTitle":"physics","courseDescription":"physics","courseDuration":"1","courseDate":"2022-08-16","courseVenue":"online"},{"_id":"631f564360360700165687ec","courseTitle":"blockchain","courseDate":"2022-09-10","courseVenue":"zoom","courseDuration":"7 months","courseDescription":"intro to blockchain"},{"_id":"631f569660360700165687ed","courseTitle":"biotechnology","courseDate":"2022-09-07","courseVenue":"offline","courseDuration":"4 days","courseDescription":"intro to biotechnology"},{"_id":"631f57b160360700165687ee","courseTitle":"mechanics","courseDate":"2022-09-07","courseVenue":"zoom","courseDuration":"5 years","courseDescription":"intro to mechanics"},{"_id":"631f587160360700165687ef","courseTitle":"","courseDate":"","courseVenue":"","courseDuration":"","courseDescription":""},{"_id":"631f58f960360700165687f0","courseTitle":"","courseDate":"","courseVenue":"","courseDuration":"","courseDescription":""},{"_id":"631f590660360700165687f1","courseTitle":"","courseDate":"","courseVenue":"","courseDuration":"","courseDescription":""},{"_id":"63247f2db159130016fd0a96","courseTitle":"Blockchain","courseDate":"2022-09-11","courseVenue":"online","courseDuration":"5 months","courseDescription":"introduction to blockchain "},{"_id":"6324863eb159130016fd0a97","courseTitle":"cloud computing","courseDate":"2022-09-17","courseVenue":"online","courseDuration":"6 months","courseDescription":"basics of cloud computing"},{"_id":"63384146f50a560016ae043f","courseTitle":"john","courseDescription":"elton","courseDuration":"all","courseDate":"2022-10-05","courseVenue":"of"}]
  ngOnInit(): void {
  }

}
