import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RerollComponent } from '../../components/reroll/reroll.component';
import { TasksService } from '../../services/tasks/tasks.service'; 
import { UserTasksService } from '../../services/userTasks/userTasks.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [NavComponent, TaskCardComponent, ButtonComponent, RerollComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit {
  task1: any = {};
  task2: any = {};
  userId = sessionStorage.getItem('userId') || "";
  selectedTaskId: number | null = null;
  pendingTask: any = null; 
  taskAssigned: boolean = false;

  constructor(private tasksService: TasksService, private userTasksService: UserTasksService) {}

  //Quando abrir a página, verifica se o usuário já possui tarefas em andamento ou se deve gerar novas
  ngOnInit() {
    this.checkPendingTask();
    this.reroll()
  }
  //Carrega novas tarefas
  loadRandomTasks() {
    this.tasksService.generateTask().subscribe(response => {
      if (response.tasks && response.tasks.length >= 2) {
        this.task1 = response.tasks[0];
        this.task2 = response.tasks[1];
      }
    });
  }
  //Checa se o usuário possui tarefas
  checkPendingTask() {
    this.userTasksService.pendingTask(this.userId).subscribe(response => {
      if (response.task[0]) {
        this.pendingTask = response.task[0];
        console.log(this.pendingTask.task)
        this.taskAssigned = true;
      } else {
        this.loadRandomTasks();
      }
    });
  }
  //Botão reroll
  reroll() {
    this.loadRandomTasks();
  }
  //Seleciona task para adicionar
  selectTask(taskId: number) {
    this.selectedTaskId = taskId;
  }

  //Adiciona task
  assignTask() {
    if (this.selectedTaskId !== null) {
      this.userTasksService.assignTask(this.userId, this.selectedTaskId).subscribe(response => {
        console.log(response.message);
        this.pendingTask = { id: this.selectedTaskId, name: this.selectedTaskId === this.task1.id ? this.task1.name : this.task2.name, description: this.selectedTaskId === this.task1.id ? this.task1.descripton : this.task2.descripton };
        this.taskAssigned = true;
      });
    } else {
      console.log("Nenhuma tarefa selecionada");
    }
  }

  //Marca task como concluída
  completeTask() {
    if (this.pendingTask) {
      this.userTasksService.completeTask(this.pendingTask.id).subscribe(response => {
        console.log(response.message);
        this.pendingTask = null;
        this.taskAssigned = false;
        this.loadRandomTasks();
      });
    }
  }
}