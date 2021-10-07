import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  productForm: FormGroup;
  successSubmition = false;

  constructor(private fb: FormBuilder, private firestore: FirestoreService) {
    this.productForm = this.fb.group({
      code: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required, Validators.min(0)])],
      stock: ['', Validators.compose([Validators.required, , Validators.min(0)])],
      origin: ['', Validators.compose([Validators.required])],
      eatable: [false]
    });
  }

  ngOnInit(): void {
  }

  asignCountry(country: string) {
    this.productForm.controls['origin'].setValue(country);
  }

  submitProductForm() {
    if (this.productForm.valid) {
      this.firestore.saveDocument('products',
        {
          code: this.productForm.controls['code'].value,
          description: this.productForm.controls['description'].value,
          price: this.productForm.controls['price'].value,
          stock: this.productForm.controls['stock'].value,
          origin: this.productForm.controls['origin'].value,
          eatable: this.productForm.controls['eatable'].value,
        }
      ).then(
        () => {
          this.resetForm()
        }
      )
    }
  }

  resetForm() {
    this.productForm.controls['code'].setValue('');
    this.productForm.controls['description'].setValue('');
    this.productForm.controls['price'].setValue('');
    this.productForm.controls['stock'].setValue('');
    this.productForm.controls['origin'].setValue('');
    this.productForm.controls['eatable'].setValue('');
    this.successSubmition = true;
    setTimeout(
      () => {
        this.successSubmition = false
      },
      2500
    )
  }

  isInputValid(formControlName: string) {
    return !this.productForm?.get(formControlName)?.valid && 
    (
      this.productForm?.get(formControlName)?.touched || 
      this.productForm?.get(formControlName)?.dirty
    );
  }

}
