import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../../components/Message'
import Loader from '../../../components/Loader'
import { listContactMessages } from '../../../actions/contactActions';
import Paginate from '../../../components/Paginate'

const ContactMessageScreen = ({ history,match }) => {
  const dispatch = useDispatch()
  const pageNumber = match.params.pageNumber || 1;

  const messageList = useSelector((state) => state.messageList)
  const { loading, error, contacts,page,pages } = messageList;
  console.log("contacts",contacts);
//  console.log("pages",pages)
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listContactMessages(pageNumber))
    } else {
      history.push('/login')
    }
  }, [dispatch, history,userInfo,pageNumber])

  return (
    <>
      <h1>Messages</h1>
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>USER Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>DATE</th>
            </tr>
          </thead>
          { loading ? (
         <Loader />
       ) : error ? (
         <Message variant='danger'>{error}</Message>
       ) : (
          <tbody>
            {contacts && contacts.map((message) => (
              <tr key={message._id}>
                <td>{message._id}</td>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.subject}</td>
                <td>{message.message}</td>
                <td>{message.createdAt.substring(0, 10)}</td>
              </tr>
            ))}
          </tbody>
          )}
        </Table>
      {/* )} */}
        <Paginate pages={pages} page={page} isAdmin={true} pageName="messages"/>
    </>
  )
}

export default ContactMessageScreen;
