import { useState } from 'react'
import Navbar from "../comps/Navbar";

import Link from "next/link";

export default function IndexPage({ ninjas }) {
  const [ selectedCountry, setSelectedCountry ] = useState(null)
  return (
    <div>
      <Navbar />
      <h1> Find the best remote companies to work for</h1>
      <button className="btn" onClick={() => setSelectedCountry(null)}> Global </button>
      <button className="btn" onClick={() => setSelectedCountry('USA')}> USA </button>
      <button className="btn" onClick={() => setSelectedCountry('UK')}> UK </button>

      <Link href="/countries/USA"><a>USA PAGE</a></Link>

      {ninjas.filter(n => selectedCountry ? n.country === selectedCountry : true).map((ninja) => (
        <Link href={"/" + ninja.id} key={ninja.id}>
          <a>
            <div className="even-col">
              <h3>{ninja.name}, {ninja.country}</h3>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const dataWithCountry = data.map((user, i) => Object.assign(user, { country: i % 2 === 1 ? 'USA' : 'UK' }))

  return {
    props: { ninjas: dataWithCountry },
  };
}
