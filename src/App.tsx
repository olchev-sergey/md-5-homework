import { useGetRestaurants } from './api'
import StarIcon from './assets/star.svg?react'
import LogoIcon from './assets/stair.svg?react'

function App() {
  const { data: restaurants = [] } = useGetRestaurants()

  return (
    <>
      <header>
        <div>
          <LogoIcon width={16} height={16} />
          <span>Eats</span>
        </div>
        <div>
          <img alt="profile" src="/avatar.png" width="24" />
        </div>
      </header>
      <main>
        <input placeholder="Search for restaurants" />
        <section>
          {restaurants.map(({ id, description, name, url }) => (
            <div key={id}>
              <img src={url} width={160} />
              <div>
                <p>{name}</p>
                <p>{description}</p>
              </div>
              <div>
                <StarIcon width={16} height={16} />
                <StarIcon width={16} height={16} />
                <StarIcon width={16} height={16} />
                <StarIcon width={16} height={16} />
                <StarIcon width={16} height={16} />
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer>
        <p>Privacy Policy</p>
        <p>2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </>
  )
}

export default App
