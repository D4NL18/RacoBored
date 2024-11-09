import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RerollComponent } from '../../components/reroll/reroll.component';
import { TasksService } from '../../services/tasks/tasks.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [NavComponent, TaskCardComponent, ButtonComponent, RerollComponent, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit {
  task1: any = {};  // Armazena a primeira tarefa aleatória
  task2: any = {};  // Armazena a segunda tarefa aleatória
  userId = sessionStorage.getItem('user_id') || "";
  selectedTaskId: number | null = null; // Armazena o ID da tarefa selecionada
  pendingTask: any = null;  // Armazena a tarefa pendente
  taskAssigned: boolean = false;  // Indica se uma tarefa foi atribuída

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    // Verifica se o usuário tem tarefas pendentes
    this.checkPendingTask();
    this.reroll()
  }

  loadRandomTasks() {
    this.tasksService.generateTask().subscribe(response => {
      if (response.tasks && response.tasks.length >= 2) {
        this.task1 = response.tasks[0];
        this.task2 = response.tasks[1];
      }
    });
  }

  checkPendingTask() {
    this.tasksService.pendingTask(this.userId).subscribe(response => {
      if (response.task) {
        this.pendingTask = response.task;
        this.taskAssigned = true;
      } else {
        this.loadRandomTasks();
      }
    });
  }

  reroll() {
    // Gera duas novas tarefas aleatórias
    this.loadRandomTasks();
  }

  selectTask(taskId: number) {
    // Seleciona a tarefa, mas não a atribui ainda
    this.selectedTaskId = taskId;
  }

  assignTask() {
    if (this.selectedTaskId !== null) {
      // Atribui a tarefa selecionada ao usuário
      this.tasksService.assignTask(this.userId, this.selectedTaskId).subscribe(response => {
        console.log(response.message);
        this.pendingTask = { task_id: this.selectedTaskId, nome: this.selectedTaskId === this.task1.task_id ? this.task1.nome : this.task2.nome, descricao: this.selectedTaskId === this.task1.task_id ? this.task1.descricao : this.task2.descricao };
        this.taskAssigned = true; // Marca a tarefa como atribuída
      });
    } else {
      console.log("Nenhuma tarefa selecionada");
    }
  }

  completeTask() {
    if (this.pendingTask) {
      // Atualiza o status da tarefa para concluído
      this.tasksService.completeTask(this.userId, this.pendingTask.task_id).subscribe(response => {
        console.log(response.message);
        this.pendingTask = null; // Reseta a tarefa pendente após concluir
        this.taskAssigned = false; // Reseta a flag de tarefa atribuída
        // Após concluir, carrega novas tarefas aleatórias
        this.loadRandomTasks();
      });
    }
  }
}