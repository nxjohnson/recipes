import Head from 'next/head'
import Header from '../components/layouts/PageHeader'
import Link from "next/link";

const Home = () => {
  const categories: string[] = [
    "Apps",
    "Bread",
    "Breakfast",
    "Mains",
    "Sides",
    "Sweets",
    "View All",
  ];

  const image = "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2508&q=80"
  return (
    <Header heading="Contents" image={image}>
      <div className="w-full flex flex-col gap-4 md:gap-8 mt-4 h-fit">
        {categories.map((category, index) => {
          return (
            <Link
              key={category}
              href={{
                pathname: '/recipes',
                query: { category }
              }}
            >
              <div className="flex justify-between font-subHeading text-xl font-medium border-b-2 border-neutral-200">
                <span>{category}</span>
                <span>{"0" + (index + 1)}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </Header>
  )
}

export default Home
