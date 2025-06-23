/* console.log("Typescript e giriş yaptık");
console.log("Typescript e giriş yaptık -w ile");// ts dosyasındaki değişikliğin otomatik olarak js ye aktarmak için tsc app.ts -w ile komut satırını çalıştırıyoruz
 */

//data annotation
/* let age:number=29;
let firstname:string="Gözde";
let lastname:string="Cankı";
let isUpdated:boolean= false;


function display(id:number, name:string) {
    console.log("ıd=" +id+ ", Name=" +name);
}



let first:number= 123;// number
let second:number= 0x37CF;// hexadecimal
let third:number= 0o377;// octal
let fourth:number= 0b111001;// binary

console.log(first);
console.log(second);
console.log(third);
console.log(fourth); */
//******************************************************* */

//let employeefirstName:string='Gözde Cankı'; // iki türlü de tanımlanabilir
//let employeefirstName:string="Gözde Cankı";
//console.log(employeefirstName)

//******************************************************* */
/* let employeefirstName:string="Gözde Cankı";
let employeeDept:string="Software";

//string birleştirme işlemi
//pre-ES6
let employeeDesc1 : string= employeefirstName +" works in the " + employeeDept +" department.";
console.log(employeeDesc1)

//post-ES6
let employeeDesc2 : string= `${employeefirstName} works in the ${employeeDept} department.`;
console.log(employeeDesc2) */

//******************************************************* */
/* 
let isPresent:boolean=true;
console.log(isPresent) */


//arrays

//let firstnames:string[] = ['Can','Gözde','Merve'];
/* let firstnames:Array<string> = ['Can','Gözde','Merve'];// generic yöntemle tanımlama
console.log(firstnames);


let arr =[1,3,'Apple','Orange','Banana',true,false];//tip belirtmeden tanımlama
 */
//tipini tanımladıktan sonra atama yapılması
/* let fruits: Array<string>;
fruits = ['Apple','Orange','Banana'] */


/* let ids :Array<number>;
ids=[23,34,100,124,44]; */


//multi type array tanımlama
/* let values :(string | number)[]=['Apple', 2,'Orange', 3, 4,'Banana'];// string veya number içerir.
let values :Array<string | number>=['Apple', 2,'Orange', 3, 4,'Banana'];// string veya number içerir. */


/* let fruits: Array<string>;
fruits = ['Apple','Orange','Banana'];

//console.log(fruits[1]);

for (let index = 0; index < fruits.length; index++) {
   console.log(fruits[index]);
    
} */

//tuple tanımlama
/* let Id:number=1;
let instructorName:string='Gözde';
let instructor :[number,string]=[1,'Gözde'];


var user:[number,string,boolean, number,string];
user=[1,"Steve",true,123,"Admin"];
console.log(instructor, user);

//tupple lardan array oluşturma
let employee:[number,string][];//tupple array i
employee=[[1,"Steve"], [2,"Bill"], [3,"Jeff"]];
console.log(employee);
 */

/* 
//interface
type Person ={
    firstName:string,
    lastName:string,
    age:number,
    jobTitle:string
}


//object tanımlama
//let instructor: object;
let instructor: Person;// ide de kırmızı çizmemesi için şu interface den türet dedik

instructor={
    firstName:'Gözde',
    lastName:'Cankı',
    age:29,
    jobTitle:'Software Engineer'
}
console.log(instructor);

console.log(instructor.age);// bu şekilde değeri konsolde görüyoruz ama ide de kırmızı çizer

//veya şu şekilde tanımlayabiliriz
let person:{
    firstName:string,
    lastName:string,
    age:number,
    jobTitle:string
}
person={
    firstName:'Gözde',
    lastName:'Cankı',
    age:29,
    jobTitle:'Software Engineer'
}

console.log(person.lastName);

//veya
let person2:{
    firstName:string,
    lastName:string,
    age:number,
    jobTitle:string
}={
    firstName:'Gözde',
    lastName:'Cankı',
    age:29,
    jobTitle:'Software Engineer'
}

console.log(person2.lastName); */


