import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts:{
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
    tagsCard : string;
    
  }[] = [
    {
      id: '1',
      titlePost: 'Post 1',
      contentPost: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
      imagePost: 'https://picsum.photos/seed/picsum/200/300',
      tagsCard: 'Deporte',
     
    },
    {
      id: '2',
      titlePost: 'Post 2',
      contentPost: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
      imagePost: 'https://picsum.photos/seed/picsum/200/300',
      tagsCard: 'Deporte',
      

    },
    {
      id: '3',
      titlePost: 'Post 3',
      contentPost: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
      imagePost: 'https://picsum.photos/seed/picsum/200/300',
      tagsCard: 'Deporte',
      
    },
    {
      id: '4',
      titlePost: 'Post 4',
      contentPost: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
      imagePost: 'https://picsum.photos/seed/picsum/200/300',
      tagsCard: 'Deporte',
      
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
