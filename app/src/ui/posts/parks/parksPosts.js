import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from "yup"

import { fetchAllParks} from '../../../store/parks'
import { PostCard } from './PostCard'
import { httpConfig } from '../../utils/http-config'
import { Formik } from 'formik'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button'
import { PostForm } from './PostForm'

export const ParksPosts = () => {
  const dispatch = useDispatch()

  const parks = useSelector(store => {
    console.log("Redux Store", store)
    return store.parks ? store.parks : []
  })

  const sideEffects = () => {
    dispatch(fetchAllParks())
  }
  React.useEffect(sideEffects, [])
  return (
    <>
      <main className="my-5">
        <Container fluid="true" className="container-fluid text-center text-sm-left">

          <Row className=" mb-3">
            <Col>
              <h1>Parks</h1>
            </Col>
          </Row>

          <Row>

            <Card bg="shadow-light" className="border-0 rounded-6 w-50">
              <Card.Body>
                <PostForm />
              </Card.Body>
            </Card>
            <CardColumns className="p-4">
              {
                parks.map(parks => <PostCard parks={parks} key={parks.parkId} />)
              }
            </CardColumns>
          </Row>

        </Container>
      </main>
    </>
  )
};