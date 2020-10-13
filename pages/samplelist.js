
import { use100vh } from 'react-div-100vh'
import { Fragment } from 'react'

import { v4 as uuid } from 'uuid'

import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

import PageLoading from '../components/Loading/PageLoading'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Copyright, HeaderName } from '../config/aboutUs'


export default function SampleList() {

    const height = use100vh()

    if (!height) return <PageLoading />


    return (
        <Fragment>
            <Header HeaderName={HeaderName} />
            <Container style={{ height: height }} className="shadow-lg p-3 mb-5 bg-white rounded">
                <ListGroup variant={'outline-dark'}>
                    <ListGroup.Item
                        as={'a'}
                        key={uuid()}
                        href='/sample?template=EmploymentContract'
                        >
                        僱員合約範例
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup variant={'outline-dark'}>
                    <ListGroup.Item
                        as={'a'}
                        key={uuid()}
                        href='/sample?template=Will'
                        >
                        遺囑範例
                    </ListGroup.Item>
                </ListGroup>
            </Container>
            <Footer Copyright={Copyright} />
        </Fragment>
    )
}