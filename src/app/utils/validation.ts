

export class ValueValidation {

  static checkMethod(e, steps): void {
    if (e.target.id !== steps.length - 1) {
      if (e.target.value === '') {
        steps.splice(e.target.id, 1);
      } else {
        if (!steps.some(() => {})) {
          steps[+e.target.id] = e.target.value;
        }
      }
    }
  }





}
