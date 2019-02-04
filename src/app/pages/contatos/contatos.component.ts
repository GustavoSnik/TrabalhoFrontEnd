import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  passwordError: boolean = false;

  constructor() { }

  ngOnInit() {
  }


  onSubmit(login){
	console.log(login);
}

	checkPassword(senha){
	if(senha.value.length!=6)
		this.passwordError = true;
	else
		this.passwordError = false;
	}


}