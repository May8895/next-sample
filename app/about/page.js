export default function Home({ params, searchParams }) {
    console.debug({params})
    console.debug({searchParams})
    const name = searchParams['name'] || 'World';   
    return (
      <h1>May Thazin Myo</h1>
    );
  }