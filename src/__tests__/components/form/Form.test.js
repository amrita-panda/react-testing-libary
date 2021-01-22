import {render,screen,fireEvent} from '@testing-library/react'
import Form from '../../../components/form/Form';
//import {formService} from '../../../components/services/formService'
import {formService} from '../../../__mocks__/formService';

jest.mock('../../../__mocks__/formService')

beforeEach(()=>{
   
})

// describe('form rendered without any ',()=>{
//  const  {getByText,get}=render(<Form />)
//     it('form renders without any breakage',()=>{
//         //console.debug(wrapper)
//         let heading=screen.getByRole('heading', {
//             name: /form/i
//           })
//           expect(heading).toBeInTheDocument()
//          //const userName=screen.getByLabelText('FullName:')
//          //console.log(userName);

//         //const fullName=screen.getBy('label',{name:/FullName:/i})
//         const fullName=screen.getByText('FullName:');
//         //console.log(fullName.nodeName)
//           expect(fullName.nodeName).toBe('LABEL')
//           //expect(fullName.)
         
//           //FOR CHECKING LASTName
//           const email=screen.getByText('Email');
//           //console.log(fullName.nodeName)
//             expect(email.nodeName).toBe('LABEL')

//             // const inputFullname=screen.getByLabelText('FullName:',{selector:'input',});
//             // console.log(inputFullname);
//     })
// })

describe('api calls',()=>{

    test('mock getUser api call',()=>{
        formService.getUsers.mockResolvedValueOnce({data:[{name:'mock',email:'mcok@digitaldots.ai'}]})
        render(<Form />)
    })
    
    test('with jestSpyon ',()=>{
          jest.spyOn(formService,'getUsers').mockImplementation(()=>{
            return Promise.resolve({
                data:[
                    {"name":'getSpy1',email:'getSpy1@gmail.com'},
                    {"name":'getSpy2',email:'getSpy2@gmail.com'}
                ]
            })
            
        })

    })
    render(<Form />)
    jest.clearAllMocks()
})


describe('form input fields present',()=>{

    test('fullname is inputbox present',()=>{
        render(<Form />)
        const fullName=screen.getByText('FullName:',{exact:false})
        expect(fullName.textContent).toBe('FullName:')
        expect(fullName.tagName.toLowerCase()).toBe('label')
     
    })
    test('email input box present',()=>{
        render(<Form />)
        const email=screen.getByText('Ema',{exact:false})
        expect(email.textContent).toBe('Email')
        expect(email.tagName.toLowerCase()).toBe('label')
     
    })
    test('textarea present',()=>{
        render(<Form />)
        const comment=screen.getByText('Comment',{exact:false})
        expect(comment.textContent).toBe('Comment:')
        expect(comment.tagName.toLowerCase()).toBe('label')
     
    })
    test('select list present',()=>{
        render(<Form />)
        const selectList=screen.getByText('Select',{exact:false})
        expect(selectList.textContent).toBe('Select list:')
        expect(selectList.tagName.toLowerCase()).toBe('label')
     
    })
    test('radio is present',()=>{
        render(<Form />)
        const radio=screen.getByText('Option',{exact:false})
        expect(radio.textContent).toBe('Option 2')
        expect(radio.tagName.toLowerCase()).toBe('label')
     
    })

    test('form submit button is present',()=>{
        render(<Form />)
        const submitBtn=screen.getByText('Option',{exact:false})
        expect(submitBtn.textContent).toBe('Option 2')
        expect(submitBtn.tagName.toLowerCase()).toBe('label')
     
    })
    
    // screen.logTestingPlaygroundURL()
    // screen.logTestingPlaygroundURL(screen.getByText('FullName:'))
})

describe('onchange to all input fields',()=>{
    test('fullname onchange event triggered',()=>{
        render(<Form />)
        let fullnameInput =document.querySelector('input[name="fullname"]')
        console.log(fullnameInput.values);
        fireEvent.change(fullnameInput, { target: { value: 'amrita panda' } })
        expect(fullnameInput.value).toEqual('amrita panda')
    })

    test('email onchange event triggered',()=>{
        render(<Form />)
        let emailInput =document.querySelector('input[name="email"]')
        console.log(emailInput.values);
        fireEvent.change(emailInput, { target: { value: 'amritapanda@digitaldots.ai' } })
        expect(emailInput.value).toEqual('amritapanda@digitaldots.ai')
    })

    test('email onchange event triggered',()=>{
        render(<Form />)
        let emailInput =document.querySelector('input[name="email"]')
        console.log(emailInput.values);
        fireEvent.change(emailInput, { target: { value: 'amritapanda@digitaldots.ai' } })
        expect(emailInput.value).toEqual('amritapanda@digitaldots.ai')
    })
})

