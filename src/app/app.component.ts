import { Component, OnInit } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';

@Component({
  selector: 'app-root',
  template: `
    <h2> Welcome to new world </h2>
    <h3 class="test-success"> {{name}} </h3>
    <h3 [class]="classdemo"> Sindhu </h3>
    <h4 [class.test-danger]="danger"> Danger Demo </h4>  
    <h4 [ngClass]="meassageClasses"> Danger Demo for multiple classes </h4>  
    <p [style.color]= "'purple'"> This is an example for style binding </p>
    <p [style.color]= "danger? 'red': 'pink'"> This is an example for conditional style binding </p>
    <p [style.color]= "highlightColor"> This is an example for style-color binding from class</p>
    <p [ngStyle]= "stylebinding"> This is an example for style binding from class</p>
    <button (click)="onClick($event)"> Click me!</button>
    <p *ngIf="danger"> {{greeting}} </p>

    <button (click)="greeting='Welcome Sindhu'"> welcome</button>
    {{greeting}} <br/>
    <br/>
    <input type="text" #msgvalue/>
    <button (click)="logmessage(msgvalue.value)"> Log me!</button>
    <input type="text" [(ngModel)]="name" />
    {{name}}


    <h2 *ngIf="danger; else elseBlock">
        This is an example of NgIf directive
    </h2>
    <ng-template #elseBlock>
    <h2>
        This is Else Block 
    </h2></ng-template>

    <div *ngIf="danger; then thenBlock; else elseBlock2" ></div>
     <ng-template #thenBlock>
        <h2>
            This is then block for True condition of ngIf
        </h2>
      </ng-template>
      <ng-template #elseBlock2>
        <h2>
            This is Else Block 
        </h2>
      </ng-template>

      <div [ngSwitch]="colour">
        <div *ngSwitchCase="'red'">You picked Red color </div>
        <div *ngSwitchCase="'blue'">You picked Blue Color </div>
        <div *ngSwitchCase="'pink'">You picked Pink colour </div> 
        <div *ngSwitchDefault> Pick Again! </div>
      </div>

      <div *ngFor="let color1 of colors; index as i; even as e; last as l">
        <h2 [style.color]="color1">{{i}} {{e}} {{color1}} {{l}}</h2>
      </div>
   `,
  //styleUrls: ['./app.component.css']
  styles:   [`
    .test-success{
      color:green;
    }
    .test-danger{
      color:red;
    }
    .test-special{
      font-style:italic;
      //color: blue;
    }
  `]
})
export class AppComponent implements OnInit{
  name = 'Sindhu';
 public  classdemo="test-special";
 danger=false;
 public isSpecial =true;
 greeting;
 colour="blue";
 public meassageClasses={
   "test-success": !this.danger,
   "test-danger" : this.danger,
   "test-special" : !this.danger
 };
 public stylebinding={
   fontStyle:"italic",
   color:"blue"
 };
 public highlightColor = "orange";
  constructor(){}
  ngOnInit(){
  }

  public colors=["red", "blue","green","grey"];

  onClick(event){
    this.danger=true;
    console.log(event);
    this.greeting ="Thanks for Clicking me!"
    alert(this.greeting +"  , this is a "+ event.type +"event");
    //this.greeting=event.type;
    
  }
  logmessage(mesg){
    console.log(mesg);
  }

}