//enums
/* enum Media{
    Newspaper,//0      //Newspaper=1 yazarsak 1den başlar indexi 1 er artarak devam eder
    Newsletter,//1
    Magazine,//2
    Book//3
};

console.log(Media.Magazine);// konsola indexi yazar
console.log(Media[3]);// konsola Book yazar


enum PrintMedia{
    Newspaper="NEWSPAPER",   
    Newsletter="NEWSLETTER",
    Magazine="MAGAZINE",
    Book="BOOK"
};
console.log(PrintMedia.Newsletter);//NEWSPAPER
console.log(PrintMedia['Newsletter']);
 */

/* //union type = birden fazla tip tanımlanması
let code: string | number | boolean;

//code = 1232;
code = false;
console.log(code); */


//any
/* 
let someThing: any ="Hello";

someThing=45;//tipi any olduğu için hata vermez. her tipi kabul eder anlamına gelir
someThing=true;
someThing={
    firstname:'Gözde',
    lastname:'Cankı'
}
console.log(someThing);


let arry: any[]= ["john", 212, true];
console.log(arry); */

//void : geriye birşey döndürülmeyen durumlarda
/* function sayHello():void {
    console.log("Hello")   
}
sayHello(); */

//never : geriye hiç bir value dönmezse yani hata fırlatı ifade ediyor
/* function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}
throwError("Hata"); */
/* 
let someThing : void = undefined;// undefined atanıyor ama null atanamaz
let nothing : never = null;// null ve undefined atanamaz */


//type inference
/* let sayac =0;
console.log(typeof(sayac));

//bu 2 metod aynıdır. üstteki otomoatik olarak dönüş tipinin number olduğunu bilir
function increment(counter:number) {
    return counter++;
}
 */
/* function increment(counter:number) :number{
    return counter++;
} */


   /*  let a ="some text";
    let b =123;
    a=b;// hata çünkü a nın string olduğunu typescript otomatik olarak bilir
 */


    /* function sum(a:number, b:number) {
        return a+b;
    } */
   // let total: number = sum(10,15);//doğru çalışır
  // let total: string = sum(10,15);// hata alır çünkü sum otomatik olarak number dönüş yapar

  //type assortion
/*   let code:any=123;
  console.log(typeof(code));//number */

  //let empCode=code;//empcode otomatik number olur
/*   let empCode=<number>code;//empcode otomatik number olmasını istemiyorsak
  console.log(typeof(empCode));//number */



/*   let employee={};
  console.log(typeof(employee));
 // employee.name="Can";// hata verir name alanı yok


   interface Employee{
    name:string,
    code:number
  }

  let employee2=<Employee>{};
  console.log(typeof(employee));
  employee2.name="Can";
  console.log(employee2); */

//if else 
/* let x: number =15;
let y: number =25;

if(x>y){
    console.log("x y den büyüktür")
}else if(x<y){
    console.log("x y den küçüktür ")
}
else{
     console.log("x y e eşittir")
}

// ternary operator
x>y ? console.log("X y den büyüktür"): console.log("X y den küçüktür veya eşittir"); 
*/

//switch-case
/* let day : number = 2;

switch(day){
    case 0:
        console.log("Pazar");
        break;
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
     case 5:
        console.log("Cumartesi");
        break;
    default:
        console.log("Böyle bir gün yok");
        break;
} */

//for loop
/* for (let i = 0; i < 3; i++) {
    console.log("i değerim",i);   
}

let arry =[10,20,30,40];
for(let item of arry){
    console.log(item);//o indexteki elamanın değeri yazar
}

let str ="Gözde Cankı";
for(let item of str){
    console.log(item);
}

for(let item in arry){
    console.log(item);//index numarası yazar
} 
    */

/* //while loop
let counter:number =10;

while(counter<5){
  console.log(counter);
  counter++;

  if(counter==3){
    break;
  }
}


//do while loop

do{
 console.log(counter);
  counter++;
}while(counter<5);
 */


//functions
/* 
function add(a:number, b:number) : number {
    return a+b;
}

let toplam =add(10,20);
console.log("toplam:" + toplam); */


/* function yazdir():void {
    console.log("Gözde Cankı")
}
yazdir(); */

/* function yazdir(){
   return 35;
}
let degisken =yazdir();
console.log(degisken); */
/* 
function birlestir(ad: string, soyad:string) :string {
    return ad +' '+ soyad; 
}
let degisken = birlestir("Gözde","Cankı");
console.log(degisken); */

