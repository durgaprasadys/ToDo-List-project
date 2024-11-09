function addTask(){
    var taskInput=document.getElementById("new_task")
    var taskList=document.getElementById("task_List")

    if(taskInput.value ==="")
    {
        alert("Please enter the Task")
        return 
    }
    var listItem=document.createElement('li')
    listItem.innerText=taskInput.value

    var buttonContainer=document.createElement('div')
    buttonContainer.className='task_button'

    var deleteButton=document.createElement('button')
    deleteButton.innerText='Delete'
    deleteButton.onclick=function(){
        taskList.removeChild(listItem)
    }

    var completeButton=document.createElement('button')
    completeButton.innerText='Complete'
    completeButton.onclick=function(){
        listItem.classList.toggle('Complete')
    }

    buttonContainer.appendChild(deleteButton)
    buttonContainer.appendChild(completeButton)
    listItem.appendChild(buttonContainer)
    taskList.appendChild(listItem)

    taskInput.value=""
} 