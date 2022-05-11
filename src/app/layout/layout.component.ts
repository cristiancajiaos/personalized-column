import { Pelicula } from './../interfaces/pelicula';
import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public columnas = [
    { name: 'Título', prop: 'titulo', width: 400 },
    { name: 'Año', prop: 'annio', width: 125 },
    { name: 'Director', prop: 'director', width: 150 },
    { name: 'Escritor', prop: 'escritor', width: 250 },
    { name: 'Género', prop: 'genero', width: 200 },
    { name: 'Duración (min)', prop: 'duracion', width: 100 },
  ];

  public filas!: Pelicula[];

  public modoColumna = ColumnMode.force;
  public selectionType = SelectionType.multi;
  public selected: Pelicula[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filas = [
      {
        titulo: '...And Justice For All',
        annio: '1979',
        director: 'Norman Jewison',
        escritor: 'Barry Levinson, Valerie Curtin',
        genero: 'Crimen, Drama, Thriller',
        duracion: '119',
      },
      {
        titulo: 'The Verdict',
        annio: '1982',
        director: 'Sidney Lumet',
        escritor: 'David Mamet',
        genero: 'Drama',
        duracion: '129',
      },
      {
        titulo: 'The People vs. Larry Flynt',
        annio: '1996',
        director: 'Miloš Forman',
        escritor: 'Scott Alexander, Larry Karaszewski',
        genero: 'Drama',
        duracion: '130',
      },
      {
        titulo: '12 Angry Men',
        annio: '1957',
        director: 'Sidney Lumet',
        escritor: 'Reginald Rose',
        genero: 'Drama',
        duracion: '97',
      },
      {
        titulo: 'The Trial of the Chicago 7',
        annio: '2020',
        director: 'Aaron Sorkin',
        escritor: 'Aaron Sorkin',
        genero: 'Drama, Historia',
        duracion: '130',
      },
      {
        titulo: 'Philadelphia',
        annio: '1993',
        director: 'Jonathan Demme',
        escritor: 'Ron Nyswamer',
        genero: 'Drama',
        duracion: '126',
      },
      {
        titulo: 'The Client',
        annio: '1994',
        director: 'Joel Schumacher',
        escritor: 'Akiva Goldsman, Robert Getchell',
        genero: 'Drama, Thriller, Crimen, Misterio',
        duracion: '119',
      },
      {
        titulo: 'Judgement at Nuremberg',
        annio: '1961',
        director: 'Stanley Kramer',
        escritor: 'Abby Mann',
        genero: 'Drama, Historia, Guerra',
        duracion: '179',
      },
      {
        titulo: 'The Pelican Brief',
        annio: '1993',
        director: 'Alan J. Pakula',
        escritor: 'Alan J. Pakula',
        genero: 'Misterio, Drama, Thriller, Crimen',
        duracion: '141',
      },
      {
        titulo: 'Presumed Innocent',
        annio: '1990',
        director: 'Alan J. Pakula',
        escritor: 'Alan J. Pakula, Frank Pierson',
        genero: 'Misterio, Drama, Thriller, Crimen',
        duracion: '127',
      },
      {
        titulo: 'JFK',
        annio: '1991',
        director: 'Oliver Stone',
        escritor: 'Oliver Stone, Zachary Skylar',
        genero: 'Drama, Thriller, Historia',
        duracion: '189',
      },
      {
        titulo: 'The Judge',
        annio: '2014',
        director: 'David Dobkin',
        escritor: 'David Dobkin, Nick Schenk',
        genero: 'Drama',
        duracion: '141',
      },
      {
        titulo: 'Anatomy of a Murder',
        annio: '1959',
        director: 'Otto Preminger',
        escritor: 'Wendell Mayes',
        genero: 'Crimen, Drama, Misterio, Thriller',
        duracion: '161',
      },
      {
        titulo: 'Michael Clayton',
        annio: '2007',
        director: 'Tony Gilroy',
        escritor: 'Tony Gilroy',
        genero: 'Drama, Thriller',
        duracion: '119',
      },
      {
        titulo: 'The Lincoln Lawyer',
        annio: '2011',
        director: 'Brad Furman',
        escritor: 'John Romano',
        genero: 'Crimen, Drama, Thriller',
        duracion: '119',
      },
    ];
  }

  isSelected(reg: Pelicula): boolean {
    let title = reg.titulo;
    return this.selected.filter(pelicula => pelicula.titulo.includes(title)).length > 0
  }
}
