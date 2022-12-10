import React from "react"
import {Card,Button} from "react-bootstrap"
import PropTypes from "prop-types"

function Profile (props){
return(
 <Card style={{ width: '18rem' }}>
    
       {props.children}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Card.Text>{props.age}</Card.Text>
        
        <Button onClick={()=>props.eventHandler( props.title) }  variant="primary">{props.textButton}</Button>
      </Card.Body>
    </Card>
)
}

export default Profile
Profile.defaultProps={
    title:"n/a",
    textButton:"envoyer",
    text:"islem",
    age:18,
}
Profile.propTypes ={
   title:PropTypes.string,
   textButton:PropTypes.string,
   text:PropTypes.string,
   age:PropTypes.number,
   eventHandler: PropTypes.func.isRequired
}