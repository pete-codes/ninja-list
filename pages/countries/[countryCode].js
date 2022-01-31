import Link from "next/link";

export default function CountryPage({ ninjas, countryCode }) {
  return (
    <>
      <h1>List of people in {countryCode}</h1>

      {ninjas.map((ninja) => (
        <Link href={"/" + ninja.id} key={ninja.id}>
          <a>
            <div className="even-col">
              <h3>
                {ninja.name}, {ninja.country}
              </h3>
            </div>
          </a>
        </Link>
      ))}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const dataWithCountry = data.map((user, i) =>
    Object.assign(user, { country: params.countryCode })
  );

  return {
    props: { ninjas: dataWithCountry, countryCode: params.countryCode },
  };
}
