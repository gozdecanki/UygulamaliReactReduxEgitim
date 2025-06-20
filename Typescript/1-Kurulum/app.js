console.log("Typescript e giriş yaptık");
console.log("Typescript e giriş yaptık -w ile"); // ts dosyasındaki değişikliğin otomatik olarak js ye aktarmak için tsc app.ts -w ile komut satırını çalıştırıyoruz
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
var Person = /** @class */ (function () {
    function Person(id, firstName, lastName) {
        this.id = id,
            this.firstName = firstName,
            this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        //return this.firstName +' '+this.lastName;
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var kisiBilgim = new Person(1, "Gözde", "Cankı");
console.log(kisiBilgim);
console.log(kisiBilgim.getFullName());
