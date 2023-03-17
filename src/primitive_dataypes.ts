// with annotation of type of variables works
let sales: number = 123_345; // a big number can be stored with underscores
let course: string = 'Typescript';
let is_published: boolean = true;

// without annotation of datatypes it also works
let other_sales = 1234_434;
let other_course = 'Typescript course'
let other_is_published = true;


// ANY TYPE
// this makes it lose the core of typescript which is typesafety so you should avoid using `any` type
let anyVariable; // this is of type any
anyVariable = 1;
anyVariable = 'a'


// you can update tsconfig.json to not be strict about any
// function render(document: any) {
function render(document) {
    console.log(document);
}