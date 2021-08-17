import React from 'react'
import emailjs from 'emailjs-com'
import styled from 'styled-components'
import paulImg from '../images/paul_young.png'

const ContactSection = styled.section`
  height: auto;
  background-color: ${ props => props.dark ? 'black' : 'white'};
  transition: 0.3s all ease;
`

const ContactWrapper = styled.div`
  margin:0 auto;
  padding: 50px 0;
  max-width: 900px;
  color:${ props => props.dark ? 'white' : 'black'};
  font-family: Poppins;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`
const AboutMe = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0 100px;
  p {
    font-family: Poppins;
    color: ${props => props.dark ? 'white' : 'dark'};
    margin: 20px;
    text-align: center;
    font-size: 1.2rem;
  }

  img {
    object-fit: contain;    
    max-height: 500px;    
    max-width: 500px;
    padding: 20px;
  }

  @media(max-width: 768px){
    flex-direction: column;
    padding: 50px;

    img {
      width: 100%;
      margin: 50px;
      padding: 0 50px;
      object-fit: contain;
      
    }
  }
`

const ContactForm = styled.form`
  width: 80%;
  margin: 50px auto;
  height: 50vh;
  min-width: 50%;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ContactHeader = styled.h3`

  text-align: center;
  color: ${ props => props.dark ? 'white' : 'black'};
`

const Label = styled.label`
  font-family: Poppins;
  margin-top: 20px;
  width: 80%;
  cursor:text;
`

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  border-bottom: 1px solid ${ props => props.dark ? 'white' : 'black'};
  background-color: ${props => props.dark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)'};
  outline: 0;

  :hover,
  :active,
  :focus {
    outline:none;
    background-color: ${ props => props.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
    color:  ${ props => props.dark ? 'white' : 'black'};
  }
`

const MessageInput = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  min-height: 30px;
  padding: 5px;
  height: 100px;
  border:none;
  border-bottom: 1px solid ${ props => props.dark ? 'white' : 'black'};
  background-color: ${props => props.dark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)'};

  :hover,
  :active,
  :focus {
    outline:none;
    background-color: ${ props => props.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
    color:  ${ props => props.dark ? 'white' : 'black'}; 
  }
`

const FormButton = styled.button`
  padding: 20px 40px;
  margin-top: 30px;
  font-family: Poppins;
  cursor:pointer;
  font-weight: bolder;
  letter-spacing: 1px;
  border-radius: 30px;
  transition: 0.3s all ease;
  background-color: ${ props => props.dark ? 'white' : 'black'};
  color: ${ props => props.dark ? 'black' : 'white'};

  :hover {
    background-color: ${ props => props.dark ? 'black' : 'white'};
    color:${ props => props.dark ? 'white' : 'black'};
  }
`


const Contact = ({ dark }) => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_n9akwnr', 'contact_form', e.target, 'user_gddiMhARmoLCK9FcmaEeH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }


  return (
    <ContactSection dark={dark}>
      <ContactWrapper dark={dark}>
        
        <AboutMe dark={dark}>
          <p>Paul Meuse is an artist based in Salem, Oregon. </p>
          <img src={paulImg} alt='paul young' />
        </AboutMe>
       
        <ContactForm onSubmit={sendEmail}>
          <ContactHeader dark={dark}>
            For prints, commissions, or other inquiries.
          </ContactHeader>
           <Label>
              Name              
              <Input type="text" name="user_name" dark={dark}/>
            </Label>
            <Label>
              Email*             
              <Input type='email' name='user_email' dark={dark}/>
            </Label>
            <Label>
              Message
              <MessageInput type='message' name='message' dark={dark} />
            </Label>
          <FormButton dark={dark}>Send</FormButton>
        </ContactForm>
      </ContactWrapper>
    </ContactSection>
  )
}

export default Contact
