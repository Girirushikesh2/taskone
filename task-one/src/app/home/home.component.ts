import { Component, OnInit,Input, OnChanges, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @Input() strokeColor: string = "";
  // @Input() strokeDashArray: string = "";
  // singleLine: boolean = true;


  constructor() { }

  ngOnInit(): void {

    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openModalButtons.forEach(button =>  {
      button.addEventListener('click', () =>{
        const modalone  = document.getElementById('modalone')
        openModal(modalone)
      })
    })

    overlay?.addEventListener('click', () =>{
      const modals = document.querySelectorAll('.modalone.active')
      modals.forEach(modalone =>{
        closeModal(modalone)
      })
    })

    closeModalButtons.forEach(button =>  {
      button.addEventListener('click', () =>{
        const modalone = button.closest('.modalone')
        closeModal(modalone)
      })
    })

    function openModal(modalone:any){
      if (modalone == null) return
      modalone.classList.add('active')
      overlay?.classList.add('active')
    }

    function closeModal(modalone:any){
      if (modalone == null) return
      modalone.classList.remove('active')
      overlay?.classList.remove('active')
    }


    

  }

  

}
