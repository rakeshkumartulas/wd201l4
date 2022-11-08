const todoList=require('../todo');
const{all,markAsComplete,add }= todoList;
describe("To do list test suits", () => {
    beforeAll(() => {
      const today_Date = new Date();
      const oneDay = 86400000;
      const yesterday_Date = new Date(todayDate.getTime() - 1 * oneDay);
      const tomorrow_Date = new Date(todayDate.getTime() + 1 * oneDay);
  
      const today = today_Date.toLocaleDateString("en-CA");
      const yesterday = yesterday_Date.toLocaleDateString("en-CA");
      const tomorrow = tomorrow_Date.toLocaleDateString("en-CA");
  
      todoList.add({
        title: "Pay internet Bill",
        dueDate: today,
        completed: true,
      });
      todoList.add({
        title: "Pay Telephone Bill",
        dueDate: yesterday,
        completed: true,
      });
      todoList.add({ title: "ITR ", dueDate: today, completed: false });
      todoList.add({ title: "Calling to mantor", dueDate: tomorrow, completed: false });
      todoList.add({ title: "laptop repair", dueDate: tomorrow, completed: false });
    });
    test("It should add new todo", () => {
      const todoItemCount = todoList.all.length;
      todoList.add({
        title: "cloth washing",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      });
      expect(todoList.all.length).toBe(todoItemCount + 1);
    });
    test("Should markAsComplete", () => {
      todoList.markAsComplete(0);
      expect(todoList.all[0].completed).toBe(true);
    });
    test("verify of fine on overdue items", () => {
      const today = new Date();
      const oneDay = 86400000;
      const existingOverdueItems = todoList.overdue();
      todoList.add({
        title: "An last Item",
        completed: false,
        dueDate: new Date(today.getTime() - 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      });
      const overdueItems = todoList.overdue();
      expect(overdueItems.length).toBe(existingOverdueItems.length + 1);
    });
  
    test("verify the of fine on due today items", () => {
      const existingTodaysItems = todoList.dueToday();
      const today = new Date();
      
      todoList.add({
        title: " only Demo  item",
        completed: false,
        dueDate: new Date(today.getTime()).toLocaleDateString("en-CA"),
      });
      const todayItems = todoList.dueToday();
      expect(todayItems.length).toBe(existingTodaysItems.length + 1);
    });
  
    test("verify of due the later items", () => {
      const existingdueLaterItems = todoList.dueLater();
      const today = new Date();
      const oneDay = 86400000;
    
      todoList.add({
        title: " only Demo item",
        completed: false,
        dueDate: new Date(today.getTime() + 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      });
      const dueLaterItems = todoList.dueLater();
      expect(dueLaterItems.length).toBe(existingdueLaterItems.length + 1);
    });
  });
  
