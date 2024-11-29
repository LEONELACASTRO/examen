import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  passwordForm: FormGroup;

  ngOnInit() {
  }

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  async validatePasswords() {
    const password = this.passwordForm.get('password')?.value;
    const confirmPassword = this.passwordForm.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Las contraseñas coinciden.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden. Intente de nuevo.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  limpiar() {
    this.passwordForm.reset(); // Resetea todos los campos del formulario
  }

}
