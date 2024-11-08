import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { HistoryCardComponent } from "../../components/history-card/history-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavComponent, HistoryCardComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user = {
    name: "Tonho",
    email: "tonho@email",
    points: 10,
    img: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
  }

  history = [
    {name: "Tarefa A", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula e. Pellentesque habitant morbi tris et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique"},
    {name: "Tarefa B", text: "Lorem ipsum dolor sit amet, consectetur"},
    {name: "Tarefa C", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula e. Pellentesque habitant morbi tris et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa"},
    {name: "Tarefa D", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula e. Pellentesque habitant morbi tris et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula e. Pellentesque habitant morbi tris et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula e. Pellentesque habitant morbi tris et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique"},
    {name: "Tarefa E", text: " Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique"},
    {name: "Tarefa F", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula e. Pellentesque habitant morbi tris et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula e. Pellentesque habitant morbi tris et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum."},
    {name: "Tarefa G", text: "Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, elit. Etiam eget ligula e. Pellentesque habitant morbi tris et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique"},
   

  ]
}
