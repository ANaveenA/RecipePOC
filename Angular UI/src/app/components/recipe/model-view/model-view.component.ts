import { Component, OnInit , Inject} from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-model-view',
  templateUrl: './model-view.component.html',
  styleUrls: ['./model-view.component.css']
})
export class ModelViewComponent implements OnInit {

  recipe: any;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ModelViewComponent>) {
    if (data) {
      this.recipe = data;
      console.log(this.recipe)
    }
    this.dialogRef.updateSize('300vw','300vw')
  }

   ngOnInit() {
   
  
    
  }
  onConfirmClick(): void {
    this.dialogRef.close(true);
  }


  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
