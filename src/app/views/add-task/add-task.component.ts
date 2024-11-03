import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { RerollComponent } from '../../components/reroll/reroll.component';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [NavComponent, TaskCardComponent, ButtonComponent, RerollComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  task1 = {
    title: 'Tarefa X',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus'
  }

  task2 = {
    title: 'Tarefa Y',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et'
  };

  reroll() {
    console.log("reroll")
  }
}

