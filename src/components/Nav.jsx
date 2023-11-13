
import React from 'react';
import { Link } from 'react-router-dom';
import { readdirSync } from 'fs';
import { join } from 'path';
import { Button } from 'bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function getPages() {
  const pagesDir = join(__dirname, '../pages');
  const files = readdirSync(pagesDir);
  return files.map((file) => ({
    name: file.replace('.jsx', ''),
    path: `/pages/${file.replace('.jsx', '')}`,
  }));
}

function Nav() {
  const pages = getPages();

  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page.name}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
