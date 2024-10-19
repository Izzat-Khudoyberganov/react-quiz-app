import React, { Fragment, useContext } from 'react'
import { ConfirmUser, Header, Quiz } from '../components'
import { ConfirmContext } from '../context/confirmContext'



const SwitchUserRoute = () => {
    const { confirm } = useContext(ConfirmContext)
    return (
        <Fragment>
            <Header />
            <main>{confirm ? <Quiz
             /> : <ConfirmUser />}</main>
        </Fragment>
    )
}

export default SwitchUserRoute