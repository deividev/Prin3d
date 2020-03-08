import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {





  constructor() { }

  ngOnInit(): void {
  }

}


/*const ulElement = document.getElementById('list');

  function printList(ulElement, contactos) {

    while (ulElement.firstChild) {
      ulElement.removeChild(ulElement.firstChild);

    }
    contactos.forEach(elem => {
      const li = document.createElement('li');
      const text = document.createTextNode(elem.name);
      li.appendChild(text);
      li.classList.add("contactCard");
      ulElement.appendChild(li);

      const textName = document.createTextNode(elem.name);
      const textEmail = document.createTextNode(elem.email);
      const textPhone = document.createTextNode(elem.phone);
      const textGroup = document.createTextNode(elem.group);

      let nameNode = document.getElementById('name');
      let emailNode = document.getElementById('email');
      let phoneNode = document.getElementById('phone');
      let groupNode = document.getElementById('group');

      //Pintando datos cuando pinchas en un contacto
      li.onclick = function printDates() {
        nameNode.appendChild(textName);
        emailNode.appendChild(textEmail);
        phoneNode.appendChild(textPhone);
        groupNode.appendChild(textGroup);
      }
   });
*/
