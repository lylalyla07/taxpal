import React from 'react'
import { LoginRegisterLayout } from '@/components/Layout'

import Head from 'next/head'
import Link from 'next/link'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import { TextField } from '@/components/Field'

const Login = () => {
  return (
    <>
      <Head>
        <title>Sign In - Taxpal</title>
      </Head>

      <div className='flex'>
        <Link href='/' aria-label="Home">
          <Logo className='h-10 w-auto'></Logo>
        </Link>
      </div>

      <h2 className='mt-20 text-lg font-semibold text-gray-900'>
        Sign In to your account
      </h2>

      <p className='mt-2 text-sm text-gray-700'>
        Don&apos;t have an account?{' '}
        <Link href="/register" className="font-medium text-blue-600 hover:underline">Sign Up
        </Link>{" "}
        for a free trial
      </p>

      <form action="#"
        className='mt-10 grid grid-cols-1 gap-y-8'
      >
        <TextField
          id="login_email"
          name='login_email'
          label="Email address"
          type="email"
          placeholder="topcoder@fulllstack.com"
          required
        />
        <TextField
          id="login_password"
          name="login_password"
          label="Password"
          type="password"
          autoComplete="current-password"
          required
        />
        <Button
          type="submit"
          className="w-full"
          variant="solid"
          color="blue"
        >
          Sign In &rarr;
        </Button>
      </form>
    </>
  )
}

Login.Layout = LoginRegisterLayout

export default Login