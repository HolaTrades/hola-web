import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import holaLogo from '../../assets/hola.svg'

import Container from '../../components/Container'

function HeaderNavLeft({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return <div className="navbar-start">{children}</div>
}

function HeaderNavCenter({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return <div className="navbar-center hidden lg:flex">{children}</div>
}

function HeaderNavRight({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return <div className="navbar-end text-right">{children}</div>
}

export default function Header() {
  return (
    <div className="navbar pt-3">
      <Container className="py-3 px-6 bg-yellow-400 shadow-xl rounded-full">
        <HeaderNavLeft>
          <Link to="/" className="inline-block py-1 px-2">
            <div className="inline-block align-middle">
              <img src={holaLogo} alt="Hola Trades" className="h-full w-full max-h-12" />
            </div>
            <div className="inline-block text-2xl text-gray-800 whitespace-nowrap tracking-tight align-middle">
              <span className="font-bold">HOLA</span>
              <span>Trades</span>
            </div>
          </Link>
        </HeaderNavLeft>
        <HeaderNavCenter>
          <ul className="menu menu-horizontal p-0 text-lg font-semibold">
            <li><div>Mission</div></li>
            <li><div>Team</div></li>
            <li><div>Whitepaper</div></li>
          </ul>
        </HeaderNavCenter>
        <HeaderNavRight>
          <a href="https://twitter.com/hola_trades" className="btn rounded-full bg-sky-100 hover:bg-twitter border-0 text-sky-500 hover:text-white">
            <span className="font-bold align-middle normal-case">Follow Us</span>
            <span className="pl-2 align-middle"><FaTwitter size={24} /></span>
          </a>
        </HeaderNavRight>
      </Container>
    </div>
  )
}
