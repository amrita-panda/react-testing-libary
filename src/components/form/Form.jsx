import React, { Component } from 'react';
import {Row,Col} from 'reactstrap';
import {formService} from '../services/formService';
import './Form.css';
class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            fullname:"",
            email:"",
            list:'',
            radio:'',
            data:[],
        }
    }
    componentDidMount(){
        formService.getUsers().then(response=>{
            this.setState({data:response.data})
        }).catch(error=>error)
    }
    handelOnChange = (e) =>{
        console.log(e.target.name);
        const name=e.target.name;
        let value=e.target.value;
        this.setState({[name]:value})   

    }
    handelSubmit = (e)=>{
        e.preventDefault();
        this.setState({fullname:"",list:"",radio:false,email:""});
    }

    fetchData=() =>{
        formService.getUsers().then(response=>{
           console.log(response);
          // this.setState({data:response.data})
       }).catch(error=>{
           console.log(error);
       })
   }
    render() {
        
        const {review,fullname,list,radio,email,data}=this.state;
        console.log(data)
        return (
            <div>
                <h3 className='text-primary'>Form</h3>
                <button type='button'  onClick={() => this.fetchData()}>Fetch Data</button>

                <form onSubmit={(e) => this.handelSubmit(e)} className='form-div'>
                    <Row xs="1" md="4">
                        <Col>
                            <div className="form-group">
                                <label >FullName:</label>
                                <input type="text" className="form-control"  name='fullname' value={fullname} onChange={(e) => this.handelOnChange(e)} />
                            </div>
                            <div className="form-group">
                                <label >Email</label>
                                <input type='email' className="form-control"  name='email' value={email} onChange={(e) => this.handelOnChange(e)} />
                            </div>
                            <div className="form-group">
                                <label >Comment:</label>
                                <textarea className="form-control" rows="5"  name='review' value={review} onChange={(e) => this.handelOnChange(e)}></textarea>
                            </div>
                            <div className="form-group">
                                <label >Select list:</label>
                                <select className="form-control"  value={list} name='list' onChange={(e) => this.handelOnChange(e)}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className="radio">
                                <label><input type="radio"  name='radio' value={radio} onChange={(e) => this.handelOnChange(e)} />Option 2
                                </label>
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <button >Submit Form</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default Form;