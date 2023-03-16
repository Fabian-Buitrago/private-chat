import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import './Message.scss'

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  return (
    <div className='message owner'>
      {/* <div className='messageInfo'>
        <img
          src={message.photoURL}
          alt=''
        />
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img
          src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div> */}
    </div>
  )
}

export default Message
