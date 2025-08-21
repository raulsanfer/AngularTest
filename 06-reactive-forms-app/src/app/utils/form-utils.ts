import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";



export class FormUtils{
    
    static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
    static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

    static isValidField(form:FormGroup, fieldName: string): boolean {  
        return (
            !!form.controls[fieldName].errors && form.controls[fieldName].touched
        );

        // return !!(form.controls[fieldName].errors 
        // && (form.controls[fieldName].touched || form.controls[fieldName].dirty));
    };

    

    static isFieldOneEqualFieldTwo_(fieldOne: string, fieldTwo: string){
        return (form: FormGroup) => {
            console.log(form.get(fieldOne)?.value);
            console.log(form.get(fieldTwo)?.value);
            const fieldOneValue = form.get(fieldOne)?.value;
            const fieldTwoValue = form.get(fieldTwo)?.value;

            return fieldOneValue === fieldTwoValue ? null : {
                isFieldOneEqualFieldTwo: false
            };
    }
}


  static getTextError(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;

        case 'email':
          return 'Email inválido';

        case 'pattern':
        default:
          return `Error desconocido: ${key}`;
      }
    }

    return null;
  }

    static getFieldError(form:FormGroup, fieldName: string): string | null {

        if (!form.controls[fieldName]) return null;

        const errors = form.controls[fieldName].errors ?? {};

        return FormUtils.getTextError(errors);

        /*const field = form.get(fieldName);
        if (field?.errors) {
        for(const key of Object.keys(field.errors)) {
                switch (key) {
                case 'required':
                    return 'Campo requerido';
                case 'minlength':
                    return `Debe de ser de ${field.errors['minlength'].requiredLength} letras`;
                case 'min':
                    return 'El precio debe de ser 10 o mayor';
                case 'minStorage':
                    return 'Las existencias deben de ser 0 o mayor';
                default:
                        return `Error desconocido ${key}`;
                }      
            }
            return null;
        }
        return null;*/
    }

    static isValidFieldInArray(formArray:FormArray, index:number){
        return(formArray.controls[index].errors && formArray.controls[index].touched);
    }

    static getFieldErrorInArray(form:FormGroup, index:number): string | null {
        const field = form.get('favoriteGames')?.get(String(index));
        if (field?.errors) {
            for(const key of Object.keys(field.errors)) {
                switch (key) {
                    case 'required':
                        return 'Este campo es requerido';
                    case 'minlength':
                        return `Debe de ser de ${field.errors['minlength'].requiredLength} letras`;
                    default:
                        return `Error desconocido ${key}`;
                }
            }
        }
        return null;
    }

}