//default parameter
/* function birlestir(ad: string, soyad:string ="Cankı") :string {
    return ad +' '+ soyad; 
}
let degisken = birlestir("Gözde");
console.log(degisken);//2. parametreyi vermezsem default değeri alır ve yazar.
let degisken2 = birlestir("Gözde","Cankıııııı");// eğer data verirsem default olanı ezer. verdiğim değeri yazar.
console.log(degisken2); */

//opsiyonel parametre ?
/* function carpim(a:number, b:number,c?:number) {
    if(typeof c !== 'undefined'){
        return a*b*c;
    }

    return a*b;
}

let degisken =carpim(10,30);
console.log(degisken);//300

degisken=carpim(10,20,3);
console.log(degisken);//600

degisken=carpim(10,10,);// c= undefined 
console.log(degisken);//100 */

//lamda expression ile arrow function
/* function carpim(a:number, b:number) :number{
  
    return a*b;
} */

    //1.
/* let carpim = (a:number, b:number) : number =>{
    return a*b;
} */
   //2.
/* let carpim = (a:number, b:number) =>{
    return a*b;
}
    //3.
    let carpim = (a:number, b:number) : number => a*b;

let degisken =carpim(4,5);
console.log(degisken); 
*/

/* //parametresiz
let bastir = () =>{
    console.log("Gözde Cankı");
}
bastir();

//veya 
let bastir2 = () => console.log("Gözde Cankı");
bastir2();
 */

//function overloading
/* 
function add(a:number, b:number) : number {
    return a+b;
}
let toplam =add(10,20);
console.log("toplam:" + toplam); 
 */
//overload olanları bu şekilde tanımlıyoruz
/* function add(a:string, b:string) : string ;
function add(a:number, b:number) : number ;


function add(a:any, b:any) : any {
    return a + b;
}

let degisken = add("Gözde", " Cankı");
console.log(degisken);

 let degisken2 = add(10,20);
console.log(degisken2);
 */
 //let degisken2 = add(10,"Gözde"); bu kısım hata verir overload olarak tanımlamadık


 //rest parameters
/*  function toplam(...numbers:number[]): number {
    let total=0;
    numbers.forEach((num)=>total+=num);
    return total;
 }

 console.log(toplam(10,20,30)) */

//s:string olarak tanımladığımız kısım ilk parametre olmalı, rest parametle sonda olmalı tanımda
/*   function toplam(a:string, ...numbers:number[]): number {
    console.log(a);
    let total=0;
    numbers.forEach((num)=>total+=num);
    return total;
 }

 console.log(toplam("Gözde",10,20,30)); */


/* function birlestir(message:string, ...names:string[]) {
    console.log(message + " "+ names.join(","));
    
}
birlestir("Merhaba","Gözde","Can","Osman"); */

//class 
  /*class Person {
  
    // id;
    // firstName;
    // lastName; 
    //  constructor(id, firstName, lastName){
    //     this.id = id,
    //     this.firstName = firstName,
    //     this.lastName = lastName
    // }
    
    //veya 
    id:number;
    firstName:string;
    lastName:string;

    constructor(id:number, firstName:string, lastName:string){
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName
    }

    getFullName(){
        //return this.firstName +' '+this.lastName;
        return `${this.firstName} ${this.lastName}`
    }
}

let kisiBilgim= new Person(1,"Gözde","Cankı");
console.log(kisiBilgim);
console.log(kisiBilgim.getFullName());

*/

//access modifiers => public , protected, private
/* class Person {

   public id:number;// modifier belirtmez isek public tir. default değer publictir
   private firstName:string;// class içinde erişilir. dışarıdan erişim yok. 
   protected lastName:string;// class içinde erişilir. dışarıdan erişim yok. bir classtan diğer bir classı inherit(extend) ettiğimizde 
                             // , diğer classtan protected olan alana erişebiliyoruz.(yani subclasslarda erişim var)

    constructor(id:number, firstName:string, lastName:string){
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName
    }

    getFullName(){
    
        return `${this.firstName} ${this.lastName}`
    }
}

let kisiBilgim= new Person(23,"Gözde","Cankı");

console.log(kisiBilgim.id);//public iken erişimde sorun yok 
//console.log(kisiBilgim.firstName);// hata verir. private değerlere ancak class içinde erişilir.
//console.log(kisiBilgim.lastName);// hata verir. protected değerlere ancak class içinde veya inherit edilmiş olan subclasslarda erişilir. */

