import Link from 'next/link'

const NotFound = () => {
    return (  
        <div className="not-found">
            <h1> Ooops, this page can't be found</h1>
            <h2> Go back to the <Link href="/"> <a> home page </a> </Link> </h2>
        </div>
    );
}
 
export default NotFound;