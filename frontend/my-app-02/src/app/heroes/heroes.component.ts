import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Hero } from '../hero';
import { HeroInsertDialogComponent } from '../shared/hero-insert-dialog/hero-insert-dialog.component';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  id?: number;
  name?: string;
  dataSource: Hero[] = [];
  clickedRows = new Set<Hero>();

  @ViewChild(MatTable) table!: MatTable<Hero>;
  displayedColumns: string[] = ['id', 'name'];

  constructor(private heroService: HeroService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.dataSource = [...this.heroService.getHeroes()];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HeroInsertDialogComponent, {
      width: '250px',
      data: { id: this.id, name: this.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      let hero: Hero = { id: 0, name: result };
      this.dataSource.push(hero);
      console.log(this.dataSource);
      this.heroService.addHero(hero);
    });
  }
}
