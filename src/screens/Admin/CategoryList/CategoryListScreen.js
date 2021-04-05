import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CATEGORY_CREATE_RESET } from '../../../constants/categoryConstants'
import Message from '../../../components/Message';
import Loader from '../../../components/Loader';
import Paginate from '../../../components/Paginate'
import {
  listCategories,
  deleteCategory,
  createCategory,
} from '../../../actions/categoryActions';
const CategoryListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1
    const dispatch = useDispatch()

    const categoryList = useSelector((state) => state.categoryList)
    const { error,loading, categories,page, pages} = categoryList;
    const categoryDelete = useSelector((state) => state.categoryDelete)
    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = categoryDelete
  
    const categoryCreate = useSelector((state) => state.categoryCreate)
    console.log("categoryCreate",categoryCreate);
    const {
      loading: loadingCreate,
      error: errorCreate,
      success: successCreate,
      category: createdCategory,
    } = categoryCreate
  
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
  
    useEffect(() => {
      dispatch({ type: CATEGORY_CREATE_RESET })
  
      if (!userInfo || !userInfo.isAdmin) {
        history.push('/login')
      }
  
      if (successCreate) {
        // console.log("categories",categories);
        history.push(`/admin/category/${createdCategory._id}/edit`)
      } else {
        dispatch(listCategories(pageNumber))
      }
    }, [
      dispatch,
      history,
      userInfo,
      successCreate,
      successDelete,
      pageNumber,
      createdCategory
    ])
  
    const deleteHandler = (id) => {
      if (window.confirm('Are you sure')) {
        dispatch(deleteCategory(id))
      }
    }
  
    const createCategoryHandler = () => {
      dispatch(createCategory());
    }
  return (
    <>
    
      <Row className='align-items-center'>
        <Col>
          <h1>Cateogries</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createCategoryHandler}>
            <i className='fas fa-plus'></i> Create Category
          </Button>
        </Col>
      </Row>
        <div>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>CATEGORY Name</th>
                <th></th>
              </tr>
            </thead>
            { loading ? (
         <Loader />
       ) : error ? (
         <Message variant='danger'>{error}</Message>
       ) : (
            <tbody>
            {categories && categories.map((category) => (
                <tr key={category._id}>
                  <td>{category._id}</td>
                  <td>{category.name}</td>
                  <td>
                    <LinkContainer to={`/admin/category/${category._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(category._id)}>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
            ))}
           </tbody>
           )}
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} pageName="categorylist"/>
        </div>
    </>
  )
}

export default CategoryListScreen;