//readonly 
 /* class Person {

    readonly id:number;// bu keyword varken bu alanın değerini değiştiremiyoruz
    firstName:string;
    lastName:string;
                          

    constructor(id:number, firstName:string, lastName:string){
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName
    }

    getFullName(){
    
        return `${this.firstName} ${this.lastName}`
    }
}

let kisiBilgim= new Person(23,"Gözde","Cankı");
console.log(kisiBilgim.id); */

/* kisiBilgim.id=10;// hata verir 
console.log(kisiBilgim.id);
 */


//inheritance
/* class Person {

    id:number;
    firstName:string;
    lastName:string;
                          
    constructor(id:number, firstName:string, lastName:string){
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName
    }

    getFullName(){
    
        return `${this.firstName} ${this.lastName}`
    }
}


class Employee extends Person{
    constructor ( id:number, firstName:string,lastName:string){
        super(id, firstName,lastName);//parentin constructor ını çağırıyoruz
     }

}

let employee = new Employee(29,"Gözde","Cankı");
console.log(employee.id);
console.log(employee.getFullName()); */

//static methods
/* 
class Circle{
  static pi:number =3.14; //classtan nesne üretmeden erişebiliriz. Sınıf adını kullanarak erişim sağlarız.
         pi=3;//static olmadığı için nesne yaratıp o nesne üzerinden erişim sağlıyoruz.

         constructor(){
            Circle.pi++;//her new instance ı aldığında 1 arttır
            this.pi++;//
         }

  static hesapla(yaricap:number){
    return this.pi * yaricap * yaricap;
  }

}

let objem = new Circle();
console.log("static değil: " + objem.pi);//4 yazacak

let objem2 = new Circle();
console.log("static değil2: " +objem2.pi);//4 yazacak

//4 yazma sebebi, static olmadığı için her new instance oluştururken pi=3 üzerinden işlem yapar. her nesne için sabittir. ama static değer sınıfın her nesnesi için aynıdır. 
//bu sebeple aşağıdaki durum oluşur
console.log("static : " +Circle.pi);//2 tane new ile nesnesini oluşturduk bu yüzden 3.14+1+1=5.14 olur
console.log("static hesapla: " +Circle.hesapla(5)); */

//abstract class--  kendi başına new ile nesnesini oluşturamıyoruz. ama extend edebiliriz.
/* abstract class Department{

    constructor(public name: string){}

    printName(): void {// abstract classlarda abstract method tanımlamak zorunda değiliz.
        console.log("department name: " + this.name);
    }

    abstract printMeeting(): void; // abstract method tanımlaması yaptığımızda extend ettiğimiz sınıfta implement edilmesi gerekmektedir zorunludur. aksi durumda ide de hata alırız.

}

class AccountingDepartment extends Department{
    constructor(){
        super("Accounting and Auditing"); 
    }

    printMeeting(): void {//abstract method implement edildi
        console.log("the accounting department meets each Monday at 10 am.");
    }

    generateReports(): void{
         console.log("Generating accounting reports...");
    }

} 

//let dep = new Department(); hatalı. abstract classın new  instance oluşturamayız. 
let dep : Department;//fakat abstract type a referans edebiliriz
dep = new AccountingDepartment();
dep.printName();
dep.printMeeting();
//dep.generateReports(); bu method abstract class da tanımı değil

let department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();*/

//interface 

   //interfacesiz 
/* function getFullName(person :{ // person bu şekilde tip vermeden de kullanırsak tipler implicitly any olarak kabul görür. bu şekilde tip vererek tanımladığımızda tip kontrolü sağlar. ama kod biraz karışık olur
    //10 tane property olursa onları da buraya eklememiz gerekir
    firstName:string,
    lastName: string
}) {
    return `${person.firstName} ${person.lastName}`;
}

let person={
    firstName: 'Gözde',
    lastName:'Cankı'
}
console.log(getFullName(person));
  
  //interfaceli
interface Person {
    firstName:string,
    lastName: string
}  
function getFullName2(person: Person){
      return `${person.firstName} ${person.lastName}`;
}

let person2={
    firstName: 'Gözde',
    lastName:'Cankı'
}
console.log(getFullName(person2));

let person3={
    firstName: 'Gözde',
    lastName:'Cankı',
    age:29// interface de olmayan bir alan tanımlayabiliriz
}
console.log(getFullName(person3)); */

