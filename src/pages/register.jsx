import React from 'react'
import { LoginRegisterLayout } from '@/components/Layout'

import Head from 'next/head'
import Link from 'next/link'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import { TextField, SelectField } from '@/components/Field'

const Register = () => {
  return (
    <>
      <Head>
        <title>Sign Up - Taxpal</title>
      </Head>

      <div className='flex'>
        <Link href='/' aria-label="Home">
          <Logo className='h-10 w-auto'></Logo>
        </Link>
      </div>

      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get started for free
      </h2>

      <p className="mt-2 text-sm text-gray-700">
        Already registered?{" "}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline">
          Sign In
        </Link>{" "}
        to your account.
      </p>

      <form action='#'
        className='mt-10 grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6'
      >
        <TextField
          label="First Name"
          id="first_name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />

        <TextField
          label="Last Name"
          id="last_name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />

        <TextField
          className="col-span-full"
          label="Email Address"
          id="register_email"
          name="register_email"
          type="email"
          autoComplete="email"
          required
        />

        <TextField
          className="col-span-full"
          label="Password"
          id="register_password"
          name="register_password"
          type="password"
          autoComplete="new-password"
          required
        />

        <SelectField
          className="col-span-full"
          label="How did you hear about us ?"
          id="how_hear_about_us"
          name="how_hear_about_us">
          <option value="1">AltaVista Search</option>
          <option value="2">Super Bowl Commercial</option>
          <option value="3">Our Route 34 City bus ad</option>
          <option value="4">The &apos;Never Use This&apos; podcast</option>
        </SelectField>

        <Button
          type="submit"
          className="col-span-full"
          variant="solid"
          color="blue">
          Sign Up &rarr;
        </Button>

      </form>
    </>
  )
}

Register.Layout = LoginRegisterLayout

export default Register