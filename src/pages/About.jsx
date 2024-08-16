import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <h3>About us </h3>
      <p>
        Introducing "MixMaster," the ultimate party sidekick app that fetches
        cocktails from the hilarious Cocktails DB API. With a flick of your
        finger, you'll unlock a treasure trove of enchanting drink recipes
        that'll make your taste buds dance and your friends jump with joy. Get
        ready to shake up your mixology game, one fantastical mocktail at a
        time, and let the laughter and giggles flow!
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  h3 {
    font-weight: 700;
    color: var(--primary-600);
    margin-bottom: 2.4rem;
  }
  p {
    font-size: 1.2rem;
    color: var(--grey-600);
    line-height: 1.5;
  }
`
export default About