//interface optional parameters
/* interface Person {
    firstName:string,
    lastName: string,
    middleName?: string //optional tanımlama ?
}  
function getFullName(person: Person){
    if(person.middleName){
        return `${person.firstName} ${person.lastName} ${person.middleName} `;
    }
      return `${person.firstName} ${person.lastName}`;
}

let person={
    firstName: 'Gözde',
    lastName:'Cankı',
  //  middleName: 'Meriç', bu satırı yazmasak da olur çünkü optional
    age: 33
}
console.log(getFullName(person));

//readonly

interface Person2 {
   readonly firstName:string,
    lastName: string,
}  
let person2 : Person2={
    firstName: 'Gözde',// ilk kez tanımı yapıyoruz. daha sonra değişiklik yapmak istediğimizde yapamıyoruz
    lastName:'Cankı',
   // age:23 // bir de person2 yi bu şekilde oluşturduğumuzda farklı bir alan tanımlayamıyoruz.
}
//person2.firstName="Gizem";// readonly tanımlama yapıldığı için değişiklik yapamayız
console.log(getFullName(person2)); 
*/

//interface declaring function type
/* interface StringFormat{
    (str: string, isUpper:boolean ):string
}

let format : StringFormat;
format = function(str:string,isUpper:boolean){
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}
console.log(format("Gözde Cankı", true)); 
*/

//interface extend etme 
/* interface IPerson{
    name:string;
    gender:string;
}

interface IEmployee extends IPerson{// Ipersonda tanımlanan fieldlara sahip olur. bu alanları tekrar tekrar yazmamıza gerek kalmamış oluyor
    empNumber :number;
}
interface IWorker extends IPerson{
    empDepartment:string;
}


let employee : IEmployee= {//tüm alanları vermek zorundayız
    empNumber:1,
    gender: "Female",
    name:"Gözde"
}
console.log(employee);


let employeeDepartment : IWorker= {//tüm alanları vermek zorundayız
    empDepartment:"Software",
    gender: "Female",
    name:"Gözde"
}
console.log(employeeDepartment); */

//bir class a interface implement etme
/* 
 interface IPerson{
    name:string;
    gender:string;
}

class Employee implements IPerson{// interface içinde tanımlanmış olan tüm propertyleri yazmak zorundayız
    empNumber: number;
    name: string;//Iperson field
    gender: string;//Iperson field

    constructor(empNumber:number, name:string, gender:string ){
        this.empNumber=empNumber;
        this.name=name;
        this.gender=gender;
    }
}

let employee = new Employee(5,"Gözde","Female");
console.log(employee); */

//type intersection
/* let varName : number | string // bu şekilde veya kullanıyorduk tanımlama yaparken

interface BusinessPartner{
    name: string;
    credit: number;
   
}
interface Identity{
    name:string;
    id:number;
}

interface Contact{
    email:string;
    phone:string;
}

type Employee = Identity & Contact; // employee hem Identity hem de Contact ın fieldlarını içeren yeni bir type oluşturmuş olduk
let kisi : Employee={//bu lanlardan herhangibirini tanımlamazsak hata alırız. çünkü type ı &(ve) ile oluşturuyoruz.
id:54,
name:"Gözde Cankı",
email:"gozde@gmail.com",
phone:"056623645"
}
console.log(kisi);

type Customer = BusinessPartner & Contact;
let musteri :Customer={
    credit:456,
    email:"hdfjd@hotmail.com",
    name:"Gözde Can",
    phone:"05645646265"

}
console.log(musteri); */

//type guard
/* type tip = string | number;

function add(a: tip, b: tip) {
    if(typeof a === 'number' && typeof b ==='number'){
        return a+ b;
    }
    if(typeof a === 'string' && typeof b ==='string'){
        return a.concat(b);
    }

    throw new Error('Lütfen doğru formatta data gönderin');
}

console.log(add(5,6));
console.log(add("Gözde"," Cankı"));
console.log(add("Gözde",6)); */

//instanceof
/* class Customer{
    isCreditAllowed(): boolean{
        //...
        return true;
    }
}
class Supplier{
     isInShortList(): boolean{
        //...
        return true;
    }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner) : string {
    let message : string ='';
    if(partner instanceof Customer)
        {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' :'Credit issue';
   
    }
      if(partner instanceof Supplier)
        {
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' :'Need to evaluate further';
       
    }
      return message;
}

let customer = new Customer();

console.log(signContract(customer)); */

