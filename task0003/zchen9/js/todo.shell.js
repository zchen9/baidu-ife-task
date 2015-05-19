/**
 * Created by Chen on 2015-05-17.
 */
window.onload = function(){

    var init = {

	    todoTaskItem : (function(){
		    var todoTaskList = $(".todo-task-list");
		    var todoItem = [];
		    for(var j=0;j<todoTaskList.length;j++){
			    var todoTaskItem = todoTaskList[j].getElementsByTagName("li");
			    todoItem.push(todoTaskItem[0]);
		        todoItem.push(todoTaskItem[1]);
		    }
		    return todoItem;
	    })(),
	    todoDetail : $("dd"),
	    todoInventory : $(".todo-inventory-category")[0].children,

	    classToggle : function(e){
		    e = e||window.event;
		    var target = e.target||e.srcElement;
		    stopBubble(e);
		    var classname = "";
		    if(target.parentNode!=null){
			    switch(target.parentNode.className){
				    case "todo-inventory-detail":
					    classname="todo-detail-selected";
					    break;
				    case "todo-inventory-category":
					    classname="todo-inventory-selected";
					    break;
				    case "todo-task-list":
					    classname="todo-task-selected";
					    for(var j=0;j<init.todoTaskItem.length;j++){
						    removeClass(init.todoTaskItem[j],classname);
					    }
					    break;
			    }
			    delegateInitClass(target,classname);
		    }
	    }
    };


	delegateClickEvent(init.todoTaskItem,init.classToggle);
	delegateClickEvent(init.todoDetail,init.classToggle);
	delegateClickEvent(init.todoInventory,init.classToggle);

};
