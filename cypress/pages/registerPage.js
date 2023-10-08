export class registerPage{

    weblocator ={

        firstName:'#input-firstname',
        lastName:'#input-lastname',
        email:'#input-email',
        telephone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        policyCheckbox:'input[type="checkbox"]',
        continue:'.pull-right > .btn',

        
    }
  openUrl (){
    cy.visit(Cypress.env('URL'))
  }
    enterFirstName(FName){

        cy.get(this.weblocator.firstName).type(FName)
    }

    enterlastName(LName){

        cy.get(this.weblocator.lastName).type(LName)
    }
    enteremail(l){

        cy.get(this.weblocator.email).type(l)
    }
    entertelephone(tele){

        cy.get(this.weblocator.telephone).type(tele)
    }

    enterpassword(password){

        cy.get(this.weblocator.password).type(password)
        cy.get(this.weblocator.passwordConfirm).type(password)
    }
    selectCheckbox(){

        cy.get(this.weblocator.policyCheckbox).check()
       
    }
    clickOnContinue(){
        cy.get(this.weblocator.continue).click()
    }

}