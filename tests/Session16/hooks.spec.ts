import {test,expect} from '@playwright/test'
test.beforeEach('BeforeEach',async()=>{
    console.log("xecutes before each test")
})
test.afterEach('AfterEach',async()=>{
    console.log("this is after each")
})
test.beforeAll('BeforeAll',async()=>{
    console.log("this is execcuted only onece before the test starts")
})
test.afterAll('AfterAll',async()=>{
    console.log("this is execcuted only onece after the test completion")
})
test('Test1' , async({page}) => {
    console.log("this is test1..........");
})
test('Test2' , async({page}) => {
    console.log("this is test2..........");
})
test('Test3' , async({page}) => {
    console.log("this is test3..........");
})
test('Test4' , async({page}) => {
    console.log("this is test4..........");
})

// hooks before executuing every test there is apraticular step to be performed thats hook
// for example login and logout  needs to be performed before every test