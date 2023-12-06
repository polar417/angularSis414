import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  name: string = "";
  abrev: string = "";
  dataSource: any = [];

  isEditing = false;
  editRow: any = null;

  constructor(private language: LanguagesService) {}

  ngOnInit() {
    this.loadLanguages();
  }

  loadLanguages() {
    this.language.getListLanguges().subscribe((data) => {
      this.dataSource = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    });
  }

  save() {
    let body = {
      name: this.name,
      abrev: this.abrev
    };
    this.language.postLanguage(body).subscribe((data) => {
      if (data != null) {
        this.loadLanguages();
      }
    });
  }

  borrar(id: string) {
    let aux = confirm("Esta Seguro de Borrar");
    if (!aux) return;
    this.language.deleteLanguage(id).subscribe((data) => {
      if (data == null) {
        this.loadLanguages(); 
      }
    });
  }

  actualizar(id: string) {
    let aux = confirm("Esta Seguro de Actualizar");
    if (!aux) return;
    this.isEditing = true;
    this.editRow = { ...this.dataSource.find((item: { id: string; }) => item.id === id) };
  }

  cancelarEdicion() {
    this.isEditing = false;
    this.editRow = null;
  }

  guardar() {
    this.language.updateLanguage(this.editRow.id, this.editRow).subscribe(() => {
      this.loadLanguages();
      this.isEditing = false;
      this.editRow = null;
    });
  }
}
