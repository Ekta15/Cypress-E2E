import {registerPage} from "../../pages/registerPage" 

const registerObj = new registerPage()
import registerData from "../../fixtures/registerData.json"

describe('test automation',()=>{




    it('register flow', () =>{

        registerObj.openUrl()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterlastName(registerData.lastName)
        registerObj.enteremail(registerData.email)
        registerObj.entertelephone(registerData.telephone)
        registerObj.enterpassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()


    })
} )