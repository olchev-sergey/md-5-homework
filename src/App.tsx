const CARDS = [
  {
    id: '1',
    name: 'Mama\'s Kitchen',
    description: 'American, 4.7 stars',
    rating: 4,
    url: '/mamas-kitchen.png',
  },
  {
    id: '2',
    name: 'The Burger Joint',
    description: 'American, 4.6 stars',
    rating: 4,
    url: '/burger-joint.png',
  },
  {
    id: '3',
    name: 'Pasta Express',
    description: 'American, 4.5 stars',
    rating: 4,
    url: '/pasta-express.png',
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    description: 'American, 4.8 stars',
    rating: 4,
    url: '/taco-fiesta.png',
  },
]

function App() {
  return (
    <>
      <header>
        <div>
          <img alt="logo" src="/stair.svg" width="16"/>
          <span>Eats</span>
        </div>
        <div>
          <img alt="profile" src="/avatar.png" width="24"/>
        </div>
      </header>
      <main>
        <input placeholder="Search for restaurants"/>
        <section>
          {CARDS.map(({id, description, name, url}) => (
            <div key={id}>
              <img src={url} width={160}/>
              <div>
                <p>{name}</p>
                <p>{description}</p>
              </div>
              <div>
                <img alt="star" src="/star.svg" width="16"/>
                <img alt="star" src="/star.svg" width="16"/>
                <img alt="star" src="/star.svg" width="16"/>
                <img alt="star" src="/star.svg" width="16"/>
                <img alt="star" src="/star.svg" width="16"/>
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
