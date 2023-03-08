import './Message.scss'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img
          src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
      </div>
    </div>
  )
}

export default Message
