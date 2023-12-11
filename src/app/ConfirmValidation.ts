import { FormGroup } from '@angular/forms';

export class ConfirmValidation {
  public static confirm(
    controllerName1: string,
    controllerName2: string,
  ): (form: FormGroup) => { confirmationError: { message: string } } {
    return (form: FormGroup) => {
      const controller1 = form.controls[controllerName1].value;
      const controller2 = form.controls[controllerName2].value;
      if (controller1 === controller2) {
        return null;
      }
      return {
        confirmationError: { message: 'the passwords must be the same!' },
      };
    };
  }
}
