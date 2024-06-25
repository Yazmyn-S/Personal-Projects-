//--------------Source Code-----------------//
//Step 3: define the Stack
class Stack{
  //Step 4: initiaiize stack with the right data
  constructor(){
    this.top = -1;
    this.items = {};  //represented empty stack without using array
  }  
  //add push, pop, and peek functionality
  get peek(){
    return this.items[this.top];
  }
  push(value){
    this.top += 1;
    this.items[this.top] = value;
  }
  pop(value){
    this.items[this.top] = value;
  }
}

//-----------------Tests-------------------//
//Step 1: Describe what you're testing
describe('My Stack', () =>{
  //Globally Initialize stack
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('is created empty', () =>{
    //Step 2: Describe what a passing test should look like
    //const stack = new Stack(); Instead of initializing stack in each test, do it globally within describe
    expect(stack.top).toBe(-1);     //toBe checks for reference equality
    expect(stack.items).toEqual({});   //toEqual checks for value equality
  });
  test('can push to the top', () =>{
    stack.push('💓')
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('💓');
  });

  test('can pop off', ()=>{
    stack.pop();
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  /* Note: todo
  *   test.todo('blah'); 
  *   Allows you to temporarily pass a test while you figure things out
  */
})