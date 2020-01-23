import React, { useState } from 'react'
import { Formik, withFormik } from 'formik'
import { connect } from 'react-redux'
import * as yup from 'yup'
import { addComment } from '../ac'

const AddItemForm = ({ addComment, openId }) => {
  console.log(openId)
  const reviewSchema = yup.object({
    user: yup
      .string()
      .required()
      .min(4),
    text: yup
      .string()
      .required()
      .min(6)
  })
  return (
    <Formik
      initialValues={{ user: '', text: '' }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        console.log(values, openId)
        addComment(values, openId)
        actions.resetForm()
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            placeholder="enter userName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.user}
          />
          {errors.user && touched.user && errors.user}
          <input
            type="text"
            name="text"
            placeholder="enter Comment"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />
          {errors.text && touched.text && errors.text}
          <button type="submit" onSubmit={handleSubmit} disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}

export default connect(
  null,
  { addComment }
)(AddItemForm)
