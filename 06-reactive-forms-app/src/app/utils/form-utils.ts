import { FormArray, FormGroup } from "@angular/forms";



export class FormUtils{
    static isValidField(form:FormGroup, fieldName: string): boolean {  
    return !!(form.controls[fieldName].errors 
    && (form.controls[fieldName].touched || form.controls[fieldName].dirty));
  };

    static getFieldError(form:FormGroup, fieldName: string): string | null {

        const field = form.get(fieldName);
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
                    return 'Error desconocido';
                }      
            }
            return null;
        }
        return null;
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
                        return 'Error desconocido';
                }
            }
        }
        return null;
    }

}