//generics
 /*   //generic olmadan
function getRandomNumber(items: number[]): number {
    let randomIndex = Math.floor((Math.random() * items.length) );    //0-1 arasında sayı üretip item length ile çarpıp floor ile alt tam sayıya yuvarladık
    return items[randomIndex];

}
console.log("ayrı ayrı function");
let numbers=[1,54,65,7,8];
console.log(getRandomNumber(numbers));

function getRandomString(items: string[]): string {
    let randomIndex = Math.floor((Math.random() * items.length) );    //0-1 arasında sayı üretip item length ile çarpıp floor ile alt tam sayıya yuvarladık
    return items[randomIndex];
}
let adlarim=["can","gözde","ayşe"];
console.log(getRandomString(adlarim));

    //any ile --> type safe değildir
function getRandomElement(items: any[]): any {
    let randomIndex = Math.floor((Math.random() * items.length) );    //0-1 arasında sayı üretip item length ile çarpıp floor ile alt tam sayıya yuvarladık
    return items[randomIndex];

}
console.log("any ile");
console.log(getRandomElement(numbers));
console.log(getRandomElement(adlarim));

    //generic --> automatic type inference 
function getRandomElement2<T>(items: T[]): T {
    let randomIndex = Math.floor((Math.random() * items.length) );    //0-1 arasında sayı üretip item length ile çarpıp floor ile alt tam sayıya yuvarladık
    return items[randomIndex];

}
console.log("Generic ile");
console.log(getRandomElement2(numbers));
console.log(getRandomElement2(adlarim));

//tip force edebiliriz
console.log(getRandomElement2<number>(numbers));
console.log(getRandomElement2<string>(adlarim));

let degiskenlerim=[true, false, true];
console.log(getRandomElement2(degiskenlerim));
console.log(getRandomElement2<boolean>(degiskenlerim)); */

//generic constraints
/* 
function merge<U, V>(obj1: U, obj2:V){
    return {
        ...obj1, //spread operatörü
        ...obj2
    }
}

let person2 = merge (// bu şekilde çalışır fakat konsolda sadece name:"Gözde" değerini görürüz bunun için merge fonksiyonuna extends keywordu ekliyoruz
    {name:"Gözde"},
  //  {age:29}
  29
)
console.log(person2);


function merge2<U extends object, V extends object>(obj1: U, obj2:V){
    return {
        ...obj1, //spread operatörü
        ...obj2
    }
}

let person = merge2 (
    {name:"Gözde"},
    {age:29}
    //29 artık bu şekilde ide de hata alırız
)
console.log(person);
 */

//interfacelerde generic kullanımı
/* interface Months <U,V>{
   key: U,
   value : V;
}

let month: Months<number,string> ={
    key:1,
    value:'January'
}
console.log(month); */


//interface methodlarında generic
/* interface Collection <T>{
   add(o :T): void;
   remove(o:T): void;
}

class List<T> implements Collection<T>{
   private items: T[]= [];
  
   add(o:T):void{
      this.items.push(o);
      console.log(this.items);
   }

   remove(o:T): void{
       let index =this.items.indexOf(o);
       if(index >-1){
        this.items.splice(index,1);
       }
   }


}

let list = new List<number>();

for (let i = 0; i < 10; i++) {
   list.add(i);    
}
 */

//class larda generic kullanımı
class Stack<T>{
    private elements : T[]= [];

constructor(private size: number){
    
}

isEmpty(): boolean{
    return this.elements.length===0;
}

isFull():boolean{
    return this.elements.length===this.size;
}

push(element: T):void{
    if(this.elements.length===this.size){
        throw new Error('the stack is overflow!');
    }

    this.elements.push(element);
}

pop(): T | undefined{
    if(this.elements.length===0){
        throw new Error('the stack is empty!');
    }
        return  this.elements.pop() ;
}

}

function randBetween(low:number, high:number): number {
    return Math.floor(Math.random() * (high-low+1) + low);
}


let numbers = new Stack<number>(5);

while(!numbers.isFull()){//dolana kadar push yap

    let n = randBetween(1,10);
    console.log(`push ${n} into the stack.`);
    numbers.push(n);
}

while(!numbers.isEmpty()){
   let n= numbers.pop();
    console.log(`pop ${n} into the stack.`);